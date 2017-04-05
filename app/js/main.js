$( document ).ready(function() {
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

    $("body").on("click",".indicator div.step", function(){
    	var section = $(this).data('section');
    	var number = $(this).data('number');
    	var ball_top = (116*number) - 34;
    	var a = $("#"+section).offset().top;
    	$("body, html").animate({ scrollTop: a+"px" },{
                    duration: 'slow',
                    easing: 'swing'
                });
    	// $(".indicator .selected").css({'top':ball_top+'px'})
    })

    $("body").on("click",".discover", function(){
    	var ball_top = 82;
    	var a = $("#section-01").offset().top;
    	$("body, html").animate({ scrollTop: a+"px" },{
                    duration: 'slow',
                    easing: 'swing'
                });
    	// $(".indicator .selected").css({'top':ball_top+'px'})
    })

    $(this).scroll(function(e) {
			var scrollTop = $(this).scrollTop();
			if (scrollTop > 300) {
				if ($("ul.menu").hasClass('displayed')) {
					$("li.menu-el").fadeOut('fast', function(){
						$("ul.menu").removeClass('displayed');
					});
					$("img.head-logo").fadeIn('fast');
				}
			}else{
				if (!$("ul.menu").hasClass('displayed')) {
					$("li.menu-el").fadeIn('fast', function(){
						$("ul.menu").addClass('displayed');
					});
					$("img.head-logo").fadeOut('fast');
				}
			}

			if (scrollTop >= 210) {
				$(".indicator").css({'position':'fixed','top':'150px'})
			}else{
				$(".indicator").css({'position':'absolute','top':'50%'})
			}


		});

		
});

		$(window).bind("scroll", function(event) {
        $("section:in-viewport").each(function() {
          var number = $(this).data('number');
    			var ball_top = (116*number) - 34;
    			$(".indicator .selected").css({'top':ball_top+'px'})
        });      
    });

