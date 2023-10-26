document.addEventListener("DOMContentLoaded", function () {
	let sections = document.querySelectorAll('.zIndex');
	let length = sections.length;
	sections.forEach(el => {
		el.style.zIndex = length;
		length--;
	});
});

let params = {
	amount: 50,
	size: {
		min: 1,
		max: 5,
		giant: 9
	},
	duration: {
		min: 5,
		max: 10,
	},
	boxShadowColor: {
		white: '255,255,255',
		yellow: '253,220,111'
	}
}

let starsWhite = document.querySelectorAll('.stars_white');
starsWhite.forEach(starElem => {
	createStars(starElem, params.boxShadowColor.white);
});
let starsYellow = document.querySelectorAll('.stars_yellow');
starsYellow.forEach(starElem => {
	createStars(starElem, params.boxShadowColor.yellow);
});

function randomBetween(a, b) {
	return (a + (Math.random() * (b - a)));
}

function createStars(block, boxShColor) {
	for (let i = 0; i < params.amount; i++) {
		let item = document.createElement('div');
		item.classList.add('stars__item');
		let size = Math.round(Math.random() * 10) === 0 ? params.size.giant : randomBetween(params.size.min, params.size.max);
		item.style.width = size + "px";
		item.style.height = size + "px";
		item.style.left = randomBetween(0, 100) + "%";
		item.style.top = randomBetween(0, 100) + "%";
		item.style.boxShadow = "0 0 " + size + "px " + size / 2 + "px rgba(" + boxShColor + ", 1)";
		item.style.animationDuration = randomBetween(params.duration.min, params.duration.max) + "s";
		block.insertAdjacentElement('beforeend', item);
	}
}


let paramsSmoke = {
	amount: 5,
	size: {
		min: 700,
		max: 1000,
		giant: 1000
	},
	duration: {
		min: 15,
		max: 30,
	}
}

let smoke = document.querySelectorAll('.smoke');
smoke.forEach(smokeElem => {
	createSmoke(smokeElem);
});

function createSmoke(block) {
	for (let i = 0; i < paramsSmoke.amount; i++) {
		let item = document.createElement('div');
		item.classList.add('smoke__item');
		let size = Math.round(Math.random() * 10) === 0 ? paramsSmoke.size.giant : randomBetween(paramsSmoke.size.min, paramsSmoke.size.max);
		item.style.width = size + "px";
		item.style.height = size + "px";
		item.style.left = randomBetween(0, 40) + "%";
		item.style.bottom = randomBetween(-50, -30) + "%";
		item.style.animationDuration = randomBetween(paramsSmoke.duration.min, paramsSmoke.duration.max) + "s";
		block.insertAdjacentElement('beforeend', item);
	}
}

function fadeIn(el, timeout, display) {
	el.style.opacity = 0;
	el.style.display = display || 'block';
	el.style.transition = `opacity ${timeout}ms`;
	setTimeout(() => {
		el.style.opacity = 1;
	}, 10);
}

function fadeOut(el, timeout) {
	el.style.opacity = 1;
	el.style.transition = `opacity ${timeout}ms`;
	el.style.opacity = 0;
	setTimeout(() => {
		el.style.display = 'none';
	}, timeout);
}

let pickModal = document.querySelector('.pick__modal');
if (pickModal) {
	pickModal.querySelector('.pick__modal-close').addEventListener('click', function () {
		fadeOut(pickModal, 300);
	});

	let pickBtns = document.querySelectorAll('.pick-item__btn');
	pickBtns.forEach(btn => {
		btn.addEventListener('click', function (event) {
			event.preventDefault();
			fadeIn(pickModal, 300);
			let titleModal = pickModal.querySelector('.pick__modal-title');
			let inputForModal = pickModal.querySelector('input[name="for"]');
			switch (event.currentTarget.dataset.for) {
				case 'cats':
					titleModal.textContent = 'Подарить корм для котов';
					inputForModal.value = event.currentTarget.dataset.for;
					break;
				case 'dogs':
					titleModal.textContent = 'Подарить корм для собак';
					inputForModal.value = event.currentTarget.dataset.for;
					break;
				default:
					titleModal.textContent = 'Подарить корм';
					inputForModal.value = 'Подарить корм';
					break;
			}

		});
	});

	let radio = pickModal.querySelectorAll('.pick__form-label-radio');
	radio.forEach(el => {
		el.addEventListener('change', () => {

			if (el.value === 'Другая сумма') {
				pickModal.querySelector('.pick__form-input[name="sum"]').disabled = false;
				pickModal.querySelector('.pick__form-input[name="sum"]').value = '';
				console.log(pickModal.querySelector('.pick__form-input[name="sum"]').value);
				pickModal.querySelector('.pick__form-input[name="sum"]').placeholder = 'от 300 руб.';
			} else {
				pickModal.querySelector('.pick__form-input[name="sum"]').disabled = true;
				pickModal.querySelector('.pick__form-input[name="sum"]').value = el.dataset.pickPrice;
				pickModal.querySelector('.pick__form-input[name="sum"]').placeholder = '';
			}
		});
	});
}

let qa = document.querySelectorAll('.qa-item__title-block');
qa.forEach(el => {
	el.addEventListener('click', function (event) {
		if (event.currentTarget.parentElement.classList.contains("open")) {
			event.currentTarget.nextElementSibling.style.paddingTop = "0";
			event.currentTarget.nextElementSibling.style.paddingBottom = "0";
			event.currentTarget.nextElementSibling.style.maxHeight = "0";
			event.currentTarget.parentElement.classList.remove("open");
		} else {
			event.currentTarget.nextElementSibling.style.paddingTop = "20px";
			event.currentTarget.nextElementSibling.style.paddingBottom = "20px";
			event.currentTarget.nextElementSibling.style.maxHeight = 40 + event.currentTarget.nextElementSibling.scrollHeight + "px";
			event.currentTarget.parentElement.classList.add("open");
		}
	});
});

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click", (event) => {
		event.preventDefault();
		let tabsChildren = event.currentTarget.parentElement.children;
		for (let t = 0; t < tabsChildren.length; t++) {
			tabsChildren[t].classList.remove("active");
		}
		tabs[i].classList.add("active");
		let tabContentChildren = event.currentTarget.parentElement.parentElement.nextElementSibling.children;
		for (let c = 0; c < tabContentChildren.length; c++) {
			tabContentChildren[c].classList.remove("active");
		}
		contents[i].classList.add("active");
	});
}

document.querySelectorAll('.simple-bar').forEach(el => {
	new SimpleBar(el, {
		autoHide: false,
	});
});


let openVideoId = document.querySelector('#open-video');
if (openVideoId) {
	document.querySelector('#open-video').addEventListener('click', openVideo);
}

function openVideo() {
	var modalCallback = document.getElementById("modal-video");
	let close = modalCallback.querySelector(".modal-content__close");
	fadeIn(modalCallback, 300, 'flex');
	close.onclick = function () {
		fadeOut(modalCallback, 300);
	}
}

let scrollToPickBtns = document.querySelectorAll('.scrollToPick');
scrollToPickBtns.forEach(btn => {
	btn.addEventListener('click', scrollToPick);
});

function scrollToPick(event) {
	event.preventDefault();
	window.scrollTo({
		top: document.querySelector('#pick').getBoundingClientRect().top + window.pageYOffset + yOffset(),
		behavior: 'smooth'
	});
	if (event.currentTarget.dataset.scrollFor) {
		document.querySelector(`.pick-item__btn[data-for="${event.currentTarget.dataset.scrollFor}"]`).click();
	}
}

function yOffset() {
	if (window.outerWidth <= 1199) {
		return 30;
	} else {
		return 90;
	}
}

var lazyLoadInstance = new LazyLoad({
	elements_selector: ".lazy"
});

var galleries = document.querySelectorAll('.lg');
for (let i = 0; i < galleries.length; i++) {
	lightGallery(galleries[i], {
		thumbnail: false,
		selector: '.lg-item',
		download: false
	})
}

const form = document.querySelector('.pick__form');
if (form) {
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		event.currentTarget.querySelector('input[name="sum"]').removeAttribute('disabled');
		let formData = new FormData(form);
		formData.append("action", "pay_mixplat");
		fetch('/wp-admin/admin-ajax.php', {
				method: "POST",
				body: formData,
			})
			.then(response => response.json())
			.then((data) => {
				if (data.result === 'ok') {
					window.location.href = data.redirect_url;
					// window.open(data.redirect_url, '_blank');
				} else {
					let inputs = form.querySelectorAll('input');
					inputs.forEach(el => {
						el.addEventListener('input', () => {
							el.removeAttribute("style");
						});
					});
					for (let el in data) {
						if (el !== 'for') {
							document.querySelector(`input[name=${el}]`).style.borderColor = "#da4c4c";
						} else {
							console.log(data.for);
						}
					}
				}

			});
		event.currentTarget.querySelector('input[name="sum"]').setAttribute('disabled', '');

	});
}


let autocomplete = document.querySelectorAll('.autocomplete');
autocomplete.forEach(el => {
	el.addEventListener('input', autocompleteInput);
});

function autocompleteInput(event) {
	let nameCookie;
	switch (event.currentTarget.name) {
		case 'email':
			nameCookie = 'userMail';
			break;
		case 'name':
			nameCookie = 'userName';
			break;
	}
	let timer;
	let seconds = dayToSec(365);
	let keyPause = 500;
	clearTimeout(timer);
	timer = setTimeout(() => {
		document.cookie = `${nameCookie}=${this.value}; max-age=${seconds}; path=/`;
	}, keyPause);
}

function dayToSec(days) {
	return days * 24 * 60 * 60;
}