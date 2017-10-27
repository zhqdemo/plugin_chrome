/**
 * message注册{code:1,data:null},{code:1存，2：取,data:null}
 * resultdata:{code:0成功，非0失败，msg：“”，data:数据}
 */
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
	console.log("getrequest:"+JSON.stringify(message));
    /*if(message == 'Hello'){
        sendResponse('Hello from background.');
    }*/
    var code = message.code;
    var result = {};
    switch (code) {
	case 1://保存
		result = saveData(message.data.key,message.data.value);
		break;
	case 2://取值
		result = getDate(message.data.key);
		break;
	default:
		result = {code:1,msg:"code can not find!"};
		break;
	}
    sendResponse(result);
});
/**
 * 保存数据
 * @param key
 * @param value
 */
function saveData(key,value){
	var result = null;
	if(window.localStorage){
		localStorage.setItem(key,value);
		result = {code:0,msg:"success"};
	}else{
		result = {code:1,msg:"enabledd localStorage"};
	}
	console.log(result);
	return result;
}
/**
 * 获取数据
 * @param key
 */
function getDate(key){
	var result = null;
	if(window.localStorage){
		var data = localStorage.getItem(key);
		result = {code:0,data:data,msg:"success"};
	}else{
		result = {code:1,msg:"enabledd localStorage"};
	}
	console.log(result);
	return result;
}