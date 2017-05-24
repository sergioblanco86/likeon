var pos = 0;
$( document ).ready(function() {

    // get visible div
    pos = $("section:in-viewport").data('number');
    var intervalStarted = false;
    if (pos == 8) {
      intervalStarted = true;
      var move = 1;
      window.setInterval(function () {
        $("#img-content-section08").fadeOut('fast', function(){
          if (move == 3) {
            $("#img-content-section08").removeClass("img-0"+move).addClass("img-01");
            move = 0;
          }else{
           
              $("#img-content-section08").removeClass("img-0"+move).addClass("img-0"+(move+1));
              $(this).fadeIn('fast');
            
          }
          move++;
          $(this).fadeIn('fast');
        });
      },3000);
    }

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
        var pos_bu = pos;

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

        if (pos > 9) {
            pos = 9;
            delay = false
            return;
        }

        
        if ( $("#section-0"+pos).length == 0) {
            pos = pos_bu;
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

        if (pos == 8 && !intervalStarted) {
          var move = 1;
          window.setInterval(function () {
            $("#img-content-section08").fadeOut('fast', function(){
              if (move == 3) {
                $("#img-content-section08").removeClass("img-0"+move).addClass("img-01");
                move = 0;
              }else{
               
                  $("#img-content-section08").removeClass("img-0"+move).addClass("img-0"+(move+1));
                  $(this).fadeIn('fast');
                
              }
              move++;
              $(this).fadeIn('fast');
            });
          },3000);
        }

    });

    $('.more-info, .contact-form').on('mousewheel DOMMouseScroll', function(event) {
      event.stopPropagation();
    });

    }
    $(".mexico").on("mouseover", function (){
      $("div[id^=map-]").addClass('hide-visual')
      $("#map-mexico").removeClass('hide-visual')
    })
    $(".colombia").on("mouseover", function (){
      $("div[id^=map-]").addClass('hide-visual')
      $("#map-colombia").removeClass('hide-visual')
    })
    $(".ecuador").on("mouseover", function (){
      $("div[id^=map-]").addClass('hide-visual')
      $("#map-ecuador").removeClass('hide-visual')
    })
    $(".argentina").on("mouseover", function (){
      $("div[id^=map-]").addClass('hide-visual')
      $("#map-argentina").removeClass('hide-visual')
    })

    $(".bogota").hover( 
      function (){
        $(".box-bogota").removeClass('hide')
      },
      function () {
        $(".box-bogota").addClass('hide')
      }
    )
    
    $("#people01").on("mouseover", function (){
      $(".rectangle-people").addClass('off')
      $(".rectangle-people").removeClass('wifi-small')
      $("#people01").removeClass('off')
      $("#people01").addClass('on wifi-small')
      $("div[id^=info-01-]").addClass('hide')
      $("#info-01-01").removeClass('hide')
    })
    $("#people02").on("mouseover", function (){
      $(".rectangle-people").addClass('off')
      $(".rectangle-people").removeClass('wifi-small')
      $("#people02").removeClass('off')
      $("#people02").addClass('on wifi-small')
      $("div[id^=info-01-]").addClass('hide')
      $("#info-01-02").removeClass('hide')
    })
    $("#people03").on("mouseover", function (){
      $(".rectangle-people").addClass('off')
      $(".rectangle-people").removeClass('wifi-small')
      $("#people03").removeClass('off')
      $("#people03").addClass('on wifi-small')
      $("div[id^=info-01-]").addClass('hide')
      $("#info-01-03").removeClass('hide')
    })

    $("#people02-01",".phone01").on("mouseover", function (){
      $(".rectangle-phone").removeClass('wifi-red')
      $(".rectangle-phone").addClass('wifi-gray')
      $(".phone01").removeClass('wifi-gray')
      $(".phone01").addClass('wifi-red')
      $("div[id^=people02]").removeClass('on')
      $("div[id^=people02]").addClass('off')
      $("#people02-01").removeClass('off')
      $("#people02-01").addClass('on')
      $("div[id^=info-02-]").addClass('hide')
      $("#info-02-01").removeClass('hide')
    })
    $("#people02-02",".phone02").on("mouseover", function (){
      $(".rectangle-phone").removeClass('wifi-red')
      $(".rectangle-phone").addClass('wifi-gray')
      $(".phone02").removeClass('wifi-gray')
      $(".phone02").addClass('wifi-red')
      $("div[id^=people02]").removeClass('on')
      $("div[id^=people02]").addClass('off')
      $("#people02-02").removeClass('off')
      $("#people02-02").addClass('on')
      $("div[id^=info-02-]").addClass('hide')
      $("#info-02-02").removeClass('hide')
    })
    $("#people02-03",".phone03").on("mouseover", function (){
      $(".rectangle-phone").removeClass('wifi-red')
      $(".rectangle-phone").addClass('wifi-gray')
      $(".phone03").removeClass('wifi-gray')
      $(".phone03").addClass('wifi-red')
      $("div[id^=people02]").removeClass('on')
      $("div[id^=people02]").addClass('off')
      $("#people02-03").removeClass('off')
      $("#people02-03").addClass('on')
      $("div[id^=info-02-]").addClass('hide')
      $("#info-02-03").removeClass('hide')
    })
    $("#people02-04",".phone04").on("mouseover", function (){
      $(".rectangle-phone").removeClass('wifi-red')
      $(".rectangle-phone").addClass('wifi-gray')
      $(".phone04").removeClass('wifi-gray')
      $(".phone04").addClass('wifi-red')
      $("div[id^=people02]").removeClass('on')
      $("div[id^=people02]").addClass('off')
      $("#people02-04").removeClass('off')
      $("#people02-04").addClass('on')
      $("div[id^=info-02-]").addClass('hide')
      $("#info-02-04").removeClass('hide')
    })

    $(".info-slide-b-02").on("click",function () {
      $("div[class^=info-slide-b-]").addClass("hide")
      $(".scroll-content").removeClass("hide")
      $(".back-info-slide-b").removeClass("hide")
      $("#content01-section03").removeClass("hide")
      $("#home-section03").addClass("hide")
      $("#slide-phone-01").addClass("content0101")
      $("#slide-phone-02").addClass("content0102")
      $("#slide-phone-03").addClass("content0103")
      $("#phone-section-03").addClass("changePhone");
      $(".second-phone").addClass("show");
      $(".overflow").addClass("show");
      $(".leftB").addClass("show");
      $(".rightB").addClass("show");
    })
    $(".info-slide-b-03").on("click",function () {
      $("div[class^=info-slide-b-]").addClass("hide")
      $(".scroll-content").removeClass("hide")
      $(".back-info-slide-b").removeClass("hide")
      $("#content02-section03").removeClass("hide")
      $("#home-section03").addClass("hide")
      $("#slide-phone-01").addClass("content0201")
      $("#slide-phone-02").addClass("content0202")
      $("#slide-phone-03").addClass("content0203")

      $("#phone-section-03").addClass("changePhone");
      $(".second-phone").addClass("show");
      $(".overflow").addClass("show");
      $(".leftB").addClass("show");
      $(".rightB").addClass("show");
    })
    $(".back-info-slide-b").on("click",function () {
      $("div[class^=slide-phone-]").removeClass()
      $("#content01-section03").removeClass()
      $("#content02-section03").removeClass()

      $(".scroll-content").addClass("hide")
      $("#home-section03").removeClass("hide")
      $(".back-info-slide-b").addClass("hide")
      $("div[class^=info-slide-b-]").removeClass("hide")
      $("#content01-section03").addClass("hide")
      $("#content02-section03").addClass("hide")

      $("#phone-section-03").removeClass("changePhone");
      $(".second-phone").removeClass("show");
      $(".overflow").removeClass("show");
      $(".leftB").removeClass("show");
      $(".rightB").removeClass("show");

      $("#slide-phone-01").removeClass("content0101")
      $("#slide-phone-02").removeClass("content0102")
      $("#slide-phone-03").removeClass("content0103")

      $("#slide-phone-01").removeClass ("content0201")
      $("#slide-phone-02").removeClass ("content0202")
      $("#slide-phone-03").removeClass ("content0203")
    })
    window.addEventListener('keydown', function(e) {
      if(e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
      }
    });


    $("div[id^=box-content-section06-]").on("mouseover",function (e) {
      $("#img-content-section06").removeClass();
      $("#img-content-section06").addClass("img-"+e.currentTarget.id.slice(-2))
      $("#img-content-section06").addClass("img-"+e.currentTarget.id.slice(-2))
      $(".description-right").children().removeClass('hide')
      $(".description-right").children().addClass('hide')
      $(".info-"+e.currentTarget.id.slice(-2)).removeClass('hide')
      $(".buttons-center").children().removeClass('red')
      $(".buttons-center").children().addClass('gray')
      $(e.currentTarget).removeClass('gray')
      $(e.currentTarget).addClass('red')
    })

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

      if ($("img.head-logo").data('index')) {
        if ($("section#section-05").length > 0 && scrollTop >= $("section#section-05").offset().top - 50) {
            $("img.head-logo").fadeOut('fast');
            $("div.indicator").fadeOut('fast');
        }else{
            $("img.head-logo").fadeIn('fast');
            $("div.indicator").fadeIn('fast');
        }
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

    // blueon slide1
    $("body").on("mouseenter",".show-bubble", function(event){
      $(this).parents(".blueon-section00").find(".bubble").fadeToggle('fast');
    });
    $("body").on("mouseleave",".show-bubble", function(event){
      $(this).parents(".blueon-section00").find(".bubble").fadeToggle('fast');
    })

    // blueon slide2
    $("body").on("mouseenter",".pointer.left-p", function(event){
      $(this).parents(".blueon-section01").find(".p1").fadeToggle('fast');
    });
    $("body").on("mouseleave",".pointer.left-p", function(event){
      $(this).parents(".blueon-section01").find(".p1").fadeToggle('fast');
    })

    $("body").on("mouseenter",".pointer.right-p", function(event){
      $(this).parents(".blueon-section01").find(".p2").fadeToggle('fast');
    });
    $("body").on("mouseleave",".pointer.right-p", function(event){
      $(this).parents(".blueon-section01").find(".p2").fadeToggle('fast');
    })

    $("body").on("mouseenter",".pointer.right-leg", function(event){
      $(this).parents(".blueon-section01").find(".p3").fadeToggle('fast');
    });
    $("body").on("mouseleave",".pointer.right-leg", function(event){
      $(this).parents(".blueon-section01").find(".p3").fadeToggle('fast');
    })

    // blueon slide3
		$("body").on("mouseenter",".pointer.fem", function(event){
      $(this).parents(".blueon-section02").find(".p2").fadeOut('fast');
      $(this).parents(".blueon-section02").find(".p1").fadeIn('fast');
    });
    $("body").on("mouseenter",".pointer.male", function(event){
      $(this).parents(".blueon-section02").find(".p2").fadeIn('fast');
      $(this).parents(".blueon-section02").find(".p1").fadeOut('fast');
    });

    window.addEventListener("keydown", function(e) {
        // space and arrow keys
        if([38, 40].indexOf(e.keyCode) > -1) {
            
            e.preventDefault();

            if (e.keyCode == 40) {


              if (delay) { return};

              delay = true;
              var pos_bu = pos;
              pos++;
              

              if (pos < 0) {
                  pos = 0;
                  delay = false
                  return;
              }

              if (pos > 9) {
                  pos = 9;
                  delay = false
                  return;
              }

              
              if ( $("#section-0"+pos).length == 0) {
                  pos = pos_bu;
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

              if (pos == 8 && !intervalStarted) {
                var move = 1;
                window.setInterval(function () {
                  $("#img-content-section08").fadeOut('fast', function(){
                    if (move == 3) {
                      $("#img-content-section08").removeClass("img-0"+move).addClass("img-01");
                      move = 0;
                    }else{
                     
                        $("#img-content-section08").removeClass("img-0"+move).addClass("img-0"+(move+1));
                        $(this).fadeIn('fast');
                      
                    }
                    move++;
                    $(this).fadeIn('fast');
                  });
                },3000);
              }


            }

            if (e.keyCode == 38) {


              if (delay) { return};
              delay = true;
              var pos_bu = pos;
              pos--;
              

              if (pos < 0) {
                  pos = 0;
                  delay = false
                  return;
              }

              if (pos > 9) {
                  pos = 9;
                  delay = false
                  return;
              }

              
              if ( $("#section-0"+pos).length == 0) {
                  pos = pos_bu;
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

              if (pos == 8 && !intervalStarted) {
                var move = 1;
                window.setInterval(function () {
                  $("#img-content-section08").fadeOut('fast', function(){
                    if (move == 3) {
                      $("#img-content-section08").removeClass("img-0"+move).addClass("img-01");
                      move = 0;
                    }else{
                     
                        $("#img-content-section08").removeClass("img-0"+move).addClass("img-0"+(move+1));
                        $(this).fadeIn('fast');
                      
                    }
                    move++;
                    $(this).fadeIn('fast');
                  });
                },3000);
              }


            }
        }

        if(e.keyCode == 32){

           e.preventDefault();
          var scrollTop = $(this).scrollTop();
          if ($("section.wion-section-03").length > 0 && scrollTop >= $("section.wion-section-03").offset().top - 50 ) {
            if ($("#section-03").find(".wion-section03").length > 0){
                if ( !$("#phone-section-03").hasClass("phone-data") ) {
                    $("#phone-section-03").removeClass("phone-wifi")
                    $("#phone-section-03").addClass("phone-data")
                    $(".info-slide-a").addClass('hide')
                    $("div[class^=info-slide-b-]").removeClass('hide')
                }
            }
          }
        }

        
        if(e.keyCode == 39){
          console.log("right");
          var scrollTop = $(this).scrollTop();
          if ($("section.blueon-section03").length > 0 && scrollTop >= $("section.blueon-section03").offset().top - 50 ) {
            var data = $(".numbers span.active").data("change");
            if (data == 3) {
              data = 1;
            }else{
              data ++;
            }


            $(".right-blueon.section-03 .numbers span").removeClass("active");
            $(".numbers span[data-change='"+data+"']").addClass('active');
            if (data == 1) {
                $(".right-blueon.section-03 .person-text").html('El bluetooth está encendido y tiene la aplicación de la cadena de tiendas instalada en su celular.');
              }
            if (data == 2) {
              $(".right-blueon.section-03 .person-text").html('Le llega una notificación al celular de promociones disponibles en la tienda que le interesa.');
            }
            if (data == 3) {
              $(".right-blueon.section-03 .person-text").html('Paga, sale satisfecha, califica la experiencia que tuvo, un cuarto dispositivo la reconoce y se despide agradeciéndole por la visita.');
            }

            if (!$("div.change"+data).hasClass('visible')) {
              $("div.change.visible").fadeOut('fast').removeClass('visible');
              $("div.change"+data).fadeIn('fast').addClass('visible');
            }

          }
          if ($("section.wion-section06").length > 0 && scrollTop >= $("section.wion-section06").offset().top - 50){
            var index = parseInt($(".red")[0].id.slice(-2))
            index += 1
            if (index > 3)
              index = 1
            $("#img-content-section06").removeClass();
            $("#img-content-section06").addClass("img-0"+index)
            $("#img-content-section06").addClass("img-0"+index)
            $(".description-right").children().removeClass('hide')
            $(".description-right").children().addClass('hide')
            $(".info-0"+index).removeClass('hide')
            $(".buttons-center").children().removeClass('red')
            $(".buttons-center").children().addClass('gray')
            $("#box-content-section06-0"+index).removeClass('gray')
            $("#box-content-section06-0"+index).addClass('red')
          }
          
        }

        if(e.keyCode == 37){
          var scrollTop = $(this).scrollTop();
          if ($("section.blueon-section03").length > 0 && scrollTop >= $("section.blueon-section03").offset().top - 50 ) {
            var data = $(".numbers span.active").data("change");
            if (data == 1) {
              data = 3;
            }else{
              data --;
            }


            $(".right-blueon.section-03 .numbers span").removeClass("active");
            $(".numbers span[data-change='"+data+"']").addClass('active');
            if (data == 1) {
                $(".right-blueon.section-03 .person-text").html('El bluetooth está encendido y tiene la aplicación de la cadena de tiendas instalada en su celular.');
              }
            if (data == 2) {
              $(".right-blueon.section-03 .person-text").html('Le llega una notificación al celular de promociones disponibles en la tienda que le interesa.');
            }
            if (data == 3) {
              $(".right-blueon.section-03 .person-text").html('Paga, sale satisfecha, califica la experiencia que tuvo, un cuarto dispositivo la reconoce y se despide agradeciéndole por la visita.');
            }

            if (!$("div.change"+data).hasClass('visible')) {
              $("div.change.visible").fadeOut('fast').removeClass('visible');
              $("div.change"+data).fadeIn('fast').addClass('visible');
            }

          }
          if ($("section.wion-section06").length > 0 && scrollTop >= $("section.wion-section06").offset().top - 50){
            var index = parseInt($(".red")[0].id.slice(-2))
            index -= 1
            if (index < 1)
              index = 3
            $("#img-content-section06").removeClass();
            $("#img-content-section06").addClass("img-0"+index)
            $("#img-content-section06").addClass("img-0"+index)
            $(".description-right").children().removeClass('hide')
            $(".description-right").children().addClass('hide')
            $(".info-0"+index).removeClass('hide')
            $(".buttons-center").children().removeClass('red')
            $(".buttons-center").children().addClass('gray')
            $("#box-content-section06-0"+index).removeClass('gray')
            $("#box-content-section06-0"+index).addClass('red')
          }

        }
      
    }, false);

    $("body").on("mouseover",".right-blueon.section-03 .numbers span", function(){
      var change = $(this).data('change');
      $(".right-blueon.section-03 .numbers span").removeClass("active");
      $(this).addClass('active');
      if (change == 1) {
          $(".right-blueon.section-03 .person-text").html('El bluetooth está encendido y tiene la aplicación de la cadena de tiendas instalada en su celular.');
        }
      if (change == 2) {
        $(".right-blueon.section-03 .person-text").html('Le llega una notificación al celular de promociones disponibles en la tienda que le interesa.');
      }
      if (change == 3) {
        $(".right-blueon.section-03 .person-text").html('Paga, sale satisfecha, califica la experiencia que tuvo, un cuarto dispositivo la reconoce y se despide agradeciéndole por la visita.');
      }

      if (!$("div.change"+change).hasClass('visible')) {
        $("div.change.visible").fadeOut('fast').removeClass('visible');
        $("div.change"+change).fadeIn('fast').addClass('visible');
      }

    });

    $("body").on("mouseover",".pointer.right-p-03", function(){
      $(".right-blueon.section-03 .person-text").fadeToggle('fast');
    });
    $("body").on("mouseleave",".pointer.right-p-03", function(event){
      $(".right-blueon.section-03 .person-text").fadeToggle('fast');
    });

    $("body").on("mouseover",".section05 .romb", function(){
      $(".section05 .romb").css({'opacity':0.5});
      $(this).css({'opacity':1});
      var data_secslide = $(this).data('secslide');
      $(".section05 .section5"+data_secslide).fadeIn('fast');
    })

    $("body").on("mouseleave",".section05 .romb", function(){
      $(".section05 .romb").css({'opacity':1});
      var data_secslide = $(this).data('secslide');
      $(".section05 .section5"+data_secslide).fadeOut('fast');
    })

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

