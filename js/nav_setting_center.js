
$(function(){


    //PC窗口设置(咨询图标）——自定义颜色块个数 
    var askLiColorBars = $(".askdefineColorbars").children('li');
    askLiColorBars.click(function(){
        var bgColor = $(this).css("backgroundColor");
        $(".askdefinecolorspan").css("backgroundColor",bgColor);
        $(".colorRBar").css("backgroundColor",bgColor);
    })

    //PC窗口设置(访客对话窗口）——自定义颜色块个数 
    var visiterLiColorBars = $(".visiterdefineColorbars").children('li');
    visiterLiColorBars.click(function(){
        var bgColor = $(this).css("backgroundColor");
        $("#theme_color_show").css("backgroundColor",bgColor);
        $(".BoxHead").css("backgroundColor",bgColor)
        $("#chatwin_view_bg").css("backgroundColor",bgColor);

    })

    //PC窗口设置(直接对话窗口）——自定义颜色块个数 
    var directLiColorBars = $(".directdefineColorbars").children('li');
    directLiColorBars.click(function(){
        var bgColor = $(this).css("backgroundColor");
        $(".themecolorshowspan").css("backgroundColor",bgColor);
        $("#mini_chatwin_view_bg").css("backgroundColor",bgColor);
        $("#mini_chatwin_view_bg_lite").css("backgroundColor",bgColor);
        console.log($("#zjdhMaskTit"));
        $("#zjdhMaskTit").css("background",bgColor);
    })
    // 输入框 name = winsizewid   winsizehei
    $("input[name = winsizewid]").on("change", function(){
        var thisVal = $(this).val();

        if(thisVal < 300) {
            $(this).val(300);
            msgMask("宽度不能小于300",1);
            return false;
        }
        $("#zjdhMask").css("width",thisVal);
    })
    $("input[name = winsizehei]").on("change", function(){
        var thisVal = $(this).val();
        if(thisVal < 300) {
            $(this).val(300);
            msgMask("高度不能小于300",1);
            return false;   s
        }
        $("#zjdhMask").css("height",thisVal)
    })



    //手机窗口设置(邀请窗口）——自定义颜色块个数 
    var inviteLiColorBars = $(".invitedefineColorbars").children('li');
    inviteLiColorBars.click(function(){
        var bgColor = $(this).css("backgroundColor");
        $(".invitedefinecolorspan").css("backgroundColor",bgColor);
        $(".qy_kf_welcomeBox_words").css("backgroundColor",bgColor);
    })
    // 访客对话窗口修改窗口标题
    $("#windowTitle1").on('input porpertychange',function(){
        var thisTxt = $("#windowTitle1").val();
        $(".internetName").html(thisTxt);
    })
    // 访客对话窗口修改窗口标题
    $("input[name=cardurl]").on('input porpertychange',function(){
        var thisTxt = $(this).val();
        $(".advertisement a").attr("href",thisTxt);
    })

    // 点击要去窗口咨询
    $("#themesdiv li").on("click",function(){
        var thisImgSrc = $(this).attr("dataSrc");
        var dataIsTit = $(this).attr("dataIsTit");
        var temesTit = $(".temesTit");
        if(dataIsTit == "true") {
            temesTit.removeClass("none");
        } else {
            temesTit.addClass("none");
        }
        $(this).addClass("sel").siblings().removeClass("sel")
        $("#sys_up_invite_pre").css({
            "background" : "url("+ thisImgSrc +") no-repeat"
        })
    })

    // 点击 - 直接对话图标 - 对齐模式
    $("#ico_position2 li").on("click", function(){
        var cssPose= $(this).attr("posi");

        $(this).addClass("index").siblings().removeClass("index");
        var boxWidth = $("#zjdhMask").width();

        var boxHeight = $("#zjdhMask").height();
        var cssJson = setPosition(cssPose,boxWidth,boxHeight);

        $("#zjdhMask").removeAttr("style");
        $("#zjdhMask").css(cssJson);
    })

    // 点击 - 咨询窗口
    $("#ico_position li").on("click", function(){
        var cssPose= $(this).attr("posi");

        $(this).addClass("index").siblings().removeClass("index");
        var boxWidth = $("#adv_consult").width();

        var boxHeight = $("#adv_consult").height();
        var cssJson = setPosition(cssPose,boxWidth,boxHeight);

        $("#adv_consult").removeAttr("style");
        $("#adv_consult").css(cssJson);
    })

    // 点击 - 邀请图标 - 对齐模式
    $("#ico_position1 li").on("click", function(){
        var cssPose= $(this).attr("posi");
        $(this).addClass("index").siblings().removeClass("index");
        var boxWidth = $("#sys_up_invite_pre").width();

        var boxHeight = $("#sys_up_invite_pre").height();
        var imgSrc = $("#themesdiv li.sel").attr("dataSrc");
        var cssJson = setPosition(cssPose,boxWidth,boxHeight, imgSrc);

        $("#sys_up_invite_pre").removeAttr("style");
        $("#sys_up_invite_pre").css(cssJson)
    })
    function setPosition(cssPose,boxWidth,boxHeight,thisImgSrc){
        var cssPose = cssPose;
        var boxWidth = boxWidth;
        var boxHeight = boxHeight;
        var thisImgSrc = thisImgSrc || "";
        if(cssPose == "lt") {
            var cssJson = {
                "position": "absolute",
                "z-index": "100000",
                "width": boxWidth,
                "height": boxHeight,
                "left": 0,
                "top": 0,
                "margin": 0
            }
        }
        if(cssPose == "ct") {
            var cssJson = {
                "position": "absolute",
                "z-index": "100000",
                "width": boxWidth,
                "height": boxHeight,
                "left": "50%",
                "top": 0,
                "margin-left": -(boxWidth/2)
            }
        }
        if(cssPose == "rt") {
            var cssJson = {
                "position": "absolute",
                "z-index": "100000",
                "width": boxWidth,
                "height": boxHeight,
                "right": 0,
                "top": 0,
                "margin": 0
            }
        }
        if(cssPose == "lc") {
            var cssJson = {
                "position": "absolute",
                "z-index": "100000",
                "width": boxWidth,
                "height": boxHeight,
                "left": 0,
                "top": "50%",
                "margin-top": -(boxHeight/2)
            }
        }
        if(cssPose == "cc") {
            var cssJson = {
                "position": "absolute",
                "z-index": "100000",
                "width": boxWidth,
                "height": boxHeight,
                "left": "50%",
                "top": "50%",
                "margin-top": -(boxHeight/2),
                "margin-left": -(boxWidth/2)
            }
        }
        if(cssPose == "rc") {
            var cssJson = {
                "position": "absolute",
                "z-index": "100000",
                "width": boxWidth,
                "height": boxHeight,
                "right": 0,
                "margin-top": -(boxHeight/2),
                "top": "50%"
            }
        }
        if(cssPose == "lb") {
            var cssJson = {
                "position": "absolute",
                "z-index": "100000",
                "width": boxWidth,
                "height": boxHeight,
                "left": 0,
                "bottom": 0,
                "margin": 0
            }
        }
        if(cssPose == "cb") {
            var cssJson = {
                "position": "absolute",
                "z-index": "100000",
                "width": boxWidth,
                "height": boxHeight,
                "left": "50%",
                "bottom": 0,
                "margin-left": -(boxWidth/2)
            }
        }
        if(cssPose == "rb") {
            var cssJson = {
                "position": "absolute",
                "z-index": "100000",
                "width": boxWidth,
                "height": boxHeight,
                "right": 0,
                "bottom": 0,
                "margin": 0
            }
        }
        if(thisImgSrc != "") {
            cssJson.background = "url("+ thisImgSrc +") no-repeat"
        }
        return cssJson;
    }

    //表情包的展现与隐藏
    $('.ExP').on('click',function(){
        if($('.emjon').css('display')=='none'){
            $('.emjon').show();
        }else{
            $('.emjon').hide();
        }
    })



    // 点击 +号，显示隐藏底下的常用语列表
    $(document).on("click", ".font_size_icon", function(){
        var showDom = $(this).parents("tr").next(".itemChild").children("td");
        if($(this).hasClass("glyphicon-plus-sign")) {
            $(this).removeClass("glyphicon-plus-sign").addClass("glyphicon-minus-sign");
            showDom.removeClass("none");
        } else {
            $(this).removeClass("glyphicon-minus-sign").addClass("glyphicon-plus-sign");
            showDom.addClass("none");
        }
    })
    var itemListJsonData = [];  // 分组列表数据
    // 分类常用语组列表
    getWordCategoryList()
    function getWordCategoryList(){
        $.ajax({
            url: urlParam.getWordCategoryList,
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (msg) {
                console.log(msg);
                var data = msg.data;
                if(msg.code == 0){
                    var strHTML = "";
                    itemListJsonData = [];
                    if(data.length == 0){
                        strHTML += ' <tr><td colspan="3">暂无数据</td></tr>';
                        $("#phraseList tbody").html(strHTML);
                    } else {

                        for(var i = 0; i < data.length; i++) {
                            var content = data[i].content || "-";
                            itemListJsonData.push(data[i].category);
                            var commonWordListStr = getCommonWordList(data[i].category);
                            strHTML +=
                                '<tr>' +
                                    '<td style="text-align: left;width:200px"><span class="glyphicon glyphicon-plus-sign font_size_icon"></span>'+ data[i].category +'</td>' +
                                    '<td style="text-align: left">'+ content +'</td>' +
                                    '<td style="text-align: left;width:200px"><button class="layui-btn layui-btn-xs fzDelBtn" dataId="'+ data[i].id +'">删除</button></td>' +
                                '</tr>' +
                                '<tr class="itemChild" dataId="'+ data[i].id +'">' +
                                    '<td  colspan="3" class="none" style="text-align: left;padding:0;padding-left: 27px;">' +
                                        '<table style="width: 100%;border: none;">' +
                                            '<tbody>';
                                            strHTML += commonWordListStr;
                                            strHTML +=
                                            '</tbody>' +
                                        '</table>' +
                                    '</td>' +
                                '</tr>'
                        }
                        console.log();

                        $("#phraseList tbody").html(strHTML);

                    }
                } else {
                    msgMask(msg.message,1)
                }
            }

        })
    }
    // 分类常用语列表
    // getCommonWordList()
    function getCommonWordList(category){
        var strHTML = "";
        $.ajax({
            url: urlParam.getCommonWordList,
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            async: false,
            data: {
                category: category
            },
            crossDomain: true,
            success: function (msg) {
                console.log(msg);
                var data = msg.object;
                if(msg.code == 0){
                    if(data.length == 0){
                        strHTML += ' <tr><td colspan="3">暂无数据</td></tr>';
                    } else {
                        for(var i = 0; i < data.length; i++) {
                            strHTML +=
                            '<tr class="item_list_boder">' +
                                '<td style="text-align: left;width:173px">'+ data[i].title +'</td>' +
                                '<td style="text-align: left">'+ data[i].content +'</td>' +
                                '<td style="width:200px;text-align: left"> <button class="layui-btn layui-btn-xs cyyDelBtn" dataId="'+ data[i].id +'">删除</button></td>' +
                            '</tr>';
                        }
                    }
                } else {
                    msgMask(msg.message,1)
                }
            }

        })
        // console.log(strHTML);
        return strHTML;
    }

    // 添加常用语组  必须添加才能添加常用语
    $("#add_group1").on("click", function(){
        var addCommonWordMask =
            '<form action="" id="addCommonWordMask">' +
                '<div class="layui-form-item">' +
                    '<label class="layui-form-label">常用语分组名</label>'+
                    '<div class="layui-input-block">'+
                        '<input type="text" id="addCommonWordName" placeholder="请输入常用语分组名" class="layui-input">'+
                    '</div>'+
                '</div>'
            '</form>';
        var addCommonWordOpen = parent.layer.open({
            type: 1,
            area: ['370px', '210px'],
            btn: ['确认', '取消'],
            content: addCommonWordMask,
            yes: function(index, layero){
                var commonWordName = $("body",parent.document).find("#addCommonWordName").val();
                console.log(commonWordName );
                $.ajax({
                    url: urlParam.addWordCategory,
                    dataType: "json",
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    data: {
                        category: commonWordName
                    },
                    success: function (msg) {
                        console.log(msg);
                        if(msg.code == 0) {
                            getWordCategoryList();
                            parent.layer.close(addCommonWordOpen);
                        } else {
                            msgMask(msg.message,1)
                        }
                    }
                })
            },
            btn2: function(index, layero){

            }
        })
    })

    // 添加常用语
    $("#add_phrase").on("click", function(){
        var addphraseStr = "";
        addphraseStr +=
            '<form action="" id="addphraseData">' +
                '<div class="layui-form-item">' +
                    '<label class="layui-form-label">标题</label>'+
                    '<div class="layui-input-block">'+
                        '<input type="text" name="title" id="titleInp" placeholder="请输入标题" class="layui-input">'+
                    '</div>'+
                '</div>' +
                '<div class="layui-form-item">' +
                    '<label class="layui-form-label">内容</label>'+
                    '<div class="layui-input-block">'+
                        '<input type="text" name="content" id="contentInp" placeholder="请输入内容" class="layui-input">'+
                    '</div>'+
                '</div>' +
                '<div class="layui-form-item">' +
                    '<label class="layui-form-label">所属分组</label>'+
                    '<div class="layui-input-block">'+
                        '<select class="form-control" name="category" id="selectInp">'+
                            '<option value="">所属分组</option>';
                             for(var i = 0; i <  itemListJsonData.length; i ++) {
                                 addphraseStr += '<option value="'+ itemListJsonData[i] +'">' + itemListJsonData[i] + '</option>';
                             }
        addphraseStr +=
                        '</select>'+
                    '</div>'+
                '</div>'+
            '</form>';
        var addphraseMask = parent.layer.open({
            type: 1,
            area: ['370px', '210px'],
            btn: ['确认', '取消'],
            content: addphraseStr,
            yes: function(index, layero){
                var titleInp = $("body",parent.document).find("#titleInp").val();
                var contentInp = $("body",parent.document).find("#contentInp").val();
                var selectInp = $("body",parent.document).find("#selectInp").val();
                if(titleInp == "") {
                    msgMask("标题不能为空！",1)
                    return;
                }
                if(contentInp == "") {
                    msgMask("内容不能为空！",1)
                    return;
                }
                if(selectInp == "") {
                    msgMask("选择分组不能为空！",1)
                    return;
                }

                var formData = $("body",parent.document).find("#addphraseData").serialize();

                $.ajax({
                    url: urlParam.addCommonWord,
                    dataType: "json",
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    data: formData,
                    success: function (msg) {
                        console.log(msg);
                        if(msg.code == 0) {
                            getWordCategoryList();
                            parent.layer.close(addphraseMask);
                        } else {
                            msgMask(msg.message,1)
                        }
                    }
                })
            },
            btn2: function(index, layero){

            }
        })
    })

    // 删除常用分组
    $(document).on("click",".fzDelBtn" , function(){
        var thisId = $(this).attr("dataId");
        $.ajax({
            url: urlParam.deleteWordCategory,
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            data: {
                id: thisId
            },
            success: function (msg) {
                console.log(msg);
                if(msg.code == 0) {
                    msgMask("删除成功",1)
                    getWordCategoryList();
                } else {
                    msgMask(msg.message,1)
                }
            }
        })
    })
    // 删除常用语
    $(document).on("click",".cyyDelBtn" , function(){
        var thisId = $(this).attr("dataId");
        $.ajax({
            url: urlParam.deleteCommonWord,
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            data: {
                id: thisId
            },
            success: function (msg) {
                console.log(msg);
                if(msg.code == 0) {
                    msgMask("删除成功",1)
                    getWordCategoryList();
                } else {
                    msgMask(msg.message,1)
                }
            }
        })
    })

    // 常用文件 - 点击新建文件夹
    $("#add_folder").on("click", function(){
        var addFolderStr =
            '<form action="" id="addfolderData">' +
                '<div class="layui-form-item">' +
                    '<label class="layui-form-label">文件名称</label>'+
                    '<div class="layui-input-block">'+
                        '<input type="text" name="file" id="fileInp" placeholder="请输入文件名称" class="layui-input">'+
                    '</div>'+
                '</div>'+
            '</form>';
        var addFolderMask = parent.layer.open({
            type: 1,
            area: ['370px'],
            btn: ['确认', '取消'],
            content: addFolderStr,
            yes: function(index, layero){
                var fileInp = $("body",parent.document).find("#fileInp").val();
                if(fileInp == "") {
                    msgMask("标题不能为空！",1)
                    return;
                }

                $.ajax({
                    url: urlParam.addFileCategory,
                    dataType: "json",
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    data: {
                        directory: fileInp
                    },
                    success: function (msg) {
                        console.log(msg);
                        if(msg.code == 0) {
                            getFileCategoryList();
                            parent.layer.close(addFolderMask);
                        } else {
                            msgMask(msg.message,1)
                        }
                    }
                })
            },
            btn2: function(index, layero){

            }
        })
    })

    // 点击删除文件
    $(document).on("click", ".deletCyFileBtn", function(){
        var thisId = $(this).attr("dataId");
        $.ajax({
            url: urlParam.deleteFileCategory,
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            data: {
                id: thisId
            },
            success: function (msg) {
                getFileCategoryList()
            }
        })
    })

    // 常用文件列表
    getFileCategoryList()
    function getFileCategoryList(){
        var strHTML = "";
        $.ajax({
            url: urlParam.getFileCategoryList,
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (msg) {
                console.log(msg);
                var data = msg.data;
                if(msg.code == 0){
                    if(data.length == 0){
                        strHTML += ' <tr><td colspan="3">暂无数据</td></tr>';
                    } else {
                        for(var i = 0; i < data.length; i++) {
                            var commonWordListStr = getCommonFileList(data[i].directory);
                            strHTML +=
                            '<tr>'+
                                '<td style="text-align: left;padding-left: 10px;" width="30%">'+ data[i].directory +'</td>'+
                                '<td style="text-align: left;position: relative" width="20%">' +
                                    '<form action="http://www.argen3630.com:88/admin.php/upload/upload"  method="post" enctype="multipart/form-data" class="notFormFile">' +
                                        '<div style="text-align:center;font-size: 13px;background: #00b7ee;border-radius: 3px;width: 100px;color: #fff;display: inline-block;cursor: pointer;box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);height: 26px;line-height: 26px;padding: 0;">上传文件</div>' +
                                        '<input directory="'+ data[i].directory +'" style="position: absolute;top:0;left:0; z-index: 1;opacity: 0; height: 100%;width: 100px;" name="image" type="file">' +
                                    '</form>' +
                                '</td>'+
                                '<td style="text-align: left;" width="35%">分组文件</td>'+
                                '<td style="text-align: left;" width="15%"><button class="layui-btn layui-btn-danger layui-btn-xs deletCyFileBtn" dataId="'+ data[i].id +'">删除</button></td>'+
                            '</tr>'+
                            '<tr>' +
                                '<td  colspan="4" style="text-align: left;border:none;padding:0;">' +
                                '<table style="width: 100%;border: none;">' +
                                '<thead>' +
                                    '<th style="text-align: left;width: 50%;padding-left: 27px;">附件</th>'+
                                    '<th style="text-align: left;width: 10%;">文件类型</th>'+
                                    '<th style="text-align: left;width: 10%;">文件大小</th>'+
                                    '<th style="text-align: left;width: 10%;">日期</th>'+
                                    '<th style="width:20%;text-align: left">操作</th>'+
                                '</thead>'+
                                '<tbody>';
                                    strHTML += commonWordListStr;
                                    strHTML +=
                                '</tbody>' +
                                '</table>' +
                                '</td>' +
                            '</tr>'
                        }
                    }
                    $(".tab_11_4 tbody").html(strHTML);
                } else {
                    msgMask(msg.message,1)
                }
            }

        })
    }

    $(".tab_11_4").on("change", 'input[type=file]', function(){
        // var path = $(this).val();
        var files = $(this).prop('files');
        var data_directory = $(this).attr("directory");
        var fileLen = files[0].size;
        var thisDom = $(this);
        var parentsTr = thisDom.parents("tr").next();
        if(files.length == 0){
            return;
        }
        console.log(files);
        var formData = new FormData();

        formData.append('image', files[0]);
        $.ajax({
            url: urlParam.uploadFile,
            type: 'POST',
            cache: false,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            data: formData,
            enctype: "multipart/form-data",
            processData: false,
            contentType: false
        }).done(function(res) {
            console.log(res);
            if(res.code == 0) {
                ajaxFileData(prefixParamUrl.urlPrefix + res.object,data_directory,fileLen)
            } else {
                msgMask(res.message,1)
            }
        }).fail(function(res) {
            msgMask(res.message,1)
        });
    })

    // 提交上传代码
    function ajaxFileData(path,directory,filelength,dom){
        var path = path || "";;
        var directory = directory || "";
        var filelength = filelength || "0";
        $.ajax({
            url: urlParam.uploadCommonFile,
            type: 'POST',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            data: {
                path: path,
                directory:directory,
                filelength: filelength
            }
        }).done(function(res) {
            console.log(res);
            if(res.code == 0) {
                msgMask("提交成功!",1)
                getFileCategoryList()
            } else {
                msgMask(res.message,1)
            }
        }).fail(function(res) {
            msgMask(res.message,1)
        });
    }

    // 常用分类文件列表

    function getCommonFileList(directory){
        var strHTML = "";
        $.ajax({
            url: urlParam.getCommonFileList,
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            async: false,
            data:{
                directory: directory
            },
            success: function (msg) {
                console.log(msg);
                var data = msg.object;
                if(msg.code == 0) {
                    if(data.length == 0){
                        strHTML += ' <tr><td colspan="3">暂无数据</td></tr>';
                    } else {
                        for(var i = 0; i < data.length; i++) {
                            strHTML +=
                                '<tr class="item_list_boder">' +
                                '<td style="text-align: left;width: 50%;padding-left: 27px;"><div style="padding: 0 10px;max-width: 360px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"><a href="'+ data[i].path +'" download="'+ data[i].name +'">'+ data[i].name +'</a></div></td>' +
                                '<td style="text-align: left;width: 10%;"><div style="padding: 0 10px;max-width: 360px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">.'+ data[i].path.split(".")[data[i].path.split(".").length -1] +'</div></td>' +
                                '<td style="text-align: left;width: 10%;">'+ (data[i].filelength/1024).toFixed(2) +'M</td>' +
                                '<td style="text-align: left;width: 10%;">'+ data[i].update_time +'</td>' +
                                '<td style="width:20%;text-align: left"> <button class="layui-btn layui-btn-xs cyyDelBtn" dataId="'+ data[i].id +'">删除</button></td>' +
                                '</tr>';
                        }
                    }
                } else {
                    msgMask(res.message,1)
                }
            }
        })

        return strHTML;
    }

    // 点击保存按钮，保存弹窗HTML
    // 咨询图标
    $("#testhei").on("click", function(){
        var html = $(".pageHtml").html();
        saveHtmlWin(1, html)
    })
    // 邀请窗口
    $("#testhei1").on("click", function(){
        var html = $("#systheme_preview").html();
        saveHtmlWin(2, html)
    })
    // 访客对话窗口
    $("#testhei2").on("click", function(){
        var html = $(".visitorDialogue").html();
        saveHtmlWin(3, html)
    })
    // 直接对话窗口
    $("#testhei3").on("click", function(){
        var html = $("#zjdhMaskWrap").html();
        saveHtmlWin(4, html)
    })
    // 访客留言窗口
    $("#testhei4").on("click", function(){
        var html = $("#leaveAMessageWrap").html();
        saveHtmlWin(5, html)
    })


    // 保存HTML方法
    function saveHtmlWin(type,code){
        console.log(code);
        $.ajax({
            url: urlParam.saveHtmlWinodw,
            dataType: "json",
            type: "POST",
            xhrFields: {
                withCredentials: true
            },
            data: {
                type: type,
                code: encodeURI(code)
            },
            crossDomain: true,
            success: function (msg) {
                // console.log(msg)
                if(msg.code == 0) {
                    msgMask("保存成功!",1);
                } else {
                    msgMask(res.message,1)
                }
            }
        })
    }



    //弹窗部分
    //咨询图标
    $("#adv_addbotlabel,#adv_item_add_div").click(function(){
        layer.open({
          type: 1,
          shade:0,
          skin: 'addElePop', 
          area: '430px',
          title:'添加元素',
          content: $('#addElePopOuter'),
        });
    })
    // 微信互通，切换按钮
    var indexBoolen = 1;
    $(".switchery").click(function(){
        var jSitch = $(".js-switch").attr('checked');
        console.log(jSitch);
        if(indexBoolen == 1){
            $(".switchery small").css({
                'left': '30px'
            })
            $(".switchery").css({
                'border-color': '#00BC0C',
                'box-shadow': '#00BC0C 0px 0px 0px 16px inset',
                'transition': 'border 0.4s, box-shadow 0.4s, background-color 1.2s',
                'background-color': '#00BC0C'
            })
            $(".js-switch").attr('checked',true);
            indexBoolen = 0
        }else if(indexBoolen == 0){
            $(".switchery small").css({
                'left': '0px'
            })
            $(".switchery").css({
                'border-color': '#dfdfdf',
                'box-shadow': '#fff 0px 0px 0px 16px inset',
                'transition': 'border 0.4s, box-shadow 0.4s, background-color 1.2s',
                'background-color': '#fff'
            })
            $(".js-switch").attr('checked',false);
            indexBoolen = 1;
        }
    })

    $(".icon_open_color_slc").on("click", function(){
        var thisSrc = $(this).find("img").attr("src");
        console.log($(".kf_qycn_com_cckf_dock"));
        $(".kf_qycn_com_cckf_dock").css("background-image", "url("+thisSrc+")")
    })



    // 添加分组啊
    var parentElem = parent;
    $("#add_group").on("click", function(){
        // 点击添加角色
        var addRoleMaskStr =
            '<form action="">' +
                '<div class="layui-form-item">' +
                    '<label class="layui-form-label">客服分组</label>'+
                    '<div class="layui-input-block">'+
                        '<input type="text" name="title"  id="addCategory" placeholder="请输入标题" autocomplete="off" class="layui-input">'+
                    '</div>'+
                '</div>'+
                '<p id="roleNamePit">注：最多可输入100个字符</p>'+
            '</form>';
        var addRoleMask = parent.layer.open({
            type: 1,
            area: ['370px', '150px'],
            btn: ['添加分组', '取消'],
            skin: 'nav_setting',
            content: addRoleMaskStr, //这里content是一个普通的String
            yes: function(index, layero){
                //按钮【按钮一】的回调
                var addCategory =  $("body",parent.document).find("#addCategory").val();
                var roleNamePit =  $("body",parent.document).find("#roleNamePit");

                if(addCategory.length > 20) {
                    roleNamePit.html("<span style='color:#f60'>角色名称不能大于20个字！</span>");
                    return false;
                }
                roleNamePit.html("注：最多可输入100个字符");

                $.ajax({
                    url: urlParam.addCategory,
                    dataType: "json",
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    data:{
                        name: addCategory
                    },
                    success: function (msg) {
                        if(msg.code == 0) {
                            getCategoryList()
                            parent.layer.close(addRoleMask);
                        } else {
                            msgMask(msg.message,1)
                        }

                    }
                })

                layer.close(index);

            },
            btn2: function(index, layero){
                //按钮【按钮二】的回调
            }

        });
    })

    // 分组列表
    getCategoryList();
    function getCategoryList(){
        $.ajax({
            url: urlParam.getCategoryList,
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (msg) {
                console.log(msg);
                if (msg.code == 0) {
                    if(msg.data.length == 0){

                        $('#fzTables').html('<tr><td><span><a href="javascript:void(0)" style="color:#f60">暂无分组数据！</a></span></td></tr>');
                    } else {
                        var str = ''
                        for(var i = 0; i < msg.data.length; i++) {
                            var classActive = (i ==0) ? "sel" : ""
                            str +=
                            '<tr>'+
                                '<td class="'+ classActive +' fzItem" dataId="'+ msg.data[i].id +'">'+
                                    '<span>'+
                                        '<a href="javascript:void(0)">'+ msg.data[i].category +'</a>'+
                                    '</span>'+
                                '</td>'+
                            '</tr>';
                        }
                        $('#fzTables').html(str);
                    }

                } else {
                    msgMask(msg.message)
                }
            }
        })
    }
    // 点击分组列表
    $(document).on("click", ".fzItem", function(){
        var thisDataId = $(this).attr("dataId");
        $(".fzItem").removeClass("sel");
        $(this).addClass("sel");
    })

    //


    // 分组人员列表
    getListByCategory();
    function getListByCategory(){
        $.ajax({
            url: urlParam.getListByCategory,
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (msg) {
                console.log(msg);
                if (msg.code == 0) {
                } else {
                    msgMask(msg.message)
                }
            }
        })
    }

    
})

