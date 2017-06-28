var display = document.getElementsByClassName("display")[0];
window.addEventListener("scroll", function() {
 var display = document.getElementsByClassName("display")[0];
 var scroll = window.pageYOffset;
 display.innerHTML = scroll
})

var nav = document.getElementsByClassName("nav")[0];
var leftSide = document.getElementsByClassName("leftSide")[0];
var rightSide = document.getElementsByClassName("rightSide")[0];
var firstSplit = document.getElementsByClassName("firstSplit")[0];
var ourWedding = document.getElementsByClassName("ourWedding")[0];
var dateFirst = document.getElementsByClassName("dateFirst")[0];
var timeFirst = document.getElementsByClassName("timeFirst")[0];
var hearts = document.getElementsByClassName("hearts")[0];
var where = document.getElementsByClassName("where")[0];
var attire = document.getElementsByClassName("attire")[0];
var attireInfo = document.getElementsByClassName("attireInfo")[0];
var vtLine = document.getElementsByClassName("vtLine")[0];
var vtLine2 = document.getElementsByClassName("vtLine2")[0];
var headerName = document.getElementsByClassName("headerName")[0];
var gettingMarried = document.getElementsByClassName("gettingMarried")[0];
var introContainer = document.getElementsByClassName("introContainer")[0];


window.onload = function() {
	if (introContainer) {
	introContainer.style.animation = 'fadeIn2 1s forwards';
	}
}


// var firstRight = document.getElementsByClassName("firstRight")[0];


window.addEventListener("scroll", scroll26);

function scroll26() {
var scrollTop = window.pageYOffset || window.scrollTop;
	if (scrollTop > 46) {
		scroll26 = true
		headerName.style.animation = 'scaleDown .5s forwards'
	} else if (scroll26 && scroll26 < 46) {
		headerName.style.animation = 'scaleNormal .5s forwards'
	}

}


window.addEventListener("scroll", scrollFirst)

firstScroll = false;

function scrollFirst() {
var scrollTop = window.pageYOffset || window.scrollTop;
	if (scrollTop > 350) {	
		firstScroll = true
		gettingMarried.style.animation = 'fadeIn2 1s forwards';
		vtLine.style.animation = 'fadeIn2 1s forwards';
		ourWedding.style.animation = 'fadeIn2 1s forwards';
		dateFirst.style.animation = 'fadeIn2 1s forwards';
		timeFirst.style.animation = 'fadeIn2 1s forwards';


		hearts.style.animation = 'fadeIn2 1s forwards';
		where.style.animation = 'fadeIn2 1s forwards';
		attire.style.animation = 'fadeIn2 1s forwards';
		attireInfo.style.animation = 'fadeIn2 1s forwards';


		vtLine.style.animationDelay = '.750s';
		hearts.style.animationDelay = '.5s';
		where.style.animationDelay = '.5s';
		attire.style.animationDelay = '.5s';
		attireInfo.style.animationDelay = '.5s';

	} else if (firstScroll && scrollTop < 350) {
		gettingMarried.style.animation = 'fadeOut2 1s forwards';
		vtLine.style.animation = 'fadeOut2 1s forwards';
		ourWedding.style.animation = 'fadeOut2 1s forwards';
		dateFirst.style.animation = 'fadeOut2 1s forwards';
		timeFirst.style.animation = 'fadeOut2 1s forwards';

		hearts.style.animation = 'fadeOut2 1s forwards';
		where.style.animation = 'fadeOut2 1s forwards';
		attire.style.animation = 'fadeOut2 1s forwards';
		attireInfo.style.animation = 'fadeOut2 1s forwards';

	}  if (scrollTop > 650) {
		gettingMarried.style.animation = 'fadeOut2 1s forwards';
		vtLine.style.animation = 'fadeOut2 .5s forwards';
		ourWedding.style.animation = 'fadeOut2 .5s forwards';
		dateFirst.style.animation = 'fadeOut2 .5s forwards';
		timeFirst.style.animation = 'fadeOut2 .5s forwards';

		hearts.style.animation = 'fadeOut2 .5s forwards';
		where.style.animation = 'fadeOut2 .5s forwards';
		attire.style.animation = 'fadeOut2 .5s forwards';
		attireInfo.style.animation = 'fadeOut2 .5s forwards';


	}
	
}

var couple = document.getElementsByClassName("couple")[0];
var where2 = document.getElementsByClassName("where2")[0];
var comeMingle = document.getElementsByClassName("comeMingle")[0];
var cocktail = document.getElementsByClassName("cocktail")[0];
var cocktailTime = document.getElementsByClassName("cocktailTime")[0];
var cheers = document.getElementsByClassName("cheers")[0];


window.addEventListener("scroll", scrollSecond)

secondScroll = true
function scrollSecond() {
	var scrollTop = window.pageYOffset || window.scrollTop;
		if (scrollTop > 660) {
			secondScroll = true
			cheers.style.animation = 'fadeIn2 1s forwards';
			vtLine2.style.animation = 'fadeIn2 1s forwards';
			couple.style.animation = 'fadeIn2 1s forwards';
			where2.style.animation = 'fadeIn2 1s forwards';
			comeMingle.style.animation = 'fadeIn2 1s forwards';
			cocktail.style.animation = 'fadeIn2 1s forwards';
			cocktailTime.style.animation = 'fadeIn2 1s forwards';

			vtLine2.style.animationDelay = '.750s';
			couple.style.animationDelay = '.5s';
			where2.style.animationDelay = '.5s';
			comeMingle.style.animationDelay = '.5s';
		} else if (secondScroll && scrollTop < 660) {
			cheers.style.animation = 'fadeOut2 1s forwards';
			vtLine2.style.animation = 'fadeOut2 .5s forwards';
			couple.style.animation = 'fadeOut2 .5s forwards';
			where2.style.animation = 'fadeOut2 .5s forwards';
			comeMingle.style.animation = 'fadeOut2 .5s forwards';
			cocktail.style.animation = 'fadeOut2 1s forwards';
			cocktailTime.style.animation = 'fadeOut2 .5s forwards';
		} if (scrollTop > 900) {
			cheers.style.animation = 'fadeOut2 1s forwards';
			vtLine2.style.animation = 'fadeOut2 .5s forwards';
			couple.style.animation = 'fadeOut2 .5s forwards';
			where2.style.animation = 'fadeOut2 .5s forwards';
			comeMingle.style.animation = 'fadeOut2 .5s forwards';
			cocktail.style.animation = 'fadeOut2 .5s forwards';
			cocktailTime.style.animation = 'fadeOut2 .5s forwards';
		}
}

// var pointer = document.getElementsByClassName("pointer")[0];
// var navigationSchedule = document.getElementsByClassName("navigationSchedule")[0];

// navigationSchedule.addEventListener("mouseenter", function() {
// 	pointer.style.opacity = '1'
// })
// navigationSchedule.addEventListener("mouseleave", function() {
// 	pointer.style.opacity = '0'
// })





















// function navLinks() {
// 	var navLinks = document.getElementsByClassName("navLinks");
// 	for (let i = 0; i < navLinks.length; i++) {
// 		navLinks[i].addEventListener("mouseenter", addStyle);		
// 	}
// }

// function addStyle(event) {
// 	event.style.opacity = '1';
// }


var navLinks = document.getElementsByClassName("navLinks");

var pointer = document.getElementsByClassName("pointer");

for (let i = 0; i < navLinks.length; i++) {
	navLinks[i].addEventListener("mouseenter", function() {
		for (let j = 0; j < pointer.length; j++) {
		pointer[j].style.opacity = '1'
		console.log("hi")	
		}
	});
}
for (let i = 0; i < navLinks.length; i++) {
	navLinks[i].addEventListener("mouseleave", function() {
		navLinks[i].style.color = 'rgb(153, 51, 0)'
		console.log("hi")	
	});
}


















