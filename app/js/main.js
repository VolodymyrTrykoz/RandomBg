$(document).ready(function() {
	console.log('DOM is ready');
	Gifffer();
	let $gifs;

	function runAnimation() {
		this.click();
	}

	Math.randomInt = function (min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	};

	let store = [];

	const fireRandomGif = () => {
		for (let i = 0; i < store.length; i++) {
			const randomNumb = store[i];
			const randomGif = $gifs[randomNumb];
			setTimeout(function() { runAnimation.call(randomGif); }, i*5000 );
		}
	};

	const setRandValue = () => {
		const randomNumb = Math.randomInt(0, $gifs.length);
		if(!store.includes(randomNumb)){
			store.push(randomNumb);
		}
		if(store.length < $gifs.length) {
			return setRandValue();
		}
		if(store.length === $gifs.length){
			fireRandomGif();
		}
	};

	window.onload = function() {
		console.log('window is ready');
		$gifs = $('.gif');
		$('.gif__wrapper').removeClass('gif__wrapper--hidden');
		setRandValue();
	};











});

