'use strict';

function convertToHours(movieLength) {
	var hours = Math.floor(movieLength / 60);
	var minutes = movieLength % 60;
	return hours + 'h ' + minutes + 'm';
}

var infobarElm = document.querySelector('.infobar time');
var specsElm = document.querySelector('.txt-block time');

var lengthMinutesInt = parseInt(infobarElm.innerHTML);
var lengthHours = convertToHours(lengthMinutesInt);

infobarElm.innerHTML = lengthHours;
specsElm.innerHTML = lengthHours + ' (' + lengthMinutesInt + ' min)';
