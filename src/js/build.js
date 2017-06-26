({
    appDir: '../',   //项目根目录
	dir: '../../dist',  //输出目录，全部文件打包后要放入的文件夹（如果没有会自动新建的）
	
	baseUrl: 'js',   //相对于appDir，代表要查找js文件的起始文件夹，下文所有文件路径的定义都是基于这个baseUrl的
	
	modules: [					  //要优化的模块
	  { name:'views/index'} ,{ name:'views/404'}	//说白了就是各页面的入口文件，相对baseUrl的路径，也是省略后缀“.js”
	],
	
	fileExclusionRegExp: /^(r|build)\.js|.*\.less$/,	//过滤，匹配到的文件将不会被输出到输出目录去
	
	optimizeCss: 'standard', 
	
	removeCombined: true,   //如果为true，将从输出目录中删除已合并的文件
	
	paths: {	//相对baseUrl的路径
		'jquery': 'lib/jquery', // v1.12.3
        'avalon': 'lib/avalon', // v2.2.8
        'leadbase': 'utils/leadbase-encrypts', // 接口入参加密
        'reqwest': 'lib/reqwest.min', // 接口依赖插件
        'json': 'lib/json3.min', // support for IE6/7
        'domReady': 'lib/domReady', // require插件 
        'text': 'lib/text', // require插件文本格式转换
        'api': 'api/api', // 接口请求list
        'header': 'components/header',
        'footer': 'components/footer'
	},
    shim: {
        'api': {
            deps: ['jquery', 'reqwest'],
            exports: 'api'
        }
    }
})