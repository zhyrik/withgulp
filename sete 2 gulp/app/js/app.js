document.addEventListener("DOMContentLoaded", function () {
	var burger = document.getElementById('burger')
	var draver = document.getElementById('draver')
	var close = document.getElementById('close')

	burger.addEventListener('click', function () {
		draver.style.right = 0
	})

	close.addEventListener('click', function () {
		console.log('click')
		draver.style.right = '-250px'
	})
});
