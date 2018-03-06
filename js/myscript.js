//JavaScript代码区域

// var laydate;
// var layer;
// var layedit;
// layui.use(['laydate', 'code','laypage', 'layer','layedit', 'table', 'carousel', 'upload', 'element','form'], function(){
//     var element = layui.element;
//     var form = layui.form;
//     var $ = layui.jquery;
//     layer = layui.layer; //独立版的layer无需执行这一
//     layedit = layui.layedit;
//     laydate = layui.laydate;
//     layui.code();

// });
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
    $(this).addClass("layui-this").siblings().removeClass("layui-this");
    $(".nav_tab_item").eq(thisIndex).removeClass("none").siblings("div.nav_tab_item").addClass("none");

    
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

