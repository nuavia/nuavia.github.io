function switchMenu(page) {
	$(".nav.navbar-nav li").removeClass("active");
    $(".nav.navbar-nav li a[href='" + page + "']").parent().addClass("active");
}