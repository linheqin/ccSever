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
	me.returnDataJson = {
        "id": 1,
        "companyid": 1,
        "name_disp": 1,
        "name_requ": 0,
        "phone_disp": 1,
        "phone_requ": 0,
        "mobile_disp": 0,
        "mobile_requ": 0,
        "fax_disp": 0,
        "fax_requ": 0,
        "qq_disp": 1,
        "qq_requ": 0,
        "email_disp": 0,
        "email_requ": 0,
        "wangwang_disp": 0,
        "wangwang_requ": 0,
        "address_disp": 0,
        "address_requ": 0,
        "company_disp": 0,
        "company_requ": 1,
        "note_disp": 0,
        "note_requ": 0,
        "config_type": 0,
        "update_time": 0
    }
	me.jsonObj.dataJsonEvent = jsonObj.dataJsonEvent || false;
	me.jsonObj.width = jsonObj.width || 300;
	me.jsonObj.height = jsonObj.height || "auto";
    me.jsonObj.minHeight = jsonObj.minHeight || "400";
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
            		console.log(me.jsonObj.dataJsonEvent);
                    var data = msg.object;
                    var data = me.returnDataJson; // 测试

					if(me.jsonObj.dataJsonEvent) {
                        me.setXQList(data);
					}

					me.returnDeom(data);
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
		console.log(json);
		var _this = this;
		_this.strHTML = "";
		_this.labelText = "";
		_this.nameVal = "";
		_this.btNameVal = "";
		_this.json = json || {};
		_this.type = 1;
		_this.strHTML += '<style>#miniChatwinView{border:1px solid #cdcdcd}#miniChatwinView .weui-cell__bd input{height:25px;line-height:25px;padding: 0 2px;border: 1px solid #cdcdcd} .tswa{font-size:12px;color:#f8a046;padding: 20px 20px 4px;line-height:20px;}.comniIcon{width:20px;height:20;border-radius:50%;-webkit-border-radius:50%;-ms-border-radius:50%;-moz-border-radius:50%;margin-right:6px;}.weui-cells:after, .weui-cells:before{display:none;}.weui-cells{margin:0;}.rightIcon{cursor:pointer;float:right;height:28px;margin-top:4px;background:#f8f2f2;padding:0 6px;line-height: 28px;color:#5f5f5f;}.weui-cell-title{padding: 0 10px;height:32px;line-height:32px;background:#da424f;color:#fff;}</style>';
		// 结构
		_this.strHTML += '<div id="miniChatwinView" style="min-height:'+me.jsonObj.minHeight+'px;width:'+ me.jsonObj.width +'px;height:'+ me.jsonObj.height +'px;">';
		_this.strHTML += '<div class="weui-cell-title" style="font-size:12px;"><img class="comniIcon" src="'+ me.jsonObj.companyIcon +'"><span>'+ me.jsonObj.companyName +'</span><span class="rightIcon">在线咨询</span></div>';
		_this.strHTML += '<p class="tswa">'+ me.jsonObj.promptCopy +'</p>';
		_this.strHTML += '<form id="viewForm">';
		_this.strHTML += '<div class="weui-cells weui-cells_form" style="font-size:12px;">';

		// console.log( _this.json);
		for(var item in _this.json) { 
			var itemValue = _this.json[item];
			var itemValArr = item.split("_");
			var obj1 = _this.json[itemValArr[0]+"_disp"];
            var obj2 = _this.json[itemValArr[0]+"_requ"];
			console.log(obj1);
			if( item == "name_display" ||  item == "name_disp" ){
				_this.labelText = "姓名";
				_this.nameVal = "name_disp";
				_this.btNameVal = "name_requ";
				_this.type = 2;
			} else if( item == "phone_display" || item == "phone_disp" ){
				_this.labelText = "电话";
				_this.nameVal = "phone_disp";
				_this.btNameVal = "phone_requ";
				_this.type = 2;
			} else if( item == "mobile_display" || item == "mobile_disp" ){
				_this.labelText = "手机";
				_this.nameVal = "mobile_disp";
				_this.btNameVal = "mobile_requ";
				_this.type = 2;
			} else if( item == "fax_display" || item == "fax_disp" ){
				_this.labelText = "传真";
				_this.nameVal = "fax_disp";
				_this.btNameVal = "fax_requ";
				_this.type = 2;
			} else if( item == "qq_display" || item == "qq_disp" ){
				_this.labelText = "QQ";
				_this.nameVal = "qq_disp";
				_this.btNameVal = "qq_requ";
				_this.type = 2;
			} else if( item == "email_display" || item == "email_disp" ){
				_this.labelText = "邮箱";
				_this.nameVal = "email_disp";
				_this.btNameVal = "email_requ";
				_this.type = 2;
			} else if( item == "wangwang_display" || item == "wangwang_disp" ){
				_this.labelText = "旺旺";
				_this.nameVal = "wangwang_disp";
				_this.btNameVal = "wangwang_requ";
				_this.type = 2;
			} else if( item == "address_display" || item == "address_disp" ){
				_this.labelText = "地址";
				_this.nameVal = "address_disp";
				_this.btNameVal = "address_requ";
				_this.type = 2;
			} else if( item == "company_display" || item == "company_disp" ){
				_this.labelText = "公司";
				_this.nameVal = "company_disp";
				_this.btNameVal = "company_requ";
				_this.type = 2;
			} else if( item == "note_display" || item == "company_disp"){
				_this.labelText = "备注";
				_this.nameVal = "note_disp";
				_this.btNameVal = "mobile_requ";
				_this.type = 2;
			} else {
				_this.type = 1;
			}	
			if(_this.type == 2){
				// 名字
				if(obj1 == 1) {
					_this.strHTML += 	
					'<div class="weui-cell">'+
					    '<div class="weui-cell__hd"><label class="weui-label" style="width:60px;margin:0;padding-right:10px;text-align:right;">'+ _this.labelText +'</label></div>'+
					    '<div class="weui-cell__bd">'+
					      	'<input class="weui-input" name="'+_this.nameVal+'" type="text" placeholder="请输入'+ _this.labelText +'">'+
					    '</div>'+
                        '<div class="weui-cell__ft" style="position: relative;height:25px;font-size:12px;color:#f12413;padding-left: 5px;padding-right: 15px;">';
					if(obj2 == 1) {
						_this.strHTML +=
					      	'<span style="position:absolute;right: 6px;top: 0;height: 25px;line-height: 25px;">*</span><input type="hidden" name="'+ _this.btNameVal +'"/>'
					}
					_this.strHTML +=
                        '</div>'+
				  	'</div>'
				} 
			}	
		}
		_this.strHTML += '</form>';
        _this.strHTML += '<div style="text-align: center;"><p><span style="color: #f20;">注:</span>带<span style="color: #f20;">*</span>号的为必填</p><p style="cursor: pointer;width: 30%;margin: 10px auto 20px;background: #fbe14e;color:#a55f23;height: 30px;line-height: 30px;">立即咨询</p></div>';
		_this.strHTML += '</div>';
		_this.strHTML += '</div>';
		// console.log(_this.strHTML);
		$(me.jsonObj.elem).html(_this.strHTML);
	}

	// 设置列表权限
	me.setXQList = function(msg){

		$("#reg_items_list_form input").each(function(){
			var thisName = $(this).attr("name");
			// console.log(thisName);
			for(var key in msg){
				// console.log(key);
				var keyVal = msg[key];
				if(thisName == key) {
					if(keyVal == 1){
                        $(this).prop("checked", true);
                        $(this).val(1);
                        return;
					}
				}
                $(this).val(keyVal);
            }
		})
        me.returnDeom(msg);
	}


	// 所有的事件
	me.allEvent = function(){

        $("#reg_items_list input").on("change", function(){
        	var strJson = [];
        	var strJsonStr = "";
        	var thisCheck = $(this).prop("checked");
        	if(thisCheck) {
                $(this).val(1);
			} else {
                $(this).val(0);
			}
        	var len = $("#reg_items_list input").length-1;
            strJsonStr +=
                '{'
            $("#reg_items_list input").each(function(index){
                var data = {};
            	var thisName = $(this).attr("name");
            	var thisVale = parseInt($(this).val());
                data[thisName] = thisVale;
                strJson.push(data);
                if(len == index) {
                    strJsonStr += '"'+thisName+'":'+ thisVale;
				} else {
                    strJsonStr += '"'+thisName+'":'+ thisVale +',';
				}

            })
            strJsonStr +=
                '}'
            console.log(strJsonStr);
            var parseJson = JSON.parse(strJsonStr);
            me.returnDeom(parseJson);

		})
    }
	me.init();
}