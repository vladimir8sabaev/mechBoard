"use strict";
function slider({
	container,
	slide,
	nextArrow,
	prevArrow,
	totalCounter,
	currentCounter,
	wrapper,
	field,
	name,
}) {
	//! Slider
	const slides = document.querySelectorAll(slide),
		slidesAdd = document.querySelectorAll(".slide-add"),
		prev = document.querySelector(prevArrow),
		next = document.querySelector(nextArrow),
		total = document.querySelector(totalCounter),
		current = document.querySelector(currentCounter),
		slidesWrapper = document.querySelector(wrapper),
		slidesAddWrapper = document.querySelector(".slider-add-wrapper"),
		slidesField = document.querySelector(field),
		slidesAddField = document.querySelector(".slider-add-inner"),
		width = window.getComputedStyle(slidesWrapper).width,
		widthAdd = "900px",
		slider = document.querySelector(container);
	let picName = document.querySelector(name);
	let descr = document.querySelector(".slide-descr");
	let slideIndex = 1;
	let offset = 0;
	let offsetAdd = 0;
	total.textContent = slides.length;
	current.textContent = slideIndex;
	slidesField.style.width = 100 * slides.length + "%";
	slidesAddField.style.width = 100 * slides.length + "%";
	slidesField.style.display = "flex";
	slidesAddField.style.display = "flex";
	slidesField.style.transition = "1s all";
	slidesAddField.style.transition = "1s all";
	slides.forEach((slide) => {
		slide.style.width = width;
	});
	slidesAdd.forEach((slideAdd) => {
		slideAdd.style.width = widthAdd;
	});
	slidesWrapper.style.overflow = "hidden";
	slidesAddWrapper.style.overflow = "hidden";
	slider.style.position = "relative";
	function deleteNotDigits(str) {
		return +str.replace(/\D/g, "");
	}
	let autoSlide = setInterval(() => next.click(), 5000);
	next.addEventListener("click", () => {
		clearInterval(autoSlide);
		autoSlide = setInterval(() => next.click(), 5000);
		descr.innerHTML = "";
		picName = document.createElement("div");
		picName.classList.add("slide-name");
		descr.append(picName);
		if (offset == deleteNotDigits(width) * (slides.length - 1)) {
			offset = 0;
			offsetAdd = 0;
		} else {
			offset += deleteNotDigits(width);
			offsetAdd += deleteNotDigits("500px");
		}
		slidesField.style.transform = `translateX(-${offset}px)`;
		slidesAddField.style.transform = `translateX(-${offsetAdd}px)`;
		if (slideIndex == slides.length) {
			slideIndex = 1;
			picName.textContent = slides[slideIndex - 1].dataset.name;
		} else {
			slideIndex++;
			picName.textContent = slides[slideIndex - 1].dataset.name;
		}
		current.textContent = slideIndex;
	});
	prev.addEventListener("click", () => {
		clearInterval(autoSlide);
		autoSlide = setInterval(() => next.click(), 5000);
		descr.innerHTML = "";
		picName = document.createElement("div");
		picName.classList.add("slide-name");
		descr.append(picName);
		if (offset == 0) {
			offset = deleteNotDigits(width) * (slides.length - 1);
			offsetAdd = deleteNotDigits("500px") * (slides.length - 1);
		} else {
			offset -= deleteNotDigits(width);
			offsetAdd -= deleteNotDigits("500px");
		}
		slidesField.style.transform = `translateX(-${offset}px)`;
		slidesAddField.style.transform = `translateX(-${offsetAdd}px)`;
		if (slideIndex == 1) {
			slideIndex = slides.length;
			picName.textContent = slides[slideIndex - 1].dataset.name;
		} else {
			slideIndex--;
			picName.textContent = slides[slideIndex - 1].dataset.name;
		}
		current.textContent = slideIndex;
	});
}
export default slider;
