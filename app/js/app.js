document.addEventListener("DOMContentLoaded", function () {

	let sections = document.querySelectorAll('.section');
	let length = sections.length;
	sections.forEach(el => {
		el.style.zIndex = length;
		length--;

	});

});


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
		let tabContentChildren = event.currentTarget.parentElement.nextElementSibling.children;
		console.log(event.currentTarget.parentElement.nextElementSibling.children);
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