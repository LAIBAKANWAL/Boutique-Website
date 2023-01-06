// products details

$(document).ready(function(){

    $('.small-images img').click(function(){
  var image = $(this).attr('src');
  $('.img-zoom-container img').attr('src' , image);
    });
  
    $('.small-images1 img').click(function(){
      var image = $(this).attr('src');
      $('.img-zoom-container img').attr('src' , image);
        });


     $('.small-images2 img').click(function(){
        var image = $(this).attr('src');
        $('.img-zoom-container img').attr('src' , image);
          });

          $('.small-images3 img').click(function(){
            var image = $(this).attr('src');
            $('.img-zoom-container img').attr('src' , image);
              });


              $('.small-images4 img').click(function(){
                var image = $(this).attr('src');
                $('.img-zoom-container img').attr('src' , image);
                  });

                  $('.small-images5 img').click(function(){
                    var image = $(this).attr('src');
                    $('.img-zoom-container img').attr('src' , image);
                      });


  $('#myimage').imagezoomsl({
    zoomrange:[3,1],
  
  });
  
});
  
  
  