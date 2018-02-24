    //JavaScript代码区域
layui.use(['laydate', 'laypage', 'layer','layedit', 'table', 'carousel', 'upload', 'element','form'], function(){
    var element = layui.element;
    var form = layui.form;
    var layer = layui.layer,
    layedit = layui.layedit,
    laydate = layui.laydate;
    var $ = layui.jquery, 
    layer = layui.layer; //独立版的layer无需执行这一句

});
// 代码
$(document).ready(function() {

	// 点击替换背景
    $('.mynavi li').click(function(){
        $(this).siblings().css('background','none').end().css('background','url('+$(this).attr('bg')+')');
        $('.mynavi .help_info').hide();
        $('.mynavi #' +  $(this).attr('class')).show();
    });
    // 点击左边侧边导航 切换内容
    $(".layui-nav dd").on("click",function(){
        var thisIndex = $(this).attr("data-index");
        console.log(thisIndex);
        $(".nav_tab_item").eq(thisIndex).removeClass("none").siblings("div.nav_tab_item").addClass("none");
        $('.summernote1').summernote({
            width: 750,
            height: 120,
            tabsize: 2,
            lang: 'zh-CN'
        });
         $('.summernote2').summernote({
            width: 750,
            height: 120,
            tabsize: 2,
            lang: 'zh-CN'
        });
        $('.summernote3').summernote({
            width: 330,
            height: 110,
            tabsize: 2,
            lang: 'zh-CN'
        });
    })
    // 点击顶部导航
    $(".nav_top_btn").on("click", function(){
    	var thisUrl = $(this).attr("rel");
    	$(this).addClass('nav_nindex').siblings().removeClass('nav_nindex');
    	var url = "module_page/"+thisUrl + "/"+thisUrl+".html?l="+thisUrl;
    	console.log(url);
    	$(".layuiCon iframe").attr("src", url);
    })
    // 点击添加角色

    var addRoleMaskStr =
    '<form action="">' +
        '<div class="layui-form-item">' +
            '<label class="layui-form-label">角色名称</label>'+
            '<div class="layui-input-block">'+
                '<input type="text" name="title" required id="roleName" lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">'+
            '</div>'+
        '</div>'+
        '<p id="roleNamePit">最多可输入20个字符.</p>'+
        '<div class="layui-form-item">' +
            '<label class="layui-form-label">复制角色</label>'+
            '<div class="layui-input-block">'+
                '<select class="form-control" id="roleSelect">'+
                '</select>'+
                '<span>基于该角色进行权限修改</span>'+
            '</div>'+
        '</div>'+
    '</form>';

    // 控制点击不可编辑
    $("#qxSet .list-group-item input").on("click", function(){
        return false;
    })


    var parentElem = parent;
    $(".addRole").on("click", function(){
    	layer.open({
		  	type: 1, 
            area: ['370px', '210px'],
            btn: ['确认', '取消'],
            success: function(layero, index){
                var roleNameArr = [];
                $(".list-groups>a").each(function(index, el) {
                    var roleName = $(this).find('.left').text();
                    var roleId = $(this).attr("data-role");
                    var obj = {
                        roleName: roleName,
                        roleId: roleId
                    }
                    roleNameArr.push(obj);
                });
                console.log(roleNameArr);

                var optionStr = '';
                for (var i = 0; i < roleNameArr.length; i++) {
                    optionStr += "<option>"+roleNameArr[i].roleName+"</option>"
                }
                $("#roleSelect").html(optionStr);
            },
            yes: function(index, layero){
                //按钮【按钮一】的回调
                var roleName = $("#roleName").val();
                var roleSelect = $("#roleSelect").val();
                var roleNamePit = $("#roleNamePit");
                if(roleName == "") {
                    roleNamePit.html("<span style='color:#f60'>角色名称不能为空！</span>");
                    return false;
                }
                if(roleName.length > 20) {
                   roleNamePit.html("<span style='color:#f60'>角色名称不能大于20个字！</span>");
                    return false; 
                }

                roleNamePit.html("最多可输入20个字符.");

                layer.close(index);

            },
            btn2: function(index, layero){
                //按钮【按钮二】的回调
            },
		  	content: addRoleMaskStr //这里content是一个普通的String
		});
    })

    // 点击切换角色改变不同的角色权限
    $(".list-groups").on("click", ".list-group-item", function(){
        var thisRoleId = $(this).attr("data-role");
        var thisIndex = $(this).index();
        $(this).addClass('sel').siblings().removeClass('sel');
        $("#qxSet .list-group").addClass('none').eq(thisIndex).removeClass('none')
    })

    // 点击添加对话分类

    var addTallTypeStr =
        '<form action="">' +
            '<div class="layui-form-item" style="padding: 0 15px;">' +
                '<input type="text" name="title" required id="roleName" lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">'+
            '</div>'+
            '<p style="padding: 10px 15px 5px;">提示：最多可输入100个字符</p>'+
        '</form>';
    $("#addTallType").on("click", function(){
        layer.open({
            type: 1,
            area: ['300px', '160px'],
            btn: ['确认', '取消'],
            content: addTallTypeStr,
            success: function(layero, index){
                
            }
        })
    })
})