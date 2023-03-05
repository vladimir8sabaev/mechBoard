"use strict";
import "./index.html";
import "./index.scss";
import slider from "./modules/slider";
import switches from "./modules/switches";
import chart from "./modules/chart";
import modalController from "./modules/modal";
slider({
	container: ".slider-main",
	nextArrow: ".slider-next",
	prevArrow: ".slider-prev",
	slide: ".slide",
	totalCounter: "#total",
	currentCounter: "#current",
	wrapper: ".slider-wrapper",
	field: ".slider-inner",
	name: ".slide-name",
});
switches();
chart();
modalController();
