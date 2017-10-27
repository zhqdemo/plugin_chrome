$(function(){
	/**
	 * 初始化输入框
	 */
	function init_input(){
		sys.getLocalStorage("ck_input_001",back_ck_input_001);
		function back_ck_input_001(data){
			$("#ck_input_001").val(data);
		}
		sys.getLocalStorage("ck_input_002",back_ck_input_002);
		function back_ck_input_002(data){
			if(data=="1"){
				$("#ck_input_002").prop("checked",true);;
			}
		}
		
	}
	init_input();
	/**
	 * 按钮绑定点击事件
	 */
	$('#ck_button_001').click(function () {
		click_save();
	});
	/**
	 * 点击执行操作
	 */
	function click_save(){
		var ck_input_001 = $("#ck_input_001").val();
		var ck_input_002 = ($("#ck_input_002").is(':checked')?"1":"0");
		sys.setLocalStorage("ck_input_001", ck_input_001);
		sys.setLocalStorage("ck_input_002", ck_input_002);
	}
})