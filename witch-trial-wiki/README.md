# 魔法少女的魔女審判｜無劇透角色百科

非官方繁體中文角色百科。以《魔法少女ノ魔女裁判》官方公開角色資料為依據，整理 13 位角色的簡介、囚人編號與已公開魔法，不涉及劇情解答。

## 功能
- 搜尋中文暫譯名、日文原名、囚人編號
- 篩選官方已公開／未公開魔法
- 展開角色資訊，支援手機版
- 使用 `characters.json` 作為唯一資料來源

## 開發規則
請先閱讀同資料夾的 [`AGENTS.md`](./AGENTS.md)。新增角色時只需遵循欄位規範，編輯 `characters.json`，不用改寫 HTML。

## 本機預覽
在此資料夾執行 `python -m http.server 8000`，開啟 `http://localhost:8000/`。直接雙擊 HTML 可能因瀏覽器限制無法讀取 JSON。

## GitHub Pages
將整個 `witch-trial-wiki` 資料夾放在 Repository 根目錄。若原專案已啟用 main / root 的 GitHub Pages，網址為 `https://<username>.github.io/<repository>/witch-trial-wiki/`。若未啟用，前往 Settings → Pages → Deploy from a branch → main / (root)。

## 資料來源及聲明
官方網站：https://manosaba.com/ 。所有中文角色名均為本站暫譯，請以官方日文名稱為準。本站非官方，不使用未獲授權的官方角色圖片。
