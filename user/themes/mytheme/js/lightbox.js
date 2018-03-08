//<div class="lightbox">
//      <div class="close">
//          <div class="line1"></div>
//          <div class="line2"></div>
//      </div>
//      <div class="arrow-left">
//          <div class="line1"></div>
//          <div class="line2"></div>
//      </div>
//      <div class="arrow-right">
//          <div class="line1"></div>
//          <div class="line2"></div>
//      </div>
//      <div class="lightbox-content">
//          <img src="" alt="">
//      </div>
//  </div>

$(function () {

    console.log('x');
    if ($('div').hasClass('lightbox')) {
    console.log('x2');

        var lightboxAmount = 0;
        var lightboxNumber = 0;

        // Iteracja po zdjeciach do lighboxa
//        $(".portfolio-project").each(function () {
//            lightboxAmount++;
//        })
        $(document).on('click',".lightbox-show", function (e) {
            e.preventDefault();
            // iloscTruck = $(".galeria-content img").length;
//            lightboxNumber = $(this).data("number");
            var imgSrc = $(this).parent().parent().parent().find('img').attr("src");
            $(".lightbox-content img").attr("src", imgSrc);
            $(".lightbox").fadeIn();
//            console.log("amount: " + lightboxAmount);
//            console.log("number: " + lightboxNumber);
        });
        $(".lightbox .close").click(function () {
            $(".lightbox").fadeOut();
        });
//        $(".lightbox .arrow-left").click(function () {
//            if (lightboxNumber == 1) {
//                lightboxNumber = lightboxAmount;
//            } else {
//                lightboxNumber--;
//            }
//            var imgSrc = $(".lightbox-el[data-number=" + lightboxNumber + "] img").data("src");
//            //$(".lightbox img").fadeOut();
//            $(".lightbox img").attr("src", imgSrc);
//            $(".lightbox img").fadeIn();
//        });
//        $(".lightbox .arrow-right").click(function () {
//            if (lightboxNumber == lightboxAmount) {
//                lightboxNumber = 1;
//            } else {
//                lightboxNumber++;
//            }
//            var imgSrc = $(".lightbox-el[data-number=" + lightboxNumber + "] img").data("src");
//            //$(".lightbox img").fadeOut();
//            $(".lightbox img").attr("src", imgSrc);
//            $(".lightbox img").fadeIn();
//        });


    }


});
