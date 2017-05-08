var pos = 0;
$( document ).ready(function() {
    $(this).scrollTop(0);
    var delay = false;
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    var perks = $('section .likeon-section02.copy-section04 .right');

    if (width <= 668 && width >= 320) {
      var left = width - 392;

     setTimeout( function(){
        console.log("device width", width, $('section .likeon-section02.copy-section04 .right').offset());
        perks.css({'width':width+'px','margin-left' : '-'+ $('section .likeon-section02.copy-section04 .right').offset().left +'px'});  

      },1000);
      

    }else{

      $(document).on('mousewheel DOMMouseScroll', function(event) {
        event.preventDefault();
        if (delay) { return};

        delay = true;
        var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;        
        if(wd > 0) {
            pos--;
        }else{
            pos++;
        }

        if (pos < 0) {
            pos = 0;
            delay = false
            return;
        }

        if (pos > 5) {
            pos = 5;
            delay = false
            return;
        }

        

        var a = $("#section-0"+pos).offset().top;
        $("body, html").animate({ scrollTop: a+"px" },{
                duration: 'slow',
                easing: 'swing'
            }, 200);
        $("section").addClass('hidden');
        $("#section-0"+pos).removeClass('hidden');
        setTimeout(function(){delay = false},1500)
    });

      $('.more-info, .contact-form').on('mousewheel DOMMouseScroll', function(event) {
      event.stopPropagation();
    });

    }
  
    $("ul.menu li.menu-el").fadeIn('fast', function(){
    	$(this).parents("ul.menu").addClass('displayed');
    });

    $("body").on("click","ul.menu li.hamburger", function(){
    	var el = $(this);
    	if ( el.parents("ul.menu").hasClass('displayed') ) {
    		el.parents("ul.menu").find("li.menu-el").fadeOut('fast', function(){
    			el.parents("ul.menu").removeClass('displayed');
    		});
    	}else{
    		el.parents("ul.menu").find("li.menu-el").fadeIn('fast', function(){
    			el.parents("ul.menu").addClass('displayed');
    		});
    	}
    })

    $("section").each( function(){
    	var el = $(this);
    	var wrapper = el.find('.wrapper');
    	var center = wrapper.height()/2;
    	wrapper.css({'top':'50%','margin-top' : '-'+center+'px'}).fadeIn('fast');
    });

    $("body").on("click",".indicator div.step, .next-fold, .products-fold", function(){
    	var section = $(this).data('section');
    	var number = $(this).data('number');
        pos = number;
    	var a = $("#"+section).offset().top;
      console.log("he offset", a);
      if (number == 5) {
          a = $(document).height();
      }
    	$("body, html").animate({ scrollTop: a+"px" },{
          duration: 'slow',
          easing: 'swing'
      });
      $("section").addClass('hidden');
        $("#section-0"+number).removeClass('hidden');
    })

    $("body").on("click click touchstart",".discover", function(){
    	var a = $("#section-01").offset().top;
    	$("body, html").animate({ scrollTop: a+"px" },{
                    duration: 'slow',
                    easing: 'swing'
                });
        pos = 1;
        $("section").addClass('hidden');
        $("#section-0"+pos).removeClass('hidden');
    })

  $(this).scroll(function(e) {
        e.preventDefault();
		var scrollTop = $(this).scrollTop();
		if (scrollTop > 300) {
			if ($("ul.menu").hasClass('displayed')) {
				$("li.menu-el").fadeOut('fast', function(){
					$("ul.menu").removeClass('displayed');
				});
				
			}

      if (scrollTop >= $("section#section-05").offset().top - 50 ) {
          $("img.head-logo").fadeOut('fast');
          $("div.indicator").fadeOut('fast');
      }else{
          $("img.head-logo").fadeIn('fast');
          $("div.indicator").fadeIn('fast');
      }

		}else{
			if (!$("ul.menu").hasClass('displayed')) {
				$("li.menu-el").fadeIn('fast', function(){
					$("ul.menu").addClass('displayed');
				});
				$("img.head-logo").fadeOut('fast');
			}
		}
	});

    

    $('body').on('click click touchstart','nav.mobile ul.menu li.hamburger', function(){
        var menu = $('div.mobile-menu');
        menu.css({'left':'0'});
    })

    $('body').on('click click touchstart','div.mobile-menu a.close', function(){
        var menu = $('div.mobile-menu');
        menu.css({'left':'-200%'});
    });


    $("body").on("click",".view-more-info", function(evet){
      var info = $(".more-info");
      var mask = $(".mask");
      mask.fadeIn('200');
      info.addClass('show');

      $('body').css({'overflow':'hidden'});
    })

    $("body").on("click",".more-info .close", function(evet){
      var info = $(".more-info");
      var mask = $(".mask");
      info.removeClass('show');
      mask.fadeOut('200');
      $('body').css({'overflow':'auto'});
    });


    $("body").on("click",".view-contact-form", function(evet){
      var form = $(".contact-form");
      var mask = $(".mask");
      mask.fadeIn('200');
      form.addClass('show');

      $('body').css({'overflow':'hidden'});
    })

    $("body").on("click",".contact-form .close", function(evet){
      var form = $(".contact-form");
      var mask = $(".mask");
      form.removeClass('show');
      mask.fadeOut('200');
      $('body').css({'overflow':'auto'});
    });

    $('.flexslider').flexslider({
      animation: "slide"
    });

    
		
});
  
  $('#contact-form').submit(function(event){
    event.preventDefault();
    $('#contact-message').hide();
    $('#contact-message').html('');
    $('#contact-message').removeClass('error');

    var name = $("#name");
    var email = $("#email");
    var message = $("#message");

    if (validateFields()) {
      event.preventDefault();
      var boton = event.target.name;
      var url = $(this).attr('action');
      var datos = $(this).serialize();
      $.post(url, datos, function(resultado){

        if (resultado == '200') {
          $('#contact-message').addClass('success');
          $('#contact-message').html('Gracias por contactarnos!, en breve nos estaremos comunicando con usted.');
          $('#contact-message').fadeIn("slow");
          var form = $(".contact-form");
          var mask = $(".mask");

          setTimeout( function(){
            form.removeClass('show');
            mask.fadeOut('200');
            $('body').css({'overflow':'auto'});
            name.val('');
            email.val('');
            message.val('');
            $('#contact-message').hide();
            $('#contact-message').html('');
            $('#contact-message').removeClass('success');
          },1500)
          
        }else{
          $('#contact-message').addClass('error');
          $('#contact-message').html('Algo salió mal, contacta al administrador');
          $('#contact-message').fadeIn("slow");
        }
        

      });
    }else{
      $('#contact-message').addClass('error');
      $('#contact-message').html('Por favor, verifica tus datos.');
      $('#contact-message').fadeIn("slow");
    }
  });
  
  function validateFields(){
    var name = $("#name");
    var email = $("#email");
    var message = $("#message");

    name.removeClass('error');
    email.removeClass('error');
    message.removeClass('error');

    if (name.val().trim() == '' || email.val().trim() == '' || message.val().trim() == '') {
      if (name.val().trim() == '') name.addClass('error');
      if (email.val().trim() == '') email.addClass('error');
      if (message.val().trim() == '') message.addClass('error');
      return false;
    }else{
      return true;
    }
  }
  
  function gotoProducts(){
    pos = 5;
    var a = $("#section-05").offset().top;
    $( document ).scrollTop( a );
    $("section").addClass('hidden');
    $("#section-0"+pos).removeClass('hidden');
  }

  $(window).bind("scroll", function(event) {
    $("section:in-viewport").each(function() {
      var number = $(this).data('number');
  		var ball_top = (78*number) - 23;
  		$(".indicator .selected").css({'top':ball_top+'px'})

    });      
  });

