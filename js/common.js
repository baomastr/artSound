$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) {
		event.preventDefault();

	});

	$(".loader_inner").fadeOut();

	$(".loader").delay(400).fadeOut("slow");


	// При нажатии на кнопки "записаться"
	$("#visit").click(function() {
		$('.form-visit').removeClass("hidden");

	});

	$("#zapis-guitar").click(function() {
		$('.form-zapis-guitar').removeClass("hidden");

	});

	$("#zapis-vokal").click(function() {
		$('.form-zapis-vokal').removeClass("hidden");

	});

	$("#zapis-fano").click(function() {
		$('.form-zapis-fano').removeClass("hidden");

	});

	$("#zapis-solf").click(function() {
		$('.form-zapis-solf').removeClass("hidden");

	});

	$("#zapis-hist").click(function() {
		$('.form-zapis-hist').removeClass("hidden");

	});


	//меню для мобильных устройств

	$("#menu-icon").on("click", function(){

		$("#nav").slideToggle();

		$(this).toggleClass("active");

	});

});

