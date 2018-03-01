
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
    
})

