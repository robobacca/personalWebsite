$(document).ready(function(){
    $(".Ach").hide();
    $(".Skl").hide();
    $(".Proj").hide();
    $(".Ref").hide();
    $("#b1").click(function(){
        $(".Skl").show();
        $(".Ach").hide();
        $(".Proj").hide();
        $(".Ref").hide();
    })
    $("#b2").click(function(){
        $(".Ach").show();
        $(".Skl").hide();
        $(".Proj").hide();
        $(".Ref").hide();
    })
    $("#b3").click(function(){
        $(".Proj").show();
        $(".Skl").hide();
        $(".Ach").hide();
        $(".Ref").hide();
    })
    $("#b4").click(function(){
        $(".Proj").hide();
        $(".Skl").hide();
        $(".Ach").hide();
        $(".Ref").show();
    })
})