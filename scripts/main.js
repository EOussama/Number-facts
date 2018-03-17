window.addEventListener('load', function() { "use strict";
	const
		cardMath = document.getElementById('card-math'),
		cardTrivia = document.getElementById('card-trivia'),
		cardDate = document.getElementById('card-date'),
		mathBtn = document.getElementById('mathBtn'),
		triviaBtn = document.getElementById('triviaBtn'),
		dateBtn = document.getElementById('dateBtn'),
		cbMath = document.getElementById('cbMath'),
		cbTrivia = document.getElementById('cbTrivia'),
		cbDate = document.getElementById('cbDate'),
		numberFact = document.getElementById('numberFact'),
		triviaFact = document.getElementById('triviaFact'),
		dateFact = document.getElementById('dateFact');
											
											
	function slide(slideId) {
		switch(slideId) {
			case 0: {
				cardMath.style.display = 'block';
				cardTrivia.style.display = cardDate.style.display = 'none';
				
				break;
			}
				
			case 1: {
				cardTrivia.style.display = 'block';
				cardDate.style.display = cardMath.style.display = 'none';
				
				break;
			}
				
			case 2: {
				cardDate.style.display = 'block';
				cardTrivia.style.display = cardMath.style.display = 'none';
				
				break;
			}
		}
	}
											
	mathBtn.addEventListener('click', () => slide(0));
	triviaBtn.addEventListener('click', () => slide(1));
	dateBtn.addEventListener('click', () => slide(2));
											
	cbMath.addEventListener('input', function() {
		if(cbMath.value != '') {
		   	fetch(`http://numbersapi.com/${this.value}/math`).then((res) => res.text()).then((data) => numberFact.textContent = data);
		}
		
		else {
			numberFact.textContent = '';
		}

	});
											
	cbTrivia.addEventListener('input', function() {
		if(cbTrivia.value != '') {
		   	fetch(`http://numbersapi.com/${this.value}`).then((res) => res.text()).then((data) => triviaFact.textContent = data);
		}
		
		else {
			triviaFact.textContent = '';
		}
	});
											
	cbDate.addEventListener('input', function() {
		if(cbDate.value != '') {
			let
				date = new Date(this.value),
				month = date.getMonth() + 1,
				day = date.getDate();
			console.log(this.value);
		   	fetch(`http://numbersapi.com/${month}/${day}/date`).then((res) => res.text()).then((data) => dateFact.textContent = data);
		}
		
		else {
			dateFact.textContent = '';
		}
	});
											
	slide(0);
});