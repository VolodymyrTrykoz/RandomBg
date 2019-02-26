$(document).ready(function() {
	Gifffer();
	let $gifs;
	function runAnimation() {
		this.click();
	}

	Math.randomInt = function (min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	};

	let store = [];

	const setRandValue = () => {
		const randomNumb = Math.randomInt(0, 7);
		if(!store.includes(randomNumb)){
			store.push(randomNumb);
		}
		if(store.length < 7) {
			return setRandValue();
		}
	};
	setTimeout(()=>{
		$gifs = $('.gif');
		setRandValue();
		console.log($gifs, store);
	}, 2000);
});

