$(window).on('load', function () {
	$('body').removeClass('preloading');
	$('#preload').fadeOut('fast');

	$(".carousel").carousel({
		interval: 3500,
	});

	var menu = document.getElementById("menu");
	var subMenu = document.getElementById("sub-menu");
	var menu1 = document.getElementById("menu-1");
	var subMenu1 = document.getElementById("sub-menu-1");

	menu.addEventListener("click", function (e) {
		if (menu1.classList.contains("active")) {
			subMenu1.classList.remove("show");
			menu1.classList.remove("active");
			setTimeout(function () {
				subMenu.classList.contains("show") == true ?
					subMenu.classList.remove("show") :
					subMenu.classList.add("show");
				menu.classList.contains("active") == true ?
					menu.classList.remove("active") :
					menu.classList.add("active");
			}, 200);
		} else {
			subMenu.classList.contains("show") == true ?
				subMenu.classList.remove("show") :
				subMenu.classList.add("show");
			menu.classList.contains("active") == true ?
				menu.classList.remove("active") :
				menu.classList.add("active");
		}
	});

	menu1.addEventListener("click", function (e) {
		if (menu.classList.contains("active")) {
			subMenu.classList.remove("show");
			menu.classList.remove("active");
			setTimeout(function () {
				subMenu1.classList.contains("show") == true ?
					subMenu1.classList.remove("show") :
					subMenu1.classList.add("show");
				menu1.classList.contains("active") == true ?
					menu1.classList.remove("active") :
					menu1.classList.add("active");
			}, 200);
		} else {
			subMenu1.classList.contains("show") == true ?
				subMenu1.classList.remove("show") :
				subMenu1.classList.add("show");
			menu1.classList.contains("active") == true ?
				menu1.classList.remove("active") :
				menu1.classList.add("active");
		}
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() < 92) {
			$('.logo-web').removeClass('small');
			$('#nav').removeClass('add-logo');
			$('.logo-web').height(50 - 0.26 * $(this).scrollTop());
			$('#nav').css("margin-left", 1.3 * $(this).scrollTop() + "px");
		} else {
			$('.logo-web').addClass('small');
			$('#nav').addClass('add-logo');
		}
		if ($(this).scrollTop() > $(window).height() / 4) {
			$('#toTop:hidden').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});

	$('.icon-right').click(function () {
		$(this).next().slideToggle();
		$(this).toggleClass('icon-down');
	});

});

if ($(this).scrollTop() > 92) {
	$('.logo-web').addClass('small');
	$('#nav').addClass('add-logo');
} else {
	$('.logo-web').removeClass('small');
	$('#nav').removeClass('add-logo');
	$('.logo-web').height(50 - 0.26 * $(this).scrollTop());
	$('#nav').css("margin-left", 1.3 * $(this).scrollTop() + "px");
}

function showAnswer(question) {
	question.classList.toggle("active");
	var answerId = question.getAttribute("data-for");
	var answer = document.getElementById(answerId);
	answer.classList.toggle("show-answer");
}

function scrollTopAnimated() {
	$("html, body").animate({
		scrollTop: "0"
	});
}