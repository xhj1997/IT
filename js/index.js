/*
//1.获取所有的li
$lis = $(".things2 .tab-content .touchgoods .neirong li");
//2.遍历每一个li，统计所有li的宽度
var ul_width = 0;
$lis.each(function(idx,elem){
    //获取每一个li实际占据的空间宽度
    var ewidth = $(elem).outerWidth(true);
    ul_width += ewidth;
})
//3.设置ul的宽度为li的宽度的总和
$(".things2 .tab-content .touchgoods .neirong").width(ul_width);

//4.初始化isroll滚动
new IScroll($('.touchgoods')[0],{
    scrollX:true,
    scrollY:false,
    click:true
});
*/

/*//5.初始化工具栏提示
$('[data-toggle="tooltip"]').tooltip()*/



/*底部的图片滚动*/
//1.获取所有的li
$lis = $(".imglunbo .touchimg .nav-tabs li");
//2.遍历每一个li，统计所有li的宽度
var ul_width = 0;
$lis.each(function(idx,elem){
    //获取每一个li实际占据的空间宽度
    var ewidth = $(elem).outerWidth(true);
    ul_width += ewidth;
})
//3.设置ul的宽度为li的宽度的总和
$(".imglunbo .touchimg .nav-tabs").width(ul_width);

//4.初始化isroll滚动
new IScroll($('.touchimg')[0],{
    scrollX:true,
    scrollY:false,
    click:true
});