
$(function(){
    //PC窗口设置(咨询图标）——自定义颜色块个数 
    var askLiColorBars = $(".askdefineColorbars").children('li');
    askLiColorBars.click(function(){
        var bgColor = $(this).css("backgroundColor");
        $(".askdefinecolorspan").css("backgroundColor",bgColor);
        $(".colorRBar").css("backgroundColor",bgColor);
        $.ajax({
            url: '/path/to/file',
            type: 'POST',
            dataType: 'json',
            data: {param1: 'bgColor'},
        })
    })

    //PC窗口设置(访客对话窗口）——自定义颜色块个数 
    var visiterLiColorBars = $(".visiterdefineColorbars").children('li');
    visiterLiColorBars.click(function(){
        var bgColor = $(this).css("backgroundColor");
        $("#theme_color_show").css("backgroundColor",bgColor);
        $("#chatwin_view_bg").css("backgroundColor",bgColor);
        $.ajax({
            url: '/path/to/file',
            type: 'POST',
            dataType: 'json',
            data: {param1: 'bgColor'},
        })
    })
    //PC窗口设置(直接对话窗口）——自定义颜色块个数 
    var directLiColorBars = $(".directdefineColorbars").children('li');
    directLiColorBars.click(function(){
        var bgColor = $(this).css("backgroundColor");
        $(".themecolorshowspan").css("backgroundColor",bgColor);
        $("#mini_chatwin_view_bg").css("backgroundColor",bgColor);
        $("#mini_chatwin_view_bg_lite").css("backgroundColor",bgColor);
        $.ajax({
            url: '/path/to/file',
            type: 'POST',
            dataType: 'json',
            data: {param1: 'bgColor'},
        })
    })
    //手机窗口设置(邀请窗口）——自定义颜色块个数 
    var inviteLiColorBars = $(".invitedefineColorbars").children('li');
    inviteLiColorBars.click(function(){
        var bgColor = $(this).css("backgroundColor");
        $(".invitedefinecolorspan").css("backgroundColor",bgColor);
        $(".qy_kf_welcomeBox_words").css("backgroundColor",bgColor);
        $.ajax({
            url: '/path/to/file',
            type: 'POST',
            dataType: 'json',
            data: {param1: 'bgColor'},
        })
    })



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
    // 常用文件
    $("#add_folder").click(function(){
        layer.open({
          type: 1,
          shade:0,
          skin: 'createFilesPop', 
          area: ['280px','150px'],
          title:'新建文件夹',
          content: $('#createFilesPopOuter'),

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


    // 添加分组啊
    var parentElem = parent;
    $("#add_group").on("click", function(){
        // 点击添加角色
        var addRoleMaskStr =
            '<form action="">' +
                '<div class="layui-form-item">' +
                    '<label class="layui-form-label">角色名称</label>'+
                    '<div class="layui-input-block">'+
                        '<input type="text" name="title"  id="roleName" placeholder="请输入标题" autocomplete="off" class="layui-input">'+
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
            success: function(layero, index){
                var roleNameArr = [];
                $(".list-groups>a").each(function(index, el) {
                    var roleName = $(this).find('.left').text();
                    var roleId = $(this).attr("data-role");
                    var obj = {
                        roleName: roleName
                    }
                    roleNameArr.push(obj);
                });
                console.log(roleNameArr);

                var optionStr = '';
                for (var i = 0; i < roleNameArr.length; i++) {
                    if( i == 1) {
                        optionStr += "<option selected='selected'>"+roleNameArr[i].roleName+"</option>"
                    } else {
                        optionStr += "<option>"+roleNameArr[i].roleName+"</option>"
                    }

                }
                $("body",parent.document).find("#roleSelect").html(optionStr);

            },
            yes: function(index, layero){
                //按钮【按钮一】的回调
                var roleName =  $("body",parent.document).find("#roleName").val();
                var roleSelect =  $("body",parent.document).find("#roleSelect").val();
                var roleNamePit =  $("body",parent.document).find("#roleNamePit");

                if(roleName == "") {
                    roleNamePit.html("<span style='color:#f60'>角色名称不能为空！</span>");
                    return false;
                }
                if(roleName.length > 20) {
                    roleNamePit.html("<span style='color:#f60'>角色名称不能大于20个字！</span>");
                    return false;
                }
                roleNamePit.html("最多可输入20个字符.");

                $.ajax({
                    url: urlParam.addRole,
                    dataType: "json",
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    data:{
                        name: roleName
                    },
                    success: function (msg) {
                        if(msg.code == 0) {
                            getRoleList();
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

    
})

