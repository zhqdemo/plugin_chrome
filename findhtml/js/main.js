/*
 * 系统函数提供各种操作方法
 */
var sys = {
	/**
	 * 获取缓存数据
	 * @param key
	 */
	getLocalStorage:function(key,back){
		chrome.runtime.sendMessage({code:2,data:{key:key}}, function(response){
			if(response.code!=0){
				alert("getLocalStorage[key:"+key+"]"+response.msg);
		    }else{
		    	back(response.data);
		    }
		});
	},
	/**
	 * 保存缓存数据
	 * @param key
	 */
	setLocalStorage:function(key,value,back){
		chrome.runtime.sendMessage({code:1,data:{key:key,value:value}}, function(response){
		    if(response.code!=0){
		    	alert("setLocalStorage[key:"+key+",value:"+value+"]"+response.msg);
		    }else{
		    	back(response.msg);
		    }
		});
	},
	/**
	 * 显示执行中
	 */
	showWaiting:function(){
		var bg = $("#ck_waiting_bg");
		var wait = $("#ck_waiting_content");
		if(bg==null||bg.length==0){
			var bg_html = "<div id='ck_waiting_bg'><div>";
			$("body").append(bg_html);
			bg = $("#ck_waiting_bg");
			$("#ck_waiting_bg").click(function(){
				$("#ck_waiting_bg").hide();
				$("#ck_waiting_content").hide();
			})
		}
		if(wait==null||wait.length==0){
			var wait_html = "<div id='ck_waiting_content'><div>";
			$("body").append(wait_html);
			wait = $("#ck_waiting_content");
		}
		bg.show();
		wait.html("执行中...");
		wait.show();
		
	},
	/**
	 * 结束执行
	 */
	closeWaiting:function(){
		var bg = $("#ck_waiting_bg");
		var wait = $("#ck_waiting_content");
		bg.hide();
		wait.html("");
		wait.hide();
	},
	/**
	 * 显示提示信息
	 * @param content
	 * @param title
	 */
	showMsg:function(content,title){
		var bg = $("#ck_msg1_bg");
		var msg = $("#ck_msg1_content");
		if(bg==null||bg.length==0){
			var bg_html = "<div id='ck_msg1_bg'><div>";
			$("body").append(bg_html);
			bg = $("#ck_msg1_bg");
			
		}
		if(msg==null||msg.length==0){
			var msg_html = "<div id='ck_msg1_content'><div class='title'><div class='title-text'></div><div class='close'>关闭</div></div><div class='content'></div><div>";
			$("body").append(msg_html);
			msg = $("#ck_msg1_content");
			$("#ck_msg1_content .close").click(function(){
				$("#ck_msg1_bg").hide();
				$("#ck_msg1_content").hide();
			})
		}
		bg.show();
		msg.find(".title-text").html(title);
		msg.find(".content").html(content);
		msg.show();
	},
	closeMsg:function(){
		var bg = $("#ck_msg1_bg");
		var msg = $("#ck_msg1_content");
		bg.hide();
		msg.find(".content").html("");
		msg.hide();
	}
	
}
