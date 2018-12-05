/**
*
* @name:       Number facts
* @version:    0.1.0
* @author:     EOussama
* @license     Apache-2.0
* @source:     https://github.com/EOussama/Number-facts
* 
* The main javascript file of the app.
*
*/

"use strict";

window.addEventListener('load', function() { "use strict";
	const
		cardMath = document.getElementById('card-math'),
		cardTrivia = document.getElementById('card-trivia'),
		cardDate = document.getElementById('card-date'),
		cardYear = document.getElementById('card-year'),
		mathBtn = document.getElementById('mathBtn'),
		triviaBtn = document.getElementById('triviaBtn'),
		dateBtn = document.getElementById('dateBtn'),
		yearBtn = document.getElementById('yearBtn'),
		cbMath = document.getElementById('cbMath'),
		cbTrivia = document.getElementById('cbTrivia'),
		cbDate = document.getElementById('cbDate'),
		cbYear = document.getElementById('cbYear'),
		numberFact = document.getElementById('numberFact'),
		triviaFact = document.getElementById('triviaFact'),
		dateFact = document.getElementById('dateFact'),
		yearFact = document.getElementById('yearFact');
											
											
	function slide(slideId) {
		switch(slideId) {
			case 0: {
				cardMath.style.display = 'block';
				cardTrivia.style.display = cardYear.style.display = cardDate.style.display = 'none';
				
				break;
			}
				
			case 1: {
				cardTrivia.style.display = 'block';
				cardDate.style.display = cardYear.style.display = cardMath.style.display = 'none';
				
				break;
			}
				
			case 2: {
				cardDate.style.display = 'block';
				cardTrivia.style.display = cardYear.style.display = cardMath.style.display = 'none';
				
				break;
			}
			case 3: {
				cardYear.style.display = 'block';
				cardTrivia.style.display = cardDate.style.display = cardMath.style.display = 'none';
				
				break;
			}
		}
	}
											
	mathBtn.addEventListener('click', () => slide(0));
	triviaBtn.addEventListener('click', () => slide(1));
	dateBtn.addEventListener('click', () => slide(2));
    yearBtn.addEventListener('click', () => slide(3));
											
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

		   	fetch(`http://numbersapi.com/${month}/${day}/date`).then((res) => res.text()).then((data) => dateFact.textContent = data);
		}
		
		else {
			dateFact.textContent = '';
		}
	});
											
	cbYear.addEventListener('input', function() {
		if(cbYear.value != '') {
		   	fetch(`http://numbersapi.com/${this.value}/year`).then((res) => res.text()).then((data) => yearFact.textContent = data);
		}
		
		else {
			yearFact.textContent = '';
		}
	});
											
	slide(0);
});
