var i = 0,
    j = 0,
    k = 4,
    l = -2;



jQuery('.category__change').click(function () {
    if (!jQuery(this).hasClass('active')) {
        jQuery('.category__change').removeClass('active');
        jQuery(this).addClass('active');
        var categoryType = jQuery(this).data('type');
        jQuery(".portfolio-container").html('');
        i = 0;
        j = 0;
        k = 4;
        l = -2;
        displayProjects(categoryType);
        jQuery('.ajax-button').fadeIn();
        jQuery('.ajax-button').attr('onclick', 'displayProjects("' + categoryType + '")');
    }
});


function displayProjects(type) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this, type);
        }
    };
    xmlhttp.open("GET", "/user/themes/mytheme/portfolio.xml", true);
    xmlhttp.send();
}




function myFunction(xml, type) {

    if (jQuery('div').hasClass('portfolio-container')) {

        var xmlDoc = xml.responseXML;
        var project = "";
        var amount;
        var x = xmlDoc.getElementsByTagName("PROJECT");
        if (type == 'all') {
            amount = x.length;
            for (i = j; i < k; i++) {
                project += "<div class='portfolio-project col-sm-6'><div class='portfolio-project-pop'><div class='portfolio-project-pop-content'><p>" + x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue + "</p><a target='_blank' href='" + x[i].getElementsByTagName("ONLINE")[0].childNodes[0].nodeValue + "'><i class='fa fa-link'></i></a></div></div><img src='" + x[i].getElementsByTagName("IMG")[0].childNodes[0].nodeValue + "' alt='" + x[i].getElementsByTagName("ALT")[0].childNodes[0].nodeValue + "'></div>"
            }

        } else {
            amount = 0;
            for (i = 0; i < x.length; i++) {
                if (x[i].getElementsByTagName("TYPE")[0].childNodes[0].nodeValue == type) {
                    amount++;
                }
            }
            for (i = j; i < x.length; i++) {
                if (x[i].getElementsByTagName("TYPE")[0].childNodes[0].nodeValue == type && l < 2) {
                    project += "<div class='portfolio-project col-sm-6'><div class='portfolio-project-pop'><div class='portfolio-project-pop-content'><p>" + x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue + "</p><a href='" + x[i].getElementsByTagName("ONLINE")[0].childNodes[0].nodeValue + "'><i class='fa fa-link'></i></a></div></div><img src='" + x[i].getElementsByTagName("IMG")[0].childNodes[0].nodeValue + "' alt='" + x[i].getElementsByTagName("ALT")[0].childNodes[0].nodeValue + "'></div>";
                    l++;
                }
            }
        }
        //    <a class='lightbox-show' href='#'><i class='fa fa-search'></i></a>
        if (l == -2) {

        } else {
            l = 0;
        }


        jQuery(".portfolio-container").append(project);
        if (k == 4) {
            j += 4;
        } else {
            j += 2;
        }
        k += 2;
        if (k >= amount) {
            if (k - 1 > amount) {
                jQuery('.ajax-button').css('display', 'none');
            }
            k = amount;
        }

    }

}
