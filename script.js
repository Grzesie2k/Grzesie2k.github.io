"use strict";

var user = {
	setAvatar: function (avatar) {
		document.querySelector(".avatar").src = avatar;
	},
	setName: function (name) {
		document.title = name;
		document.querySelector('.name').innerText = name;
	},
	setLocation: function (location) {
		document.querySelector(".location").innerText = location;
	},
	setEmail: function (email) {
		var emailLink = document.querySelector(".section .email");
		emailLink.href = "mailto:" + email;
	},
	setHireable: function (isHireable) {
		document.querySelector('.hireable').style.display = isHireable ? "inline-block" : "none"
	},
	setJob: function (position, company) {
		var job = position && company ? position + ' in ' + company : position || company;
		document.querySelector('.job').innerText = job;
	}
};

loadApiUser().then(function (apiUser) {
	var section = document.getElementsByClassName('section')[0];
	user.setAvatar(apiUser.avatar_url);
	user.setName(apiUser.name);
	user.setLocation(apiUser.location);
	user.setEmail(apiUser.email);
	user.setHireable(apiUser.hireable);
	user.setJob(apiUser.bio, apiUser.company);
});

function loadApiUser() {
	var headers = new Headers();
	headers.append("Accept", "application/vnd.github.v3+json");
	return fetch('https://api.github.com/users/Grzesie2k', {headers: headers})
		.then(function (response) {
			return response.json();
		});
}
