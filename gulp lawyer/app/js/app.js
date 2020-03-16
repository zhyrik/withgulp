document.addEventListener("DOMContentLoaded", function () {
	var drawer = document.getElementById('drawer')
	var hamburger = document.getElementById('hamburger')
	var close = document.getElementById('close')
	// Custom JS
	hamburger.addEventListener('click', open)
	close.addEventListener('click', closeDraver)

	function open() {
		drawer.style.right = 0
	}
	function closeDraver() {
		drawer.style.right = '-350px'
	}

});
