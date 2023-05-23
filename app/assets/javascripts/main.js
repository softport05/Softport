var onepagepro_script_core = {
    "home_url": "index.html\/"
};
var gdlr_core_pbf = {
    "admin": "",
    "video": {
        "width": "640",
        "height": "360"
    },
    "ajax_url": "",
    "ilightbox_skin": "dark"
};
/*<![CDATA[*/
var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
var htmlDivCss = "";
if (htmlDiv) {
  htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
  var htmlDiv = document.createElement("div");
  htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
  document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
} /*]]>*/
/*<![CDATA[*/
var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
var htmlDivCss = "";
if (htmlDiv) {
  htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
  var htmlDiv = document.createElement("div");
  htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
  document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
} /*]]>*/
/*<![CDATA[*/

var revapi1, tpj = jQuery;
tpj(document).ready(function() {
  if (tpj("#rev_slider_1_1").revolution == undefined) {
    revslider_showDoubleJqueryError("#rev_slider_1_1");
  } else {
    revapi1 = tpj("#rev_slider_1_1").show().revolution({
      sliderType: "standard",
      jsFileLocation: "revslider/public/assets/js/",
      sliderLayout: "auto",
      dottedOverlay: "none",
      delay: 9000,
      navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        mouseScrollReverse: "default",
        onHoverStop: "off",
        bullets: {
          enable: true,
          hide_onmobile: false,
          style: "uranus",
          hide_onleave: false,
          direction: "horizontal",
          h_align: "center",
          v_align: "bottom",
          h_offset: 0,
          v_offset: 35,
          space: 10,
          tmp: '<span class="tp-bullet-inner"></span>'
        }
      },
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: 1280,
      gridheight: 868,
      lazyType: "none",
      parallax: {
        type: "mouse",
        origo: "enterpoint",
        speed: 400,
        speedbg: 0,
        speedls: 0,
        levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
        disable_onmobile: "on"
      },
      shadow: 0,
      spinner: "spinner0",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      disableProgressBar: "on",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: false,
      }
    });
  }
}); /*]]>*/
/*<![CDATA[*/
var htmlDivCss = unescape("%23rev_slider_1_1%20.uranus%20.tp-bullet%7B%0A%20%20border-radius%3A%2050%25%3B%0A%20%20box-shadow%3A%200%200%200%202px%20rgba%28255%2C%20255%2C%20255%2C%200%29%3B%0A%20%20-webkit-transition%3A%20box-shadow%200.3s%20ease%3B%0A%20%20transition%3A%20box-shadow%200.3s%20ease%3B%0A%20%20background%3Atransparent%3B%0A%20%20width%3A15px%3B%0A%20%20height%3A15px%3B%0A%7D%0A%23rev_slider_1_1%20.uranus%20.tp-bullet.selected%2C%0A%23rev_slider_1_1%20.uranus%20.tp-bullet%3Ahover%20%7B%0A%20%20box-shadow%3A%200%200%200%202px%20rgba%28255%2C%20255%2C%20255%2C1%29%3B%0A%20%20border%3Anone%3B%0A%20%20border-radius%3A%2050%25%3B%0A%20%20background%3Atransparent%3B%0A%7D%0A%0A%23rev_slider_1_1%20.uranus%20.tp-bullet-inner%20%7B%0A%20%20-webkit-transition%3A%20background-color%200.3s%20ease%2C%20-webkit-transform%200.3s%20ease%3B%0A%20%20transition%3A%20background-color%200.3s%20ease%2C%20transform%200.3s%20ease%3B%0A%20%20top%3A%200%3B%0A%20%20left%3A%200%3B%0A%20%20width%3A%20100%25%3B%0A%20%20height%3A%20100%25%3B%0A%20%20outline%3A%20none%3B%0A%20%20border-radius%3A%2050%25%3B%0A%20%20background-color%3A%20rgb%28255%2C%20255%2C%20255%29%3B%0A%20%20background-color%3A%20rgba%28255%2C%20255%2C%20255%2C%200.3%29%3B%0A%20%20text-indent%3A%20-999em%3B%0A%20%20cursor%3A%20pointer%3B%0A%20%20position%3A%20absolute%3B%0A%7D%0A%0A%23rev_slider_1_1%20.uranus%20.tp-bullet.selected%20.tp-bullet-inner%2C%0A%23rev_slider_1_1%20.uranus%20.tp-bullet%3Ahover%20.tp-bullet-inner%7B%0A%20transform%3A%20scale%280.4%29%3B%0A%20-webkit-transform%3A%20scale%280.4%29%3B%0A%20background-color%3Argb%28255%2C%20255%2C%20255%29%3B%0A%7D%0A");
var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
if (htmlDiv) {
  htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
  var htmlDiv = document.createElement('div');
  htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
  document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
} /*]]>*/
/*<![CDATA[*/
function revslider_showDoubleJqueryError(sliderID) {
  var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
  errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
  errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
  errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
  errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>";
  jQuery(sliderID).show().html(errorMessage);
        } /*]]>*/