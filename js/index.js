(function ($) {
  $(function () {
    $('.scroll-section').scrollIndicatorBullets({
      scrollOffset: 0,
      pgKeysEnabled: true,
      scrollDuration: 1000
    });
  });
})(jQuery);



    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scrollToTop').fadeIn();
        } else {
            $('#scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    //$('.scrollToTop').click(function(){
    //    $('html, body').animate({scrollTop : 0},800);
    //    return false;
    //});

// add event listener on load
    window.addEventListener('load', function() {
      // scroll to top
      document.querySelector('.js-scroll-to-top').addEventListener('click', function(e) {
        e.preventDefault();
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      });
    });


 //hello preloader

 var hellopreloader = document.getElementById("hellopreloader_preload");
 function fadeOutnojquery(el){
   el.style.opacity = 1;
   var interhellopreloader = setInterval(function(){
     el.style.opacity = el.style.opacity - 0.05;
     if (el.style.opacity <=0.05){
        clearInterval(interhellopreloader);
        hellopreloader.style.display = "none";
     }
   },16);
   }
   window.onload = function(){
     setTimeout(function(){
       fadeOutnojquery(hellopreloader);
   },1000);
 };

  // columns
  //expanding dialogs about categories

  var Expand = (function() {
    var tile = $('.strips__strip');
    var tileLink = $('.strips__strip > .strip__content');
    var tileText = tileLink.find('.strip__inner-text');
    var stripClose = $('.strip__close');

    var expanded  = false;

    var open = function() {

      var tile = $(this).parent();

        if (!expanded) {
          tile.addClass('strips__strip--expanded');
          // add delay to inner text
          tileText.css('transition', 'all .5s .3s cubic-bezier(0.23, 1, 0.32, 1)');
          stripClose.addClass('strip__close--show');
          stripClose.css('transition', 'all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)');
          expanded = true;
        }
      };

    var close = function() {
      if (expanded) {
        tile.removeClass('strips__strip--expanded');
        // remove delay from inner text
        tileText.css('transition', 'all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)');
        stripClose.removeClass('strip__close--show');
        stripClose.css('transition', 'all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)')
        expanded = false;
      }
    }

      var bindActions = function() {
        tileLink.on('click', open);
        stripClose.on('click', close);
      };

      var init = function() {
        bindActions();
      };

      return {
        init: init
      };

    }());

  Expand.init();

  //expanding dialogs about categories

  //opening menu
  document.querySelector( "#nav-toggle" )
    .addEventListener( "click", function() {
      this.classList.toggle( "active" );
      menu.classList.toggle( "active" );
    });

    document.querySelector( "#yes" )
      .addEventListener( "click", function() {
        ifyes.classList.toggle( "active" );
        question.classList.toggle( "active" );
      });

    document.querySelector( "#no" )
        .addEventListener( "click", function() {
          ifno.classList.toggle( "active" );
          question.classList.toggle( "active" );
        });


    $(document).ready(function(){
  	$("#body").on("click","a", function (event) {
  		//отменяем стандартную обработку нажатия по ссылке
  		event.preventDefault();

  		//забираем идентификатор бока с атрибута href
  		var id  = $(this).attr('href'),

  		//узнаем высоту от начала страницы до блока на который ссылается якорь
  			top = $(id).offset().top;

  		//анимируем переход на расстояние - top за 1500 мс
  		$('body,html').animate({scrollTop: top}, 1500);
  	});
  });

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      var t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  var deadline = new Date(Date.parse(new Date()) + 87 * 24 * 60 * 60 * 1000);
  initializeClock('clockdiv', deadline);
