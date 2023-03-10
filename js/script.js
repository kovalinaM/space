$(document).ready(function(){
    $('.menu__burger').click(function(event){
        $('.menu__burger, .header__menu').toggleClass('active');
        $('body'),toggleClass('lock');
    });

	$('.sliderbig').slick({
        arrows:false,
        fade:true,
        asNavFor:".slider"
    });
	$('.slider').slick({
        arrows:true,
        slidesToShow: 5,
        centerMode: true,
        asNavFor:".sliderbig",
        focusOnSelect: true,
        responsive:[
            {
                breakpoint: 1100,
                settings:{
                    slidesToShow: 4,
                    arrows: false
                }
            },
            {
                breakpoint: 800,
                settings:{
                    slidesToShow: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 500,
                settings:{
                    slidesToShow: 2,
                    arrows: false
                }
            }
        ]
    });
});

