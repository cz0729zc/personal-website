# Zhang Chi Personal Website

张驰的个人作品集网站，面向嵌入式软件开发岗位展示项目经历、实习经历、技术文章和 PDF 简历。

## 项目内容

- 个人主页：嵌入式软件开发方向、个人优势、联系方式和简历下载。
- 项目展示：SmartTrain-Node、智能果园灌溉监控系统、ESP32 智能植物传感器 MVP2.0。
- 实习经历：深圳实步科技有限公司、宜昌科威智能电子科技有限公司。
- 技术栈：STM32、ESP32、ESP-IDF、FreeRTOS、LVGL、MQTT、Gizwits、硬件调试等。
- 技术文章：LVGL 页面移植、ST7789 屏幕调试、ESP32-C3 I2S 音频调试。

## 目录结构

```text
.
├── personal-website/      # Next.js 网站源码
├── vercel.json            # Vercel 部署配置
└── README.md
```

## 本地运行

进入网站目录：

```powershell
cd C:\Users\admin\Documents\demo\personal-website
```

安装依赖：

```powershell
npm.cmd install
```

启动开发服务器：

```powershell
npm.cmd run dev -- --hostname 127.0.0.1 --port 3000
```

打开本地预览：

```text
http://127.0.0.1:3000
```

## 常用命令

```powershell
npm.cmd run lint
npm.cmd run build
```

## 部署

项目通过 Vercel 部署。根目录的 `vercel.json` 会让 Vercel 进入 `personal-website` 子目录安装依赖、构建，并发布静态导出目录：

```json
{
  "installCommand": "cd personal-website && npm install",
  "buildCommand": "cd personal-website && npm run build",
  "outputDirectory": "personal-website/out"
}
```

推送到 GitHub `main` 分支后，Vercel 会自动触发重新部署。
