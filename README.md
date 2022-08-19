# 魁拔百科

本站全部内容完全公开，可审核修改错误内容或贡献新的内容。魁拔百科管理组致力于撰写一本涵盖《魁拔》作品及其世界观的百科全书。任何人都可以为本站作出贡献，我们将按照参与贡献者的署名要求（无要求默认为匿名）将其署名在其所贡献的内容。本站全部内容遵循 署名-非商业性使用-相同方式共享 4.0 国际 (CC BY-NC-SA 4.0) 许可协议，参与贡献者默认遵循该协议。

## 项目简介

本项目依托 Hexo 静态博客以及 Next 主题搭建。源码托管在 Github 上，使用 Cloudflare Pages 部署。

## 参与贡献

### Git 方式 (困难)

1. 准备环境: git nodejs 自行安装并配置环境变量
2. 创建项目: `mkdir kuiba-wiki && cd kuiba-wiki`
3. 克隆仓库: `git clone https://github.com/kuiba-wiki/kuiba-wiki.git .` 请 Fork 本仓库至你的账户中，并替换 git 地址
4. 安装依赖: `npm install`
5. 本地部署: `hexo s`
6. 新建文章: `hexo new 人物 迷麟` 参考文件 `scaffolds/人物.md` | `hexo new 作品 魁拔之战神崛起` 参考文件 `scaffolds/作品.md` 【非必须】
7. 编辑文章
8. 提交贡献: `git add . && git commit -m 更新 && git push`
9. 创建 PR
10. 等待审核
