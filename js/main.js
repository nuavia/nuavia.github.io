function switchMenu(page) {
	$(".nav.navbar-nav li").removeClass("active");
	if (page.indexOf("\/blog") == 0) {
		$(".nav.navbar-nav li a[href='/blog/']").parent().addClass("active");
	} else {
		$(".nav.navbar-nav li a[href='" + page + "']").parent().addClass("active");	
	}
    console.log(page);
}