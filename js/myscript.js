//JavaScript代码区域
layui.use(['laydate', 'laypage', 'layer','layedit', 'table', 'carousel', 'upload', 'element'], function(){
  	var element = layui.element;
  	var form = layui.form,
  	layer = layui.layer,
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
    $(".addRole").on("click", function(){
    	layer.open({
		  	type: 1, 
		  	content: '传入任意的文本或html' //这里content是一个普通的String
		});
    })
})