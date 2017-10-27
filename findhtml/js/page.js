$(function(){
	var run = false;
	var value = "";
	/**
	 * 初始化
	 */
	function init(){
		sys.getLocalStorage("ck_input_002",back_ck_input_002);
		function back_ck_input_002(data){
			if(data=="1"){
				run = true;
				sys.getLocalStorage("ck_input_001",back_ck_input_001);
			}else{
				run = false;
			}
		}
		function back_ck_input_001(data){
			value = data;
			startSearch(data);
		}
	}
	init();
	/**
	 * 开始搜索页面
	 */
	function startSearch(str){
		sys.showWaiting();
		var html = $("html").html();
		var reg = /(<span[^<]*(我是)[^<]*<\/span>)/g;
		var result= html.match(reg);
		console.log(result);
		sys.closeWaiting();
	}
})