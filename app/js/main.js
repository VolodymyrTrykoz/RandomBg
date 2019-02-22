$(document).ready(function() {
	Gifffer();
	let buttons;
	function runAnimation() {
		$(this).click();
		setTimeout(()=>{
			$(this).click();
		}, 5000);
	}
	(function(){
		Math.randomInt = function (min, max) {
			return Math.floor(Math.random() * (max - min)) + min;
		};
	})();


	let randomNumb;
	setTimeout(()=>{
		$('.btn').on('click', ()=>{
			buttons = $('button');
			randomNumb = Math.randomInt(0, 4);
			console.log(randomNumb);
			runAnimation.call(buttons[randomNumb]);
		})
	}, 2000);
});


