# 气血状态自测问卷（纯 JavaScript 版本）

本项目已改为不依赖任何构建工具或框架的纯 JavaScript 版本，便于直接部署到 GitHub Pages 或任意静态托管服务。页面样式仍使用 Tailwind CSS CDN，问卷逻辑由 `app.js` 在浏览器端完成。

## 本地预览
1. 直接双击 `index.html`，或在项目根目录运行一个静态服务器：
   ```bash
   python -m http.server 4173
   ```
2. 打开浏览器访问对应地址（例如 `http://localhost:4173`），即可开始答题。

## 部署到 GitHub Pages
1. 将仓库推送到 GitHub。
2. 在仓库的 **Settings > Pages** 中选择分支和根目录（`/`）。
3. 保存后，等待 GitHub Pages 完成构建，生成的站点即可直接访问。

## 目录结构
- `index.html`：页面骨架与样式引用。
- `app.js`：题目数据、状态管理和页面渲染逻辑（纯 JavaScript）。
- 其他 TypeScript/React 文件已不再使用，可按需删除或保留备份。
