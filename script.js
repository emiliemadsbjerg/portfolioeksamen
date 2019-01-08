window.addEventListener("load", startSite);

function startSite() {
	console.log("hej");
	document.querySelector(".burger_menu").addEventListener("click", openMenu);
}

function openMenu(x) {
	document.querySelector("#burger_menu").classList.toggle("open");
	document.querySelector("#burger_menu").classList.toggle("hide");

}
