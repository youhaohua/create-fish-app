前言:
-------

fish和现在主流的前端框架一样都是单页应用，单页应用的前端代码本质上是静态文件，浏览器加载完对应的js和html后由js去渲染对应的前端代码， 那么问题来了，为什么作为一个前端每次做fish项目还要后端的同事搭建后端环境呢,可以用node开一个服务器或者webpack-dev-server来跑对应的代码, 这个demo使用webpack实现开发过程中的自动刷新和打包对应的fish组件，既然使用了webpack打包构建代码，那么fish的requirejs的模块化引入方式就可以不用了。首先把项目需要引入的requirejs去掉,并使用es6的模块化方式引入对应的js组件<script type="text/javascript" src="fish-desktop/js/fish-desktop-require.js" data-main="main"></script>(这个文件去掉)

引入webpack后可放心的使用es6，babel打包编译后的js文件可兼容大部分浏览器，npm上非常丰富的第三方插件也可以使用。
----


开启项目
-------

进入package.json这一级文件夹，执行命令npm install(建议使用cnpm或者yarn)

npm run fish打开webpack-dev-server并自动打开浏览器

npm run build打包对应的fish组件和其他项目文件


配置文件config.js(根据项目做配置)
-------

openUrl:xxx //url配置

port:xxx //端口

proxy:{

'/iwhale-visual': {

target:'http://192.168.1.175:10088',

secure: false

}

}, //跨域设置

entry:'xxx.js' ,//入口js文件

output:'xxx.js'//出口文件

更多的配置还是需要在webpack.config.js里修改

结束:
-------
初级版本开发过程一定会有其他问题，后期可尝试引入redux来做状态管理，欢迎一起完善这个demo。
