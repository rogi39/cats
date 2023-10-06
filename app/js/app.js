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