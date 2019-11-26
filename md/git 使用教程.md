# git 使用教程
> 一个文件的文件名，应该包含其路径信息，例如在 `gitTest` 目录下有一个 `index.html`，则 index.html 的文件名为 `gitTest/index.html`

### 克隆项目到本地
```
git clone 项目地址
```

### 查看状态：
```
git status
```

### 查看文件变化：
```
git diff 文件名
```

### 添加指定文件、文件夹到暂存区
```
git add 文件1 文件2
git add 文件夹
git add .（将提交所有的改动文件）
```
### 提交暂存区到仓库区
```
git commit -m "这里写提交日志"
```
### 推送当前分支到远程仓库
```
git push 
```

### 获取远程仓库文件
```
git pull
```
