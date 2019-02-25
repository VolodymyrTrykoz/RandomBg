$(document).ready(function() {
	Gifffer();
	let gifs;
	function runAnimation() {
		console.log(this);
		this.click();

	}

	Math.randomInt = function (min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	};



	let randomNumb;
	let store = [];

	setTimeout(()=>{
      gifs = $('.gif');
			let pickGifToRun = setInterval(function(){
					randomNumb = Math.randomInt(0, 7);
							if(!store.includes(randomNumb)){
                  runAnimation.call(gifs[randomNumb]);
									store.push(randomNumb);
							}
							if (store.length === gifs.length) {
								  clearInterval(pickGifToRun);
							}
			},1000);
	}, 2000);
});

