'use strict';

(function($){
	$(document).ready(function() {
		let menu = $('.navigation');
		$(window).scroll(function(){
			if ( $(this).scrollTop() > 94 ){
			$(menu).addClass("fixed");
				} else if($(this).scrollTop() <= 94) {
						$(menu).removeClass("fixed");
				}
			});

	});
	$(window).scroll(function(){
				let $sections = $('section');
		$sections.each(function(i,el){
			let top  = $(el).offset().top-100;
			let bottom = top +$(el).height();
			let scroll = $(window).scrollTop();
			let id = $(el).attr('id');
		if( scroll > top && scroll < bottom){
					$('a.active').removeClass('active');
		$('a[href="#'+id+'"]').addClass('active');

			}
		})
		});

		$(".commands-nav").on("click","a", function (event) {
			// исключаем стандартную реакцию браузера
			event.preventDefault();

			// получем идентификатор блока из атрибута href
			let id  = $(this).attr('href'),

			// находим высоту, на которой расположен блок
					top = $(id).offset().top;
				
			// анимируем переход к блоку, время: 800 мс
			$('body,html').animate({scrollTop: top}, 800);
		});
})(jQuery);

function submitAnswers() {
  var total = 10;
  var score = 0;
  
  //Get user input
  var q1 = document.forms['quizForm']['q1'].value;
  var q2 = document.forms['quizForm']['q2'].value;
  var q3 = document.forms['quizForm']['q3'].value;
  var q4 = document.forms['quizForm']['q4'].value;
  var q5 = document.forms['quizForm']['q5'].value;
  var q6 = document.forms['quizForm']['q6'].value;
  var q7 = document.forms['quizForm']['q7'].value;
  var q8 = document.forms['quizForm']['q8'].value;
  var q9 = document.forms['quizForm']['q9'].value;
  var q10 = document.forms['quizForm']['q10'].value;

  
  // Validation  
  for(var i = 1; i <= total; i++) {
    if(eval('q' + i) === null || eval('q' + i) == '' ) {
      alert('You missed question ' + i);
      return false;
    }
  }
  
  // Set correct answers
  var answers = ["c","b","a","c","d","c","b","d","b","c"];
  
  for(var i = 1; i <= total; i++) {
    // Check answers
    if (eval('q' + i) == answers[i - 1]) {
      score++;
    }
  }

  // Display results
	var results = document.getElementById('results');
	results.classList.add('active')
  results.innerHTML = '<h3>Правильних відповідей <span>' + score + '</span> з <span>' + total + '</span></h3>';
  //alert('You scored ' + score + ' out of ' + total);
  
  return false;
}
