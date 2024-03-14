var yt = [
    'p5pnAoNQs3E',
    'gczfSHkQdME',
    '7f4Vq_SS13o',
    '8Spt-ox16kc',
    'MluQlXiEwe4'
];

var gotop = true,
    winH = $(window).height(),
    bodyH,
    storyTop,
    characterTop;


$(window).on('load',function(){
    storyTop = $('.story').offset().top;
    characterTop = $('.character').offset().top;
    bodyH = $('body').height();

    //console.log(winH+','+storyTop+','+characterTop+','+bodyH); 

    loading();     
       

    $('.photo_pic').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        //asNavFor: '.photo_btn',
        prevArrow: $('.photo_prev'),
		nextArrow: $('.photo_next'),
        dots: true,
        fade: true
    });    
    /*
    $('.photo_btn').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        centerMode: true,
        prevArrow: $('.photo_prev'),
		nextArrow: $('.photo_next'),
        //dots:true,
        infinite:true,
        centerPadding: '0px',
        //padding: '20px',
        asNavFor: '.photo_pic'
    });
    */

    $('.pv_btn').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        centerMode: true,
        prevArrow: $('.pv_prev'),
		nextArrow: $('.pv_next'),
        //dots:true,
        infinite:true,
        centerPadding: '0',
        //asNavFor: '.photo_pic'
    });
            
});

$(window).scroll(function(){
    winScroll = $(document).scrollTop();
    //console.log(winScroll);
    if(winScroll>storyTop-winH/3){
        $('.story .von,.story .main,.story .ralph').addClass('active');
    }else{
        //$('.story .von').removeClass('active');
    };

    if(winScroll>characterTop-winH/2){
        $('.character .inner').addClass('active');
    }else{        
        $('.character .inner').removeClass('active');
    }

    if(winScroll>bodyH-winH-1){
        $('.social').addClass('active');
    }
})

$(document).ready(function(){
    for(i=1;i<=7;i++){
        $('.story .bg').append('<div class="m'+i+'"><img src="img/story_bg_m'+i+'.png"></div>');
    }

    var cha_index = 1;

    $('.top .main').on('webkitTransitionEnd otransitionend msTransitionEnd transitionend',function(){
        $('.logo').addClass('active');
    });

    //character change
    $('.character .list li').hover(function(){
        if(cha_index!=$(this).index()+1){
            cha_index = $(this).index()+1;
            console.log(cha_index);
            $('.character .list li').removeClass('active');
            $(this).addClass('active');
            $('.character .dtl img').attr('src','img/character_dtl_'+cha_index+'.png');
        }        
    },function(){
        //console.log('out');
    });

    // $('.character .pic').on('webkitAnimationEnd oanimationend msAnimationEnd animationend',function(){
    //     $('.character .pic').removeClass('active');
    // });


    //pv yt change
    var yt_index,
        yt_length = yt.length;

    for(i=0;i<yt_length;i++){
        $('.pv_btn').append('<div><img src="img/pv_list_'+(i+1)+'.jpg"><img src="img/shadow.png"></div>');
    }
    
    $('.pv_video').empty().append('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+yt[0]+'?rel=0&amp;showinfo=0&autoplay=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')
    $('.pv_btn>div').click(function(){
        if(yt_length>3){
            yt_index = ($(this).index()+1)%yt_length;
            console.log(yt_index);
        }else{
            yt_index = $(this).index();
        }
        $('.pv_video').empty().append('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+yt[yt_index]+'?rel=0&amp;showinfo=0&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')
    });


    //social
    $('.social .fb').click(function(){
        window.open('https://www.facebook.com/disneymoviesTaiwan/','_blank');
    });
    $('.social .yt').click(function(){
        window.open('https://www.youtube.com/user/disneymoviestw','_blank');
    });

});



function loading() {
        console.log(gotop);
        $('html,body').animate({
            'scrollTop':0
        },1,function(){
            $('.loading').fadeOut(300,function(){
                $('.loading').remove();
            });
            $('.kv .mask').addClass('play'); 
    
            setTimeout(function(){
                $('.kv .logo').fadeIn(0).children().addClass('bounceIn');
            },1800);
        });
}

function character() {
    if(!$('.character .bg').hasClass('active')){
        $('.character .bg').addClass('active');
        setTimeout(function(){
            $('.character .btn,.character .dtl,.character .pic').fadeIn(500);
        },500);
    }
    
}