function serviceMaskCommon(json){
    var json = json || {}
    json.companyId = json.companyId || 1;
    var formId = "";
    var toId = "";

    // websoket连接
    var socket;
    var lockReconnect = false;
    var wsUrl = 'ws://120.27.211.112:8282';
    var demoJson = '{"create_time":1522153943,"visit_time":1522153943,"name":"林河钦","website":"","phone":"21323","mobile":"多少级啊看风景","fax":"","email":"48484848","qq":"7844","companyid":"1","wangwang":"","company":"4","address":"8484848","note":"","ip":"120.41.196.221","userid":"160012"}';
    localStorage.setItem("userJson", demoJson)
    var userJson = JSON.parse(localStorage.getItem("userJson"));
    console.log(userJson);
    function loadScript(url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        if(typeof(callback) != "undefined"){
            if (script.readyState) {
                script.onreadystatechange = function () {
                    if (script.readyState == "loaded" || script.readyState == "complete") {
                        script.onreadystatechange = null;
                        callback();
                    }
                };
            } else {
                script.onload = function () {
                    callback();
                };
            }
        }
        script.src = url;
        document.body.appendChild(script);
    }

    loadScript("http://code.jquery.com/jquery-1.10.2.min.js", function () {
        // 咨询注册
        $(document).on("click", "#zxBtn", function(){
            var name = $("input[name=name_disp]").val();
            var phone = $("input[name=phone_disp]").val()|| "";
            var mobile = $("input[name=mobile_disp]").val()|| "";
            var qq = $("input[name=qq_disp]").val()|| "";
            var email = $("input[name=email_disp]").val()|| "";
            var address = $("input[name=address_disp]").val()|| "";
            var company = $("input[name=company_disp]").val()|| "";
            var fax = $("input[name=fax_disp]").val()|| "";

            $.ajax({
                url: "http://www.argen3630.com:88/admin.php/Visitor/add",
                dataType: "json",
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                data: {
                    companyId: json.companyId,
                    name: name,
                    phone: phone,
                    mobile: mobile,
                    qq: qq,
                    email: email,
                    address: address,
                    company: company,
                    fax: fax
                },
                success: function(msg){
                    console.log(msg);
                    if(msg.code == 405){
                        window.location.href="login.html";
                    } else if(msg.code == 0) {
                        localStorage.setItem("userJson", JSON.stringify(msg.object));
                        userJson = msg.object;

                        $("#demo").addClass("none");
                        $(".visitorDialogues").removeClass("none");
                        createWebSocket(wsUrl);
                    } else {
                        alert(msg.message);
                    }

                }
            })
        })
        // 判断是否为空
        if(null != localStorage.getItem("userJson")){
            $("#demo").addClass("none");
            $(".visitorDialogues").removeClass("none");
            createWebSocket(wsUrl);
        } else {
            $("#demo").removeClass("none");
            $(".visitorDialogues").addClass("none");
        }

        // 发送消息
        $("#sendBtn").on("click", function(){
            var thisVal = $("#dope").val();
            sendMesg(thisVal);
            scrollTop()
        })
    });

    function sendMesg(thisVal){
        var random = Math.random();
        var messageJson = {
            'type':'chatMessage' ,
            'msgId': random,
            data : {
                'to': {
                    'id': formId,
                },
                'mine': {
                    'content': thisVal,
                    'type': '0',    // 文本消息 0 文件消息 1 表情消息 2
                }
            }
        }
        messageJson = JSON.stringify(messageJson);
        var htmlStr = '<li><div class="answers"><img class="jiao" src="http://www.argen3630.com:8082/img/TIM图片20170926103645_03_02.jpg">'+ thisVal +'</div></li>'
        $(".newsList").append(htmlStr);

        sendMessage(messageJson);
        $("#dope").val("");
    }

    //连接成功时触发
    function onOpen() {
        // 登录
        var login_data = '{"type":"init","id":"' + userJson.userid + '", "username":"' + userJson.name + '", "avatar":"", "sign":""}';
        socket.send(login_data);
    }

    //监听收到的消息
    function onMessage(res) {
        var resData = JSON.parse(res.data);
        console.log(resData);

        // 进入对话状态 type : reqTalk

        if(resData.type == "reqTalk") {
            console.log(userJson.userid);
            console.log(resData.data.toId);

            formId = resData.data.fromId;

            if(userJson.userid == resData.data.toId ){
                $(".visitorDialogues").addClass("none");
                $(".visitorDialogue ").removeClass("none");
            } else {
                $(".visitorDialogue").addClass("none");
                $(".visitorDialogues ").removeClass("none");
            }
        }

        // 点击发送聊天
        if(resData.message_type == "chatMessage" ){
            var htmlStr = '<li><div class="news"><img class="jiao" src="http://www.argen3630.com:8082/img/talk.jpg">'+ resData.data.content +'</div></li>'
            $(".newsList").append(htmlStr)
        }


    };
    function scrollTop(){
        var conScroll = $(".RightCont").scrollTop();
        console.log(conScroll);
        var allHeigh = 0;
        $(".RightCont li").each(function(){
            var thisHeight = $(this).height() + 10;
            allHeigh += thisHeight;
        })
        console.log(allHeigh);
    }

    function initWebSocket() {

        socket = new WebSocket(wsUrl);

        socket.onmessage = onMessage;

        socket.onopen = onOpen;

        socket.onerror = onError;

        socket.onclose = onClose;
    }
    function createWebSocket(url) {
        try {
            initWebSocket();
        } catch (e) {
            reconnect(url);
        }
    }

    function reconnect(url) {
        if (lockReconnect) return;
        lockReconnect = true;
        //没连接上会一直重连，设置延迟避免请求过多
        setTimeout(function () {
            createWebSocket(url);
            lockReconnect = false;
        }, 2000);
    }

    function onError() {
        reconnect(wsUrl);
    }

    function onClose() {
        reconnect(wsUrl);
    }
    function sendMessage(data1) {
        var data = function (data1) {
            //socket.send("{'send':1,'take':2,'message':" + Math.random() + "}");
            socket.send(data1);
        };

        if (socket.readyState !== 1) {
            socket.close();
            initWebSocket();
            setTimeout(function () {
                data(data1);
            }, 250);
        } else {
            data(data1);
        }

    }

    // 添加等待队列
    function addWaitQueue(){
        $.ajax({
            url: "http://www.argen3630.com:88/admin.php/WaitQueue/add",
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            data: {
                memberId: "1",
                visitorId: "0"
            },
            success: function(msg){
            }
        })
    }
    // 删除队列
    function deleteWaitQueue(){
        $.ajax({
            url: "http://www.argen3630.com:88/admin.php/WaitQueue/delete",
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            data: {
                id: "1"
            },
            success: function(msg){
            }
        })
    }
}
var comon = new serviceMaskCommon();