/*
 * 创建元素的方法  elem 元素   jsonObj  配置一些参数
 * 依赖框架 : layer,  jquery
 */
var createDom = function(jsonObj){
	var me = this;
	me.jsonObj = jsonObj || {
		elem: "",  // 元素
		width: 340,
		height: 550
	}
	me.jsonObj.width = jsonObj.width || 300;
	me.jsonObj.height = jsonObj.height || 550;
	me.jsonObj.companyName = jsonObj.companyName || "厦门科技";
	me.jsonObj.promptCopy = jsonObj.promptCopy || "为了更好的服务，请填写下列信息，然后点”咨询“按钮，开始与安服人员进行交谈";
	me.jsonObj.companyIcon = jsonObj.companyIcon || "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520247878044&di=bc1840eb2c59be39e6704d6baf2dc60d&imgtype=0&src=http%3A%2F%2Fthumb106.hellorf.com%2Fpreview%2F283046936.jpg";

	// 前缀参数
	me.prefixParamUrl =  {
	    urlPrefix : "http://www.argen3630.com:88/",
	    filePrefix: "https://cdn.bootcss.com/"
	};
	me.urlParam = {
		getVisitorConfig: me.prefixParamUrl.urlPrefix + "admin.php/VisitorConfig/get",         //  访客配置详情
		jqueryWeui: me.prefixParamUrl.filePrefix + "jquery-weui/1.2.0/js/jquery-weui.min.js",
		jquery: me.prefixParamUrl.filePrefix + "jquery/1.11.0/jquery.min.js",
		weuiCss: me.prefixParamUrl.filePrefix + "weui/1.1.2/style/weui.min.css",
		jqueryWeuiCss: me.prefixParamUrl.filePrefix + "jquery-weui/1.2.0/css/jquery-weui.min.css"
	}

	// 初始化事件
	me.init = function(){
		var cssUrlArr = [ me.urlParam.weuiCss, me.urlParam.jqueryWeuiCss];
		me.loadStyle(cssUrlArr, function(){
			me.loadScript(me.urlParam.jquery, function(){
				me.loadScript(me.urlParam.jqueryWeui, function(){
					me.visitorRegisterSet()
				})
			})
		});
	}
	// 动态创建需要创建的js 和 css
	me.loadScript = function(url, callback){
		var script = document.createElement ("script")
	    script.type = "text/javascript";
	    if (script.readyState){ //IE
	        script.onreadystatechange = function(){
	            if (script.readyState == "loaded" || script.readyState == "complete"){
	                script.onreadystatechange = null;
	                callback();
	            }
	        };
	    } else { //Others
	        script.onload = function(){
	            callback();
	        };
	    }
	    script.src = url;
	    document.getElementsByTagName("head")[0].appendChild(script);
	}
	me.loadStyle = function(urlArr,callback){
		// 只能数字或者字符串
		if(urlArr instanceof Array) {
			console.log(1);
			for(var i = 0; i < urlArr.length; i++) {
				var link = document.createElement('link');
			    link.type = 'text/css';
			    link.rel = 'stylesheet';
			    link.href = urlArr[i];
			    var head = document.getElementsByTagName('head')[0];
			    head.appendChild(link);
			}
			callback();
		} else {
			var link = document.createElement('link');
			    link.type = 'text/css';
			    link.rel = 'stylesheet';
			    link.href = url;
			    var head = document.getElementsByTagName('head')[0];
			    head.appendChild(link);
			    callback();
		}
	}

	// 获取访客注册设置
	me.visitorRegisterSet = function(){
		$.ajax({
            url: me.urlParam.getVisitorConfig,
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (msg) {

            	if(msg.code == 0) {
					me.returnDeom(msg.object);
            	} else {
					$.alert(msg.message,1);
            	}
            }
        })
	}

	// 根据json数据返回dom节点 // 0 非 // 0 不 
	// "name_display": 0,  "name_require": 0,  "phone_display": 0, "phone_require": 0,
	// "mobile_display": 0,"mobile_require": 0, "fax_display": 0, "fax_require": 0, "qq_display": 0, "qq_require": 0,
	// "email_display": 0,"email_require": 0,"wangwang_display": 0, "wangwang_require": 0, "address_display": 0,
	// "address_require": 0, "company_display": 0, "company_require": 0, "note_display": 0, "note_require": 0,
	me.returnDeom = function(json){
		var _this = this;
		_this.strHTML = "";
		_this.labelText = "";
		_this.nameVal = "";
		_this.btNameVal = "";
		_this.json = json || {};
		_this.type = 1;
		_this.strHTML += '<style>#miniChatwinView .weui-cell__bd input{height:25px;line-height:25px;padding: 0 2px;border: 1px solid #cdcdcd} .tswa{font-size:12px;color:#f8a046;padding: 20px 20px 4px;line-height:20px;}.comniIcon{width:20px;height:20;border-radius:50%;-webkit-border-radius:50%;-ms-border-radius:50%;-moz-border-radius:50%;margin-right:6px;}.weui-cells:after, .weui-cells:before{display:none;}.weui-cells{margin:0;}.rightIcon{float:right;height:28px;margin-top:4px;background:#f8f2f2;padding:0 6px;line-height: 28px;color:#5f5f5f;}.weui-cell-title{padding: 0 10px;height:32px;line-height:32px;background:#da424f;color:#fff;}</style>';
		// 结构
		_this.strHTML += '<div id="miniChatwinView" style="width:'+ me.jsonObj.width +'px;height:'+ me.jsonObj.height +'px;">';
		_this.strHTML += '<div class="weui-cell-title" style="font-size:12px;"><img class="comniIcon" src="'+ me.jsonObj.companyIcon +'"><span>'+ me.jsonObj.companyName +'</span><span class="rightIcon">在线咨询</span></div>';
		_this.strHTML += '<p class="tswa">'+ me.jsonObj.promptCopy +'</p>';
		_this.strHTML += '<form id="viewForm">';
		_this.strHTML += '<div class="weui-cells weui-cells_form" style="font-size:12px;">';

		console.log( _this.json);
		for(var item in _this.json) { 
			var itemValue = _this.json[item];
			if( item == "name_display" ){
				_this.labelText = "姓名";
				_this.nameVal = "name_disp";
				_this.btNameVal = "name_requ";
				_this.type = 2;
			} else if( item == "phone_display" ){
				_this.labelText = "电话";
				_this.nameVal = "phone_disp";
				_this.btNameVal = "phone_requ";
				_this.type = 2;
			} else if( item == "mobile_display" ){
				_this.labelText = "手机";
				_this.nameVal = "mobile_disp";
				_this.btNameVal = "mobile_requ";
				_this.type = 2;
			} else if( item == "fax_display" ){
				_this.labelText = "传真";
				_this.nameVal = "fax_disp";
				_this.btNameVal = "fax_requ";
				_this.type = 2;
			} else if( item == "qq_display" ){
				_this.labelText = "QQ";
				_this.nameVal = "qq_disp";
				_this.btNameVal = "qq_requ";
				_this.type = 2;
			} else if( item == "email_display" ){
				_this.labelText = "邮箱";
				_this.nameVal = "email_disp";
				_this.btNameVal = "email_requ";
				_this.type = 2;
			} else if( item == "wangwang_display" ){
				_this.labelText = "旺旺";
				_this.nameVal = "wangwang_disp";
				_this.btNameVal = "wangwang_requ";
				_this.type = 2;
			} else if( item == "address_display" ){
				_this.labelText = "地址";
				_this.nameVal = "address_disp";
				_this.btNameVal = "address_requ";
				_this.type = 2;
			} else if( item == "company_display" ){
				_this.labelText = "公司";
				_this.nameVal = "company_disp";
				_this.btNameVal = "company_requ";
				_this.type = 2;
			} else if( item == "note_display" ){
				_this.labelText = "备注";
				_this.nameVal = "note_disp";
				_this.btNameVal = "mobile_requ";
				_this.type = 2;
			} else {
				_this.type = 1;
			}	
			if(_this.type == 2){
				// 名字
				if(itemValue == 0) {
					_this.strHTML += 	
					'<div class="weui-cell">'+
					    '<div class="weui-cell__hd"><label class="weui-label" style="width:60px;margin:0;padding-right:10px;text-align:right;">'+ _this.labelText +'</label></div>'+
					    '<div class="weui-cell__bd">'+
					      	'<input class="weui-input" name="'+_this.nameVal+'" type="text" placeholder="请输入'+ _this.labelText +'">'+
					    '</div>'
					if(_this.json.name_require == 0) {
						_this.strHTML += 
						'<div class="weui-cell__ft" style="font-size:12px;color:#f12413;padding-left: 5px;padding-right: 15px;">'+
					      	'<span>*</span><input type="hidden" name="'+ _this.btNameVal +'"/>'+
					    '</div>'
					}
					_this.strHTML +=  
				  	'</div>'
				} 
			}	
		}


		_this.strHTML += '</form>';
		_this.strHTML += '</div>';
		_this.strHTML += '</div>';
		console.log(_this.strHTML);
		$(me.jsonObj.elem).html(_this.strHTML);
	}


	// 所有的事件
	me.allEvent = function(){

	}
	me.init();
}