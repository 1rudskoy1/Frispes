//Необходимые переменные

let offset = 0;
const spaceItems =  document.querySelectorAll(".img-item");
let cost = 1;
let offsetReviews = 0;
let spaceJ = 0;
let spaceCount = 1;
const tabs =  document.querySelectorAll(".tab__item");
const tabsImgs =  document.querySelectorAll(".tab-img");
const spaceContainer =  document.querySelector(".OurSpaces__container");
const spaceSlide =  document.querySelector(".img-containers");
const spaceDirectionLeft =  spaceContainer.querySelector(".direction__left");
const spaceDirectionRight =  spaceContainer.querySelector(".direction__right");
let progressBarCount  = document.querySelector(".progressBar__count");
let progressBarOverlay  = document.querySelector(".progressBar__filld_overlay");
const sliderImmersive = document.querySelector(".Immersive__gallery");
const sliderReviews = document.querySelector(".Reviews-items");


//Табы

tabs.forEach(function (tab){
	tab.addEventListener("click", function (){
		document.querySelector("#img-active").removeAttribute('id');
		let activeTab =  document.querySelector(".tab__item_active");
		activeTab.classList.remove("tab__item_active");
		this.classList.add("tab__item_active");
		this.parentNode.querySelector(".tab-img").id = "img-active";
	});
});

//Слайдер блока Imersive

sliderImmersive.parentNode.querySelector(".direction__left").addEventListener("click", function(){
	let imgCounts = sliderImmersive.querySelectorAll(".gallery-immersive__img").length - 1;
	if (-offset <= (imgCounts *350) ) {
		if (cost > 0) {
			cost--;
			let imgactive = document.querySelector(".gallery-immersive__img_active");
			imgactive.classList.remove("gallery-immersive__img_active");
			offset = offset - 320;
			sliderImmersive.style.left = -offset + "px";
			sliderImmersive.querySelectorAll(".gallery-immersive__img")[cost].classList.add("gallery-immersive__img_active");
		}

	}
})

sliderImmersive.parentNode.querySelector(".direction__right").addEventListener("click", function(){
	let imgCounts = sliderImmersive.querySelectorAll(".gallery-immersive__img").length-1;
		if (offset <= (imgCounts*350)) {
			if (cost >= 0 & cost < imgCounts) {
				cost++;
				let imgactive = document.querySelector(".gallery-immersive__img_active");
				imgactive.classList.remove("gallery-immersive__img_active");
				offset = offset + 320;
				sliderImmersive.style.left = -offset + "px";
				sliderImmersive.querySelectorAll(".gallery-immersive__img")[cost].classList.add("gallery-immersive__img_active");
			}
		}
})

// hover-text img-item__str

spaceItems.forEach(function (item){
	item.addEventListener("mouseenter", function(){
		this.classList.add("img-item_active");
		let overlay = this.querySelector(".overlay");
		let chekText = this.querySelector(".hover-text");
		let str = this.querySelector(".img-item__str");
		str.classList.add("img-item__str-hover");

		chekText.innerHTML = "Check avaibility";
		overlay.classList.add("overlay_active");

	});
	item.addEventListener("mouseleave", function(){
		this.classList.remove("img-item_active");
		let overlay = this.querySelector(".overlay");
		let chekText = this.querySelector(".hover-text");
		let str = this.querySelector(".img-item__str");
		str.classList.remove("img-item__str-hover");

		chekText.innerHTML = "";
		overlay.classList.remove("overlay_active");

	});
});


spaceDirectionLeft.addEventListener("click", function(){
	let imgCounts = spaceContainer.querySelectorAll(".img-item");
	if (spaceJ < 0) {
		spaceJ +=  1150;
		spaceCount--;
		let widthBar = spaceCount * 40;
		progressBarOverlay.style.width = widthBar + "px";
		spaceSlide.style.left = spaceJ + "px";
		progressBarCount.innerHTML = "0"+spaceCount;

	}
})
spaceDirectionRight.addEventListener("click", function(){
	let imgCounts = spaceContainer.querySelectorAll(".img-item");
	if (spaceJ > -3450) {
		spaceJ -=  1150;
		spaceCount++;
		let widthBar = spaceCount * 40;
		progressBarOverlay.style.width = widthBar + "px";
		spaceSlide.style.left = spaceJ + "px";
		progressBarCount.innerHTML = "0"+spaceCount;
	}
})

//Reviews

sliderReviews.parentNode.querySelector(".direction__left").addEventListener("click", function(){
	if (offsetReviews >= -420) {
			offsetReviews = offsetReviews - 420;
			sliderReviews.style.left = -offsetReviews + "px";

	}
})

sliderReviews.parentNode.querySelector(".direction__right").addEventListener("click", function(){
		let imgReviewsCount = document.querySelectorAll(".Item-reviews").length-1;
		let imgPx = 420*imgReviewsCount;
		if (offsetReviews <= imgPx) {
				offsetReviews = offsetReviews + 420;
				sliderReviews.style.left = -offsetReviews + "px";
		}
})