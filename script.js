const officialSource = 'https://mushokutensei.jp/character/';

// Replace image with a local relative path when you have an authorized asset, e.g. "images/rudeus.webp".
// Name spellings follow the requested Traditional Chinese list; unverified facts are explicitly marked.
const characters = [
  {id:'rudeus',name:'魯迪烏斯・格雷拉特',title:'轉生者・魔術師',role:'格雷拉特家族',abilities:['魔術'],abilityText:'魔術（詳細等級待確認）',short:'帶著前世記憶轉生的少年，決心把握新的人生，認真面對眼前的每一次相遇。',intro:'魯迪烏斯保有前世的記憶，出生於格雷拉特家。他從小學習魔術與語言，並在旅途中逐步成長。',details:{'身分':'格雷拉特家族成員；轉生者','主要能力':'魔術；具體等級與完整能力清單待確認','小說劇透':'依本圖鑑資料：洛琪希、希露菲葉特與艾莉絲為其三位妻子。','資料註記':'簡介參照官方動畫網站；未列未核實的實力排名。'},image:'images/rudeus.jpg',icon:'R',accent:'#8dc4dc',verified:true},
  {id:'roxy',name:'洛琪希・米格路迪亞',title:'水王級魔術師',role:'魔族・魔術師',abilities:['魔術'],abilityText:'水系魔術',short:'來自米格路迪亞族的魔術師，也是魯迪烏斯生命中重要的老師與引路人。',intro:'洛琪希是米格路迪亞族的魔術師，曾擔任魯迪烏斯的家庭教師。她的魔術知識與教導，為魯迪烏斯踏上旅程打下基礎。',details:{'身分':'米格路迪亞族；魔術師','主要能力':'水系魔術；官方動畫角色頁列為水王級','小說劇透':'依本圖鑑資料：魯迪烏斯的第二任妻子。','資料註記':'稱號及角色資料依官方動畫網站。'},image:'images/roxy-migurdia.jpg',icon:'水',accent:'#77bdd5',verified:true},
  {id:'sylphie',name:'希露菲葉特',title:'王宮首席治癒術師',role:'王宮・魔術師',abilities:['魔術','治癒'],abilityText:'魔術・治癒魔術',short:'魯迪烏斯的青梅竹馬，擅長魔術並在王宮任職，總以溫柔與堅定支持重要的人。',intro:'希露菲葉特是魯迪烏斯的青梅竹馬，後來在王宮擔任首席治癒術師。她擅長魔術，並在關鍵時刻展現出可靠的一面。',details:{'身分':'魯迪烏斯的青梅竹馬；王宮術師','主要能力':'魔術、治癒魔術','小說劇透':'依本圖鑑資料：魯迪烏斯的第一任妻子。','資料註記':'職務與關係依官方動畫網站角色介紹。'},image:'images/sylphiette.jpg',icon:'風',accent:'#9bd5b6',verified:true},
  {id:'eris',name:'艾莉絲・伯雷亞斯・格雷拉特',title:'劍士',role:'伯雷亞斯家族',abilities:['劍術'],abilityText:'劍術',short:'出身伯雷亞斯家族，性格直率而好勝，在旅途與修行中鍛鍊自己的劍技。',intro:'艾莉絲出身於阿斯拉王國的伯雷亞斯家族。她與魯迪烏斯一同經歷旅程，並持續磨練劍術。',details:{'身分':'伯雷亞斯家族成員','主要能力':'劍術；流派與等級待確認','小說劇透':'依本圖鑑資料：魯迪烏斯的第三任妻子。','資料註記':'人物基本資料依官方動畫網站。'},image:'images/eris.jpg',icon:'剣',accent:'#e2a27e',verified:true},
  {id:'ruijerd',name:'瑞傑路德・斯佩路迪亞',title:'斯佩路德族戰士',role:'斯佩路德族',abilities:['戰鬥'],abilityText:'戰鬥能力（細項待確認）',short:'斯佩路德族的戰士，與魯迪烏斯和艾莉絲結伴旅行，致力守護族人的名譽。',intro:'瑞傑路德是斯佩路德族的戰士，在魔大陸與魯迪烏斯、艾莉絲同行。他珍視承諾，並希望改變世人對斯佩路德族的看法。',details:{'身分':'斯佩路德族戰士','主要能力':'戰鬥能力；官方角色頁未提供可核對的完整細項','資料註記':'姓名與角色列見官方動畫網站；細節以動畫已公開內容為限。'},image:'images/ruijerd.jpg',imagePosition:48,icon:'槍',accent:'#b6c787',verified:true},
  {id:'orsted',name:'龍神奧爾斯帝德',title:'龍神・七大列強第二位',role:'七大列強',abilities:['戰鬥','魔術'],abilityText:'戰鬥・魔術（細項待確認）',short:'被稱為龍神的強大人物，與魯迪烏斯的命運產生交會。',intro:'奧爾斯帝德是故事中的重要人物，官方動畫網站稱他為龍神。他的過去與能力細節涉及劇情，這裡不補寫未在官方頁面確認的設定。',details:{'身分':'龍神','主要能力':'官方角色頁未列出可核實的能力細項','小說劇透':'依本圖鑑資料：七大列強第二位。','資料註記':'官方網站確認其龍神身分；排名屬小說劇透。'},image:'images/orsted.jpg',icon:'龍',accent:'#c6a9dc',verified:true},
  {id:'kalman',name:'北神卡爾曼三世',title:'北神・七大列強第七位',role:'北神流',abilities:['劍術','戰鬥'],abilityText:'北神流劍術',short:'亞歷山大・卡爾曼，依提供資料列為七大列強第七位。',intro:'亞歷山大・卡爾曼是北神流相關角色。本圖鑑依你提供的資料，收錄其北神三世稱號與七大列強第七位排名。',details:{'身分':'北神三世；亞歷山大・卡爾曼','主要能力':'北神流劍術','小說劇透':'七大列強第七位。'},image:'images/kalman-iii.jpg',imagePosition:86,icon:'北',accent:'#d2bd7e',verified:true},
  {id:'gal',name:'劍神加爾・法利昂',title:'劍神・七大列強第六位',role:'劍神流',abilities:['劍術'],abilityText:'劍術（細項待確認）',short:'劍神流的劍神，依提供資料列為七大列強第六位。',intro:'加爾・法利昂列於官方動畫網站的出演角色資料。本圖鑑依你提供的資料，收錄其劍神稱號與七大列強第六位排名。',details:{'身分':'劍神；劍神流當主','主要能力':'劍術；詳細招式待確認','小說劇透':'七大列強第六位。'},image:'images/gal-farion.jpg',icon:'刃',accent:'#e2b57b',verified:true},
  {id:'reida',name:'列妲・莉亞（水神）',title:'水神',role:'水神流',abilities:['劍術'],abilityText:'水神流劍術',short:'水神流的水神列妲・莉亞，官方動畫角色頁亦列有此角色。',intro:'列妲・莉亞（レイダ・リィア）出現在官方動畫網站的《艾莉絲修行編》角色資料中，並標示為水神。',details:{'身分':'水神；水神流','主要能力':'水神流劍術；詳細招式待確認','資料註記':'日文姓名與稱號參照官方動畫網站。'},image:'images/reida-lia.jpg',icon:'水',accent:'#7cb8d3',verified:true}
];

const grid = document.querySelector('#character-grid');
const searchInput = document.querySelector('#search-input');
const filterSelect = document.querySelector('#filter-select');
const count = document.querySelector('#result-count');
const emptyState = document.querySelector('#empty-state');
const dialog = document.querySelector('#character-dialog');
const modalContent = document.querySelector('#modal-content');
const activeFilter = document.querySelector('#active-filter');

const categories = [...new Set(characters.flatMap(c => [c.role, ...c.abilities]))].sort((a,b)=>a.localeCompare(b,'zh-Hant'));
for (const category of categories) {
  const option = document.createElement('option');
  option.value = category;
  option.textContent = category;
  filterSelect.append(option);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
function artMarkup(character, modal=false) {
  if (character.image) return `<img class="${modal?'modal-image':'card-image'}" src="${escapeHTML(character.image)}" alt="${escapeHTML(character.name)}" style="object-position:center ${character.imagePosition ?? (modal ? 25 : 28)}%" loading="lazy">`;
  return modal
    ? `<span class="modal-portrait" aria-hidden="true">${escapeHTML(character.icon)}</span><span class="modal-art-label">PORTRAIT SLOT · IMAGE NOT LICENSED</span>`
    : `<span class="portrait-placeholder" aria-hidden="true">${escapeHTML(character.icon)}</span><span class="placeholder-caption">PORTRAIT SLOT · IMAGE NOT LICENSED</span>`;
}
function cardMarkup(character, index) {
  return `<article class="character-card" role="button" tabindex="0" data-id="${character.id}" aria-label="查看${escapeHTML(character.name)}詳細資料" style="--accent:${character.accent};animation-delay:${index*35}ms">
    <div class="card-art">${artMarkup(character)}<span class="card-number">NO. ${String(index+1).padStart(2,'0')}</span><span class="card-status">${character.verified?'已核實部分資料':'資料待確認'}</span></div>
    <div class="card-body"><div class="card-title-row"><div><h3 class="card-name">${escapeHTML(character.name)}</h3><span class="card-title">${escapeHTML(character.title)}</span></div><span class="role-tag">${escapeHTML(character.role)}</span></div>
    <p class="card-ability"><b>能力</b>${escapeHTML(character.abilityText)}</p><p class="card-description">${escapeHTML(character.short)}</p><div class="card-more"><span>查看角色資料</span><span aria-hidden="true">↗</span></div></div>
  </article>`;
}
function render() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  const category = filterSelect.value;
  const visible = characters.filter(character => {
    const matchesName = character.name.toLocaleLowerCase().includes(query);
    const matchesCategory = category === 'all' || character.role === category || character.abilities.includes(category);
    return matchesName && matchesCategory;
  });
  grid.innerHTML = visible.map((character,index)=>cardMarkup(character,index)).join('');
  count.textContent = String(visible.length);
  emptyState.hidden = visible.length !== 0;
  grid.hidden = visible.length === 0;
  activeFilter.hidden = category === 'all' && !query;
  activeFilter.textContent = [query ? `姓名：${searchInput.value.trim()}` : '', category !== 'all' ? `分類：${category}` : ''].filter(Boolean).join('　·　');
}
function openDetails(id) {
  const character = characters.find(item => item.id === id);
  if (!character) return;
  const entries = Object.entries(character.details).map(([key,value])=>`<dt>${escapeHTML(key)}</dt><dd>${escapeHTML(value)}</dd>`).join('');
  modalContent.innerHTML = `<div class="modal-art" style="--accent:${character.accent}">${artMarkup(character,true)}</div><div class="modal-main"><p class="modal-kicker">CHARACTER RECORD · ${character.verified?'PARTIALLY VERIFIED':'PENDING VERIFICATION'}</p><h2 id="dialog-name">${escapeHTML(character.name)}</h2><p class="modal-title">${escapeHTML(character.title)}</p><div class="modal-tags"><span>${escapeHTML(character.role)}</span>${character.abilities.map(a=>`<span>${escapeHTML(a)}</span>`).join('')}</div><p class="modal-intro">${escapeHTML(character.intro)}</p><dl class="detail-list">${entries}</dl><a class="modal-source" href="${officialSource}" target="_blank" rel="noreferrer">官方動畫角色資料 ↗</a></div>`;
  if (!dialog.open) dialog.showModal();
}
grid.addEventListener('click', event => {
  const card = event.target.closest('.character-card');
  if (card) openDetails(card.dataset.id);
});
grid.addEventListener('keydown', event => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('.character-card')) {
    event.preventDefault();
    openDetails(event.target.dataset.id);
  }
});
searchInput.addEventListener('input',render);
filterSelect.addEventListener('change',render);
document.querySelector('#clear-search').addEventListener('click',()=>{searchInput.value='';filterSelect.value='all';render();searchInput.focus();});
document.querySelector('#reset-empty').addEventListener('click',()=>{searchInput.value='';filterSelect.value='all';render();});
document.querySelector('#modal-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&dialog.open)dialog.close();});
render();
