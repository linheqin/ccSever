function serviceMaskCommon(json){
    var json = json || {}
    json.companyId = json.companyId || 1;
    // websoket连接
    var socket;
    var lockReconnect = false;
    var wsUrl = 'ws://120.27.211.112:8282';

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
                }
            })
        })



        createWebSocket(wsUrl);
        //连接成功时触发
        function onOpen() {
            // 登录
            var login_data = '{"type":"init","id":"' + uid + '", "username":"' + uname + '", "avatar":"' + avatar + '", "sign":"' + sign + '"}';
            socket.send(login_data);
            console.log("websocket握手成功!");
        }

        //监听收到的消息
        function onMessage(res) {
            console.log(res.data);
            var data = eval("(" + res.data + ")");
            switch (data['message_type']) {

            }
        };

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
                console.log('sendMessage ok' + data1);
            };

            console.log('sendMessage ' + data1);

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
    });


}
var comon = new serviceMaskCommon();