# learn_koa

### 使用import报错解决

- 安装 npm i babel-cli babel-preset-es2015
- 配置 package.json "nodemon --inspect=9229 app.js --exec babel-node"
- 根目录创建 .babelrc 
```javascript
{
    "presets": ["es2015"]
}
```

### 使用nodemon热加载

```
npm install nodemon
```
> 配置通过nodemon启动
