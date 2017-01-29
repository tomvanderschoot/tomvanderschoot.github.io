
function ajaxSubmitCommentForm(){
	"use strict";

	var options = {
		success: function(){
			$j("#commentform textarea").val("");
			$j("#commentform .success p").text("Reactie is verzonden!");
		}
	};

	$j('#commentform').submit(function() {
		$j(this).find('input[type="submit"]').next('.success').remove();
		$j(this).find('input[type="submit"]').after('<div class="success"><p></p></div>');
		$j(this).ajaxSubmit(options);
		return false;
	});
}
var header_height = 100;
var min_header_height_scroll = 57;
var min_header_height_fixed_hidden = 50;
var min_header_height_sticky = 60;
var scroll_amount_for_sticky = 85;
var content_line_height = 60;
var header_bottom_border_weight = 1;
var scroll_amount_for_fixed_hiding = 200;
var paspartu_width_init = 0.02;
var add_for_admin_bar = 0;
	header_height = 250;
	min_header_height_sticky = 90;
	scroll_amount_for_sticky = 5000;
    paspartu_width_init = 0.01;

var logo_height = 130; // proya logo height
var logo_width = 280; // proya logo width
	logo_height = 134;
	logo_width = 120;

	header_top_height = 0;
var loading_text;
loading_text = 'Nieuwe berichten laden...';
var finished_text;
finished_text = 'Geen berichten meer';

var piechartcolor;
piechartcolor	= "#1abc9c";
	piechartcolor = "#acbdc7";

var geocoder;
var map;

function initialize() {
	"use strict";
  // Create an array of styles.
  var mapStyles = [
    {
      stylers: [
				{hue: "#85a0b2" },
				{saturation: "-60"},
				{lightness: "-30"},
				{gamma: 1.51}
			]
    }
  ];
  var qodeMapType = new google.maps.StyledMapType(mapStyles,
    {name: "Qode Map"});

	geocoder = new google.maps.Geocoder();
	var latlng = new google.maps.LatLng(-34.397, 150.644);
	var myOptions = {
		zoom: 14,
				scrollwheel: false,
				center: latlng,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL,
			position: google.maps.ControlPosition.RIGHT_CENTER
		},
		scaleControl: false,
			scaleControlOptions: {
			position: google.maps.ControlPosition.LEFT_CENTER
		},
		streetViewControl: false,
			streetViewControlOptions: {
			position: google.maps.ControlPosition.LEFT_CENTER
		},
		panControl: false,
		panControlOptions: {
			position: google.maps.ControlPosition.LEFT_CENTER
		},
		mapTypeControl: false,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'qode_style'],
			style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
			position: google.maps.ControlPosition.LEFT_CENTER
		},
				mapTypeId: 'qode_style'
			};
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	  map.mapTypes.set('qode_style', qodeMapType);
	}

function codeAddress(data) {
	"use strict";

	if (data === '')
		return;

	var contentString = '<div id="content">'+
	'<div id="siteNotice">'+
	'</div>'+
	'<div id="bodyContent">'+
	'<p>'+data+'</p>'+
	'</div>'+
	'</div>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});
	geocoder.geocode( { 'address': data}, function(results, status) {
		if (status === google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
				map: map,
				position: results[0].geometry.location,
								icon:  '',
								title: data['store_title']
			});
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			});
			//infowindow.open(map,marker);
		}
	});
}

var $j = jQuery.noConflict();

$j(document).ready(function() {
	"use strict";

	showContactMap();
});

function showContactMap() {
	"use strict";

	if($j("#map_canvas").length > 0){
		initialize();
		codeAddress("");
		codeAddress("");
		codeAddress("");
		codeAddress("");
		codeAddress("Kinesist, Frankrijklei 104, 2000 Antwerpen");
	}
}

var no_ajax_pages = [];
var qode_root = 'http://demo.fluxwebdesign.be/demo5/';
var theme_root = 'http://demo.fluxwebdesign.be/demo5/wp-content/themes/flux/';
var header_style_admin = "";
if(typeof no_ajax_obj !== 'undefined') {
	no_ajax_pages = no_ajax_obj.no_ajax_pages;
}
