# 簡易任務管理前端專案

## 專案需求

1. 通用
   1. [x] 可新增自訂任務
   2. [x] 可修改已存在任務
   3. [x] 可任意變更任務狀態
   4. [x] 可刪除任務
   5. [x] 即時計算任務完成狀況
   6. [x] 任務資料持久化

## 技術選用

- React (Next.js App Router)：現代化頁面管理。
- TypeScript：型別安全。
- Zod：表單驗證。
- Chakra UI：快速 UI 建構。
- Zustand：全域狀態管理（Task 儲存與操作）。

## 環境設置

### 前置需求

- Node.js (建議版本 14 以上)
- Docker (建議版本 20 以上)
- Docker Compose (建議版本 1.27 以上)

### 安裝步驟

1. 將專案複製到本地端：

   ```sh
   git clone <專案網址>
   cd <專案目錄>
   ```

#### 進行部署

##### 使用 Docker 部署

1. 建立並啟動 Docker 容器：

   ```sh
   docker-compose up --build
   ```

##### 使用 npm 指令 (不使用容器)

1. 安裝相依套件：

   ```sh
   npm install --legacy-peer-deps
   ```

2. 打包編譯伺服器程式碼：

   ```sh
   npm run build
   ```

3. 透過 nginx 等工具 serve ./out/ 即可

#### 建立開發環境

##### 使用 Docker 開發

1. 建立並啟動 Docker 容器：

   ```sh
   docker-compose up --build
   ```

2. 進入 Docker 容器：

   ```sh
   docker-compose exec app sh
   ```

3. 在容器內執行應用服務：

   ```sh
   npm run dev
   ```

##### 本地開發環境

1. 安裝相依套件：

   ```sh
   npm install
   ```

2. 啟動開發伺服器：

   ```sh
   npm run dev
   ```

3. 開啟瀏覽器並訪問 <http://localhost:3000> 查看應用服務。
