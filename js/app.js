// $(".tabMenu button").click(function(){
//     const ind=$(this).index()
//     $(".tabMenu p").slideUp()
//  $(".tabMenu p").eq(ind).slideDown()
// })
// $("tabMenu button").click(function(){
//     $("tabMenu button").css({
// background:"yellow",
// color:"black"
//     })
// })
// $("tabMenu button").click(function(){
//     $(this).css({
// background:"green",
// color:"black"
//     })
// })

$("#accordion button").click(function(){
    $("#accordion ul").stop().slideUp()
    $(this).next().stop().slideToggle(500)
})