"use strict";
import ky from "ky";
const modalController = () => {
	const modalButton = document.querySelector("#contact");
	const modal = document.querySelector(".modal");
	modal.style.cssText = `display: grid;
      visibility: hidden;
      opacity: 0;
      transition: opacity 300ms ease-in-out
      `;
	const closeModal = (e) => {
		if (
			e.target === modal ||
			e.target.closest(".modal-close") ||
			e.code === "Escape"
		) {
			modal.style.opacity = 0;
			setTimeout(() => {
				modal.style.visibility = "hidden";
			}, 300);
			window.removeEventListener("keydown", closeModal);
		}
	};
	const openModal = () => {
		modal.style.visibility = "visible";
		modal.style.opacity = 1;
		window.addEventListener("keydown", closeModal);
	};
	modalButton.addEventListener("click", openModal);
	modal.addEventListener("click", closeModal);
	const formSend = () => {
		const form = document.querySelector(".modal-form");
		form.addEventListener("submit", async function (e) {
			e.preventDefault();
			const formData = new FormData(form);
			const jsonData = Object.fromEntries(formData.entries());
			console.log("jsonData:", jsonData);
			const json = await ky
				.post(" http://localhost:3000/requests", { json: jsonData })
				.json();
			console.log(json);
		});
	};
	formSend();
};
export default modalController;
