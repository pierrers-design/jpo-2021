/*************************************************/
/*Apparition et disparition de la page*/
window.transitionToPage = function (href) {
	/*Position par défaut à -100vh*/
	anime({
		targets: ".svg-chargement-01",
		translateX: 250,
	});
	setTimeout(function () {
		window.location.href = href;
	}, 600);
};
/*Apparition de la page après timer précédent*/
document.addEventListener("DOMContentLoaded", function (event) {
	anime({
		targets: ".svg-chargement",
		opacity: 0,
		duration: 1000,
		delay: 1700,
		easing: "easeInOutCubic",
	});
	anime({
		targets: ".svg-chargement-01",
		translateX: -650,
		translateY: 600,
		duration: 2000,
		delay: 350,
		easing: "easeInOutCubic",
	});
	anime({
		targets: ".svg-chargement-02",
		translateX: 600,
		translateY: -700,
		duration: 2000,
		delay: 400,
		easing: "easeInOutCubic",
	});
	anime({
		targets: ".svg-chargement-03",
		translateX: -700,
		translateY: -500,
		duration: 2000,
		delay: 450,
		easing: "easeInOutCubic",
	});
	anime({
		targets: ".svg-chargement-04",
		translateX: 500,
		translateY: 800,
		duration: 2000,
		delay: 500,
		easing: "easeInOutCubic",
	});
	anime({
		targets: ".svg-chargement-05",
		translateX: 100,
		translateY: -700,
		duration: 2000,
		delay: 550,
		easing: "easeInOutCubic",
	});
	anime({
		targets: ".svg-chargement-06",
		translateX: 800,
		translateY: -700,
		duration: 2000,
		delay: 600,
		easing: "easeInOutCubic",
	});
	anime({
		targets: ".svg-chargement-07",
		translateX: -700,
		translateY: 600,
		duration: 2000,
		delay: 650,
		easing: "easeInOutCubic",
	});
	anime({
		targets: ".svg-chargement-08",
		translateX: -700,
		translateY: 200,
		duration: 2000,
		delay: 700,
		easing: "easeInOutCubic",
	});
	anime({
		targets: ".svg-chargement-09",
		translateX: 600,
		translateY: -700,
		duration: 2000,
		delay: 750,
		easing: "easeInOutCubic",
	});
	anime({
		targets: ".svg-chargement-10",
		translateX: 800,
		translateY: 700,
		duration: 2000,
		delay: 800,
		easing: "easeInOutCubic",
	});
	anime({
		targets: ".svg-chargement-11",
		translateX: -600,
		translateY: -700,
		duration: 2000,
		delay: 850,
		easing: "easeInOutCubic",
	});
	anime({
		targets: ".svg-chargement-12",
		translateX: 600,
		translateY: 700,
		duration: 2000,
		delay: 900,
		easing: "easeInOutCubic",
	});
	anime({
		targets: ".svg-chargement-13",
		translateX: -600,
		translateY: 800,
		duration: 2000,
		delay: 950,
		easing: "easeInOutCubic",
	});
	anime({
		targets: ".svg-chargement-14",
		translateX: -100,
		translateY: -700,
		duration: 2000,
		delay: 1000,
		easing: "easeInOutCubic",
	});
	anime({
		targets: ".svg-chargement-15",
		translateX: -500,
		translateY: -700,
		duration: 2000,
		delay: 1050,
		easing: "easeInOutCubic",
	});
	anime({
		targets: ".svg-chargement-16",
		translateX: 200,
		translateY: 600,
		duration: 2000,
		delay: 900,
		easing: "easeInOutCubic",
	});
});

var open00 = true;
$(".question-00").click(function () {
	if (open00 == true) {
		$(".question-00").css("height", "10vw");
		$(".fleche-question-faq-00").css("transform", "rotate(-90deg)");
		open00 = false;
	} else if (open00 == false) {
		$(".question-00").css("height", "2.8vw");
		$(".fleche-question-faq-00").css("transform", "rotate(90deg)");
		open00 = true;
	}
});

var open01 = true;
$(".question-01").click(function () {
	if (open01 == true) {
		$(".question-01").css("height", "10vw");
		$(".fleche-question-faq-01").css("transform", "rotate(-90deg)");
		open01 = false;
	} else if (open01 == false) {
		$(".question-01").css("height", "2.8vw");
		$(".fleche-question-faq-01").css("transform", "rotate(90deg)");
		open01 = true;
	}
});

var open02 = true;
$(".question-02").click(function () {
	if (open02 == true) {
		$(".question-02").css("height", "20.5vw");
		$(".fleche-question-faq-02").css("transform", "rotate(-90deg)");
		open02 = false;
	} else if (open02 == false) {
		$(".question-02").css("height", "2.8vw");
		$(".fleche-question-faq-02").css("transform", "rotate(90deg)");
		open02 = true;
	}
});

var open03 = true;
$(".question-03").click(function () {
	if (open03 == true) {
		$(".question-03").css("height", "12vw");
		$(".fleche-question-faq-03").css("transform", "rotate(-90deg)");
		open03 = false;
	} else if (open03 == false) {
		$(".question-03").css("height", "2.8vw");
		$(".fleche-question-faq-03").css("transform", "rotate(90deg)");
		open03 = true;
	}
});

var open04 = true;
$(".question-04").click(function () {
	if (open04 == true) {
		$(".question-04").css("height", "7.5vw");
		$(".fleche-question-faq-04").css("transform", "rotate(-90deg)");
		open04 = false;
	} else if (open04 == false) {
		$(".question-04").css("height", "2.8vw");
		$(".fleche-question-faq-04").css("transform", "rotate(90deg)");
		open04 = true;
	}
});

var open05 = true;
$(".question-05").click(function () {
	if (open05 == true) {
		$(".question-05").css("height", "6vw");
		$(".fleche-question-faq-05").css("transform", "rotate(-90deg)");
		open05 = false;
	} else if (open05 == false) {
		$(".question-05").css("height", "2.8vw");
		$(".fleche-question-faq-05").css("transform", "rotate(90deg)");
		open05 = true;
	}
});

var open06 = true;
$(".question-06").click(function () {
	if (open06 == true) {
		$(".question-06").css("height", "9vw");
		$(".fleche-question-faq-06").css("transform", "rotate(-90deg)");
		open06 = false;
	} else if (open06 == false) {
		$(".question-06").css("height", "2.8vw");
		$(".fleche-question-faq-06").css("transform", "rotate(90deg)");
		open06 = true;
	}
});

var open07 = true;
$(".question-07").click(function () {
	if (open07 == true) {
		$(".question-07").css("height", "6vw");
		$(".fleche-question-faq-07").css("transform", "rotate(-90deg)");
		open07 = false;
	} else if (open07 == false) {
		$(".question-07").css("height", "2.8vw");
		$(".fleche-question-faq-07").css("transform", "rotate(90deg)");
		open07 = true;
	}
});

var open08 = true;
$(".question-08").click(function () {
	if (open08 == true) {
		$(".question-08").css("height", "12vw");
		$(".fleche-question-faq-08").css("transform", "rotate(-90deg)");
		open08 = false;
	} else if (open08 == false) {
		$(".question-08").css("height", "2.8vw");
		$(".fleche-question-faq-08").css("transform", "rotate(90deg)");
		open08 = true;
	}
});

var open09 = true;
$(".question-09").click(function () {
	if (open09 == true) {
		$(".question-09").css("height", "13.5vw");
		$(".fleche-question-faq-09").css("transform", "rotate(-90deg)");
		open09 = false;
	} else if (open09 == false) {
		$(".question-09").css("height", "2.8vw");
		$(".fleche-question-faq-09").css("transform", "rotate(90deg)");
		open09 = true;
	}
});

var open10 = true;
$(".question-10").click(function () {
	if (open10 == true) {
		$(".question-10").css("height", "39vw");
		$(".fleche-question-faq-10").css("transform", "rotate(-90deg)");
		open10 = false;
	} else if (open10 == false) {
		$(".question-10").css("height", "2.8vw");
		$(".fleche-question-faq-10").css("transform", "rotate(90deg)");
		open10 = true;
	}
});

var open11 = true;
$(".question-11").click(function () {
	if (open11 == true) {
		$(".question-11").css("height", "39vw");
		$(".fleche-question-faq-11").css("transform", "rotate(-90deg)");
		open11 = false;
	} else if (open11 == false) {
		$(".question-11").css("height", "2.8vw");
		$(".fleche-question-faq-11").css("transform", "rotate(90deg)");
		open11 = true;
	}
});

var open12 = true;
$(".question-12").click(function () {
	if (open12 == true) {
		$(".question-12").css("height", "39vw");
		$(".fleche-question-faq-12").css("transform", "rotate(-90deg)");
		open12 = false;
	} else if (open12 == false) {
		$(".question-12").css("height", "2.8vw");
		$(".fleche-question-faq-12").css("transform", "rotate(90deg)");
		open12 = true;
	}
});

var open13 = true;
$(".question-13").click(function () {
	if (open13 == true) {
		$(".question-13").css("height", "35.5vw");
		$(".fleche-question-faq-13").css("transform", "rotate(-90deg)");
		open13 = false;
	} else if (open13 == false) {
		$(".question-13").css("height", "2.8vw");
		$(".fleche-question-faq-13").css("transform", "rotate(90deg)");
		open13 = true;
	}
});

var open14 = true;
$(".question-14").click(function () {
	if (open14 == true) {
		$(".question-14").css("height", "10.5vw");
		$(".fleche-question-faq-14").css("transform", "rotate(-90deg)");
		open14 = false;
	} else if (open14 == false) {
		$(".question-14").css("height", "2.8vw");
		$(".fleche-question-faq-14").css("transform", "rotate(90deg)");
		open14 = true;
	}
});

var open15 = true;
$(".question-15").click(function () {
	if (open15 == true) {
		$(".question-15").css("height", "26.5vw");
		$(".fleche-question-faq-15").css("transform", "rotate(-90deg)");
		open15 = false;
	} else if (open15 == false) {
		$(".question-15").css("height", "2.8vw");
		$(".fleche-question-faq-15").css("transform", "rotate(90deg)");
		open15 = true;
	}
});

var opendsaadnmade = true;
$(".conteneur-dsaa-dnmade").click(function () {
	if (opendsaadnmade == true) {
		$(".conteneur-dsaa-dnmade").css("height", "11vw");
		$(".fleche-text-faq").css("transform", "rotate(-90deg)");
		opendsaadnmade = false;
	} else if (opendsaadnmade == false) {
		$(".conteneur-dsaa-dnmade").css("height", "3vw");
		$(".fleche-text-faq").css("transform", "rotate(90deg)");
		opendsaadnmade = true;
	}
});

/*************************************************/
/* FancyBox seulement bouton fermer visible / click pour zoomer */

$("[data-fancybox]").fancybox({
	clickContent: "zoom",
	buttons: ["close"],
	protect: true,
});
