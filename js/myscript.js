//JavaScript代码区域

var laydate;
var layer;
var layedit;
layui.use(['laydate', 'code','laypage', 'layer','layedit', 'table', 'carousel', 'upload', 'element','form'], function(){
    var element = layui.element;
    var form = layui.form;
    var $ = layui.jquery;
    layer = layui.layer; //独立版的layer无需执行这一
    layedit = layui.layedit;
    laydate = layui.laydate;
    layui.code();

});
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
    var url = "module_page/"+thisUrl + "/"+thisUrl+".html?l="+thisUrl;
    // console.log(url);
    $(".layuiCon iframe").attr("src", url);
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