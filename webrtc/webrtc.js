'use strict';
(function(){

function on_hash() {
	console.log('on_hash');
}

function on_dom() {
	console.log('on_dom');
	const video = document.querySelector('#vd');
	const btn_play = document.querySelector('#Play');
	btn_play.addEventListener('click', play);
	function play(e) {
		navigator.getUserMedia(
			{
				video: true,
				audio: true,
			},
			function(s) {
				video.srcObject = s;
				console.log(s);
			},
			function(e) {
				console.log(e);
			},
		);
	}

}

[
	['DOMContentLoaded', on_dom],
	['hashchange', on_hash],
].forEach(function(i) {
	window.addEventListener(i[0], i[1]);
});

navigator.getUserMedia = ( navigator.getUserMedia ||
	navigator.webkitGetUserMedia ||
	navigator.mozGetUserMedia ||
	navigator.msGetUserMedia);

console.log(navigator.getUserMedia);

})();