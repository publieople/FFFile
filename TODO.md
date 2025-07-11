# TODO 开发计划

## 1. 需求分析与技术选型

- 明确核心功能与扩展需求
- 选定主技术栈：React + Vite + Electron + Node.js
- UI库：Tailwind CSS + Shadcn/ui
- 状态管理：Zustand/Redux Toolkit
- 文件操作：Node.js fs/promises
- 文件搜索：集成 Everything（Windows），fd/locate（macOS/Linux）
- 压缩/解压：node-stream-zip、adm-zip、7zip-bin
- AI集成：OpenAI API/本地LLM，Monaco Editor
- 插件系统：本地js插件+manifest，沙箱隔离

## 2. 项目基础搭建

- 初始化 Vite+React+Electron 项目结构
- 配置 TypeScript、ESLint、Prettier
- 基础路由与页面结构

## 3. 主界面与主题

- 设计简洁主界面，文件浏览器布局
- 实现浅色/深色主题切换

## 4. 文件操作功能

- 文件/文件夹新建、重命名、删除、复制、粘贴、移动
- 查看文件元数据（大小、类型、时间等）
- 支持跨分区移动

## 5. 文件搜索

- 集成 Everything（Windows）
- 兼容其他平台本地搜索
- 支持多条件筛选

## 6. 文件压缩与解压

- 支持 ZIP、RAR、7z 等常见格式
- 批量压缩/解压

## 7. 文件快速预览

- 文本文件内容预览
- 图片文件缩略图/预览
- 其他常见格式支持

## 8. 批量操作

- 批量重命名（自定义规则）
- 批量格式转换（如图片格式）
- 批量移动/复制/删除/压缩

## 9. AI脚本与自定义流程

- 集成 AI 脚本编辑与执行环境
- 支持自然语言生成脚本
- 可视化流程编辑器（拖拽式）

## 10. 插件系统

- 插件加载/启用/禁用/卸载
- 插件接口与数据交互规范
- 插件安全机制

## 11. 跨平台适配

- Windows/macOS/Linux 路径与权限适配
- UI风格适配

## 12. 用户体验与文档

- 操作撤销/恢复
- 新手引导与操作提示
- 多主题支持
- 文档中心、反馈入口

## 13. 社区与插件仓库（后续）

- 官方插件仓库与审核机制
- 社区交流与脚本/插件分享

## 14. 移动端方案预研（后续）

- React Native/Flutter 方案调研

---

> 按以上计划分阶段推进，每阶段完成后进行测试和文档完善。
