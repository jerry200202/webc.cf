'use strict';
(function(){

function on_hash() {
	console.log('on_hash');
}

function on_dom() {

	const msg = document.querySelector('pre#msg');
	

	const srvs = {
		'iceServers': [
			{
				'url': 'stun:turn.mywebrtc.com'
			},
			{
				'url': 'turn:turn.mywebrtc.com',
				'credential': 'siEFid93lsd1nF129C4o',
				'username': 'webrtcuser'
			}
		]
	};

	const pc = new RTCPeerConnection(srvs);
	pc.onicecandidate  = function(ev) {
		msg.innerText += `icecandidate ${ev}\n`;
	};
	pc.createOffer(
		function(desc) {
			msg.innerText += `createOffer ${desc}\n`;
			msg.innerText += `createOffer ${JSON.stringify(desc.toJSON())}\n`;
		},
		function(err) {
			msg.innerText += 'createOffer Error\n';
		}
	);
	msg.innerText += 'on_dom done\n';
}

[
	['DOMContentLoaded', on_dom],
	['hashchange', on_hash],
].forEach(function(i) {
	window.addEventListener(i[0], i[1]);
});

})();