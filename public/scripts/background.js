var counter = 0;
function changeBG(){
    var imgs = [
        // "url(https://pakistantimes.org/wp-content/uploads/2019/04/TOP-5-BEACHES-IN-THAILAND.jpg)",
        // "url(https://international.la-croix.com/uploads/news/2018/10/1538483974.jpg)",
        // "url(https://www.planetware.com/photos-large/THA/thailand-bangkok-pattaya-beach.jpg)",
        // "url(https://live.staticflickr.com/7426/13999523488_be0b782267_b.jpg)",
        // "url(https://cdn.tourradar.com/s3/content-pages/30/1024x768/TAjhci.jpg)",
        // "url(https://3hack.net/wp-content/uploads/2015/08/travel-in-laos.jpg)",
        // "url(https://images.thrillophilia.com/image/upload/s--vJKX-uCh--/c_fill,f_auto,fl_strip_profile,h_600,q_auto,w_975/v1/images/photos/000/126/922/original/1541415069_shutterstock_725753710.jpg.jpg)"
      ]
    
    if(counter === imgs.length) counter = 0;
    $("body").css("background-image", imgs[counter]);

    counter++;
}
  
  setInterval(changeBG, 4000);