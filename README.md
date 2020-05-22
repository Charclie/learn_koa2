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

### Eslint的使用

```
npm install eslint
```

> 配置文件：

```
npx eslint --init

以问答形式的方式，选择响应的规则
完成配置之后，在项目目录下会多出一个.eslintrc.js文件，即Eslint的配置文件
```
> 代码检测

```
在执行代码检测之前，我们来更换一下Eslint的默认解析器，将其替换为 babel-eslint

// .eslintrc.js

module.exports = {
	"extends": "airbnb",
    "parser": "babel-eslint",
};
复制代码

通过命令行查看代码检测结果

在项目目录下运行如下命令即可，控制台会将我们所有不合规范的代码打印出来
缺点：使用控制控制台查看错误警告不方便

npx eslint src
复制代码

使用 VsCode的Eslint插件

在安装了Eslint插件的前提下，如果我们的项目中使用了Eslint规范，并且项目目录中配置了 .eslintrc.js文件夹，那么，不符合我们Eslint的代码会直接在我们的代码中提示出来，方便修改
```
