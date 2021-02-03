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
	anime({
		targets: ".svg-chargement-17",
		translateX: -200,
		translateY: 800,
		duration: 2000,
		delay: 750,
		easing: "easeInOutCubic",
	});
});

/* Mouvement hover sur un lien */


