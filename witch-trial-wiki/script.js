'use strict';

const cards = document.querySelector('#cards');
const count = document.querySelector('#count');
const search = document.querySelector('#search');
const filter = document.querySelector('#filter');
let characters = [];

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function sourceLink(source) {
  const link = element('a', 'source-link', '官方資料來源 ↗');
  link.href = source;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  return link;
}

function makeCard(character) {
  const card = element('article', 'card');
  const detail = element('details', 'character-detail');
  const summary = element('summary', 'card-summary');
  const top = element('div', 'card-top');
  top.setAttribute('aria-hidden', 'true');
  top.append(element('span', 'archive-label', 'PRISONER ARCHIVE'), element('span', 'archive-number', character.id), element('span', 'star', '✦'));
  const body = element('div', 'card-body');
  body.append(
    element('span', 'serial', `囚人編號 ${character.id}`),
    element('h3', '', character.displayName),
    element('span', 'translation', '中文暫譯'),
    element('p', 'jp', character.name),
    element('p', 'card-description', character.description),
    element('span', 'magic', `魔法：${character.magic}`),
    element('span', 'detail-toggle', '公開資料')
  );
  summary.append(top, body);
  const content = element('div', 'detail-content');
  content.append(element('h4', '', '角色介紹'), element('p', 'desc', character.description), element('p', 'detail-note', '僅整理官方公開基本設定；未公開資訊不作推測。'), sourceLink(character.source));
  detail.append(summary, content);
  card.append(detail);
  return card;
}

function render() {
  const query = search.value.trim().toLocaleLowerCase();
  const matches = characters.filter(character =>
    [character.name, character.displayName, character.id, character.description].some(value => value.toLocaleLowerCase().includes(query)) &&
    (filter.value === 'all' || (filter.value === 'known' ? character.magic !== '未公開' : character.magic === '未公開'))
  );
  count.textContent = `顯示 ${matches.length} / ${characters.length} 位角色`;
  cards.replaceChildren();
  if (!matches.length) {
    cards.append(element('p', 'state', '找不到符合條件的角色，請更換搜尋字詞或重設條件。'));
    return;
  }
  cards.append(...matches.map(makeCard));
}

// Keep the repository's existing six-field JSON format and stable prisoner IDs.
function validateCharacters(data) {
  const fields = ['id', 'name', 'displayName', 'description', 'magic', 'source'];
  const ids = new Set();
  const names = new Set();
  if (!Array.isArray(data) || !data.length) throw new Error('角色資料必須是非空陣列');
  for (const character of data) {
    if (!character || Object.keys(character).length !== fields.length ||
      !fields.every(key => typeof character[key] === 'string' && character[key].trim()) ||
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(character.id) || ids.has(character.id) || names.has(character.name)) {
      throw new Error('角色欄位不完整或重複');
    }
    const source = new URL(character.source);
    if (source.protocol !== 'https:' || source.hostname !== 'manosaba.com') throw new Error('來源須為官方網站');
    ids.add(character.id);
    names.add(character.name);
  }
  return data;
}

async function init() {
  search.disabled = true;
  filter.disabled = true;
  document.querySelector('#reset').disabled = true;
  cards.setAttribute('aria-busy', 'true');
  try {
    const response = await fetch('./characters.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    characters = validateCharacters(await response.json());
    render();
    search.disabled = false;
    filter.disabled = false;
    document.querySelector('#reset').disabled = false;
  } catch (error) {
    const message = element('div', 'state');
    const retry = element('button', 'button', '重新載入');
    retry.type = 'button';
    retry.addEventListener('click', init);
    message.append(element('p', '', '角色資料載入失敗，請稍後重試。若在本機預覽，請透過 HTTP 伺服器開啟。'), retry);
    cards.replaceChildren(message);
    count.textContent = '檔案暫時無法讀取';
    console.error(error);
  } finally {
    cards.setAttribute('aria-busy', 'false');
  }
}

search.addEventListener('input', render);
filter.addEventListener('change', render);
document.querySelector('#reset').addEventListener('click', () => {
  search.value = '';
  filter.value = 'all';
  render();
  search.focus();
});
init();
