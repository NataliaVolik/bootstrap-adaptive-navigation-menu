$(document).ready(function(){

    $("a.menu-toggle-btn").click(function() {
        $(".responsive_menu").stop(true,true).slideToggle();
        return false;
    });

    $(".responsive_menu a").click(function(){
        $('.responsive_menu').hide();
    });

    $( window ).resize(function() {
        $('.responsive_menu').hide();
    });
    $(".main-menu-item").bind('click', function() {
        var arrr =  $(".selected");
        var i = 0;

        //deselect previous selected elements
        while(arrr.length > i){
            arrr[i].className = '';
            i++;
        }
        this.className = "selected";
    });
});
