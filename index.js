
$(document).ready(function(){
  
    $('.popup-btn1').on('click', function(){
        console.log("clicked")
      $('.video-popup1').fadeIn('slow');
      return false;
    });
    
    $('.popup-bg1').on('click', function(){
      $('.video-popup1').slideUp('slow');
      return false;
    });

    $('.popup-btn2').on('click', function(){
        console.log("clicked")
      $('.video-popup2').fadeIn('slow');
      return false;
    });
    
    $('.popup-bg2').on('click', function(){
      $('.video-popup2').slideUp('slow');
      return false;
    });

    $('.popup-btn3').on('click', function(){
        console.log("clicked")
      $('.video-popup3').fadeIn('slow');
      return false;
    });
    
    $('.popup-bg3').on('click', function(){
      $('.video-popup3').slideUp('slow');
      return false;
    });
    
  });