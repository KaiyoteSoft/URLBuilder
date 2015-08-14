$(document).ready(function() {
  $('body').keydown(function(e) {
    if (e.keyCode == 13) {
     	generateUrl()
    }
  })
});

function generateUrl() {
	var baseUrl = document.baseUrl.baseType.value;
	var medium = document.medium.mediumType.value;
	var leadSource = document.leadSource.leadSourceType.value;
	var leadSourceDesc = document.leadSourceDesc.leadSourceDescType.value;
	var firstTouch = document.firstTouch.firstTouchType.value;
	var firstTouchDesc = document.firstTouchDesc.firstTouchDescType.value;
	var lastTouch = document.lastTouch.lastTouchType.value;
	var lastTouchDesc = document.lastTouchDesc.lastTouchDescType.value;
	var output = baseUrl + "?medium=" + medium + "&lead_source=" + leadSource +
	"&lead_source_desc=" + leadSourceDesc + "&first_touch=" + firstTouch +
	"&first_touch_desc=" + firstTouchDesc + "&last_touch=" + lastTouch +
	"&last_touch_desc=" + lastTouchDesc;
	$('#outputField').html(output);
}

function fillTouch() {
	document.getElementById('firstTouchType').value = document.getElementById('leadSourceDescType').value;
	document.getElementById('lastTouchType').value = document.getElementById('leadSourceDescType').value;
}

function fillDescription() {
	document.getElementById('lastTouchDescType').value = document.getElementById('firstTouchDescType').value;
}