**基于React的电子商城测试项目**


----------

- **[项目目录结构](https://bruce-zxy.github.io/img/yg-react-eBusiness.png)**

文字简介（实时更新）：

<pre>
.
├── build						// 打包后生成的静态文件
|	├── index.html
|	├── bundle.js
|	└── man.min.css
├── dist						// 打包前准备的原始文件
|	└── index.html
├── data						// 静态数据文件
|	└── data.json
└── src							// React组件源
	├── component				// React最小单元组件源
	|	└── Foo
	|		├── Foo.js
	|		├── Foo.style.js
	|		├── Index.js
	|		├── img
	|		└── css
	├── app						// React动态组件模板
	|	├── Foo
	|	|	├── Foo.js
	|	|	├── Foo.style.js
	|	|	├── Index.js
	|	|	├── img
	|	|	└── css
	|	└── App.js
	├── views					// React静态组件模板
	|	└── Foo
	|		└── View.js
	├── vendor					// 第三方库文件
	|	└── jQuery-1.9.1
	|		└── jQuery-1.9.1.min.js
	└── store					// React数据流组件模板
		└── Foo
			└── Foo.store.js
</pre>

图片简介（参考）：

![项目目录结构导图](https://bruce-zxy.github.io/img/yg-react-eBusiness.png)



- **开发环境测试**

	- cd yg-react-eBusiness
    - npm install
    - npm start
    - 打开浏览器访问localhost:8888