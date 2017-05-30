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

<<<<<<< HEAD
 //hellopreloader
=======
 //hello preloader
>>>>>>> parent of 9679037... aa
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
<<<<<<< HEAD
=======


  //opening menu
  document.querySelector( "#nav-toggle" )
    .addEventListener( "click", function() {
      this.classList.toggle( "active" );
      menu.classList.toggle( "active" );
    });
>>>>>>> parent of 9679037... aa
