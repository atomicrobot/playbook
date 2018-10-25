// CONTACT MAP

var PageContact = function() {

	var _init = function() {

		var mapbg = new GMaps({
			div: '#gmapbg',
			lat: 39.3330433,
			lng: -84.3164957,
			scrollwheel: false,
		});


		mapbg.addMarker({
			lat: 39.3330392,
			lng: -84.314307,
			title: 'ATOMIC ROBOT HQ',
			infoWindow: {
				content: '<h3>ATOMIC ROBOT HQ</h3><p>5155 Financial Way, Mason, OH 45040, US</p>'
			}
		});
	}

    return {
        //main function to initiate the module
        init: function() {

            _init();

        }

    };
}();

$(document).ready(function() {
    PageContact.init();
});