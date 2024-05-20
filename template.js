// ==UserScript==
// @name         Toggle search results
// @namespace    http://tampermonkey.net/
// @version      2024-05-19
// @description  Adds a button that toggles search results in Discord.
// @author       aboyer
// @match        https://discord.com/channels/752553802359505017/752553802359505020
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @grant        none
// @require      https://code.jquery.com/jquery-3.7.1.slim.min.js#sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8=
// @require      file://\\wsl.localhost\Ubuntu\home\aboyer\projects\user-scripts\discord-search-results.js
// ==/UserScript==


(function() {
	'use strict';

	const $$ = window.jQuery.noConflict();

	$$(() => {
		const searchForElement = (selector) => {
			const node = document.querySelector(selector);
		};
		const searchResults =

		console.clear();
		console.log('searchResults2', searchResults);
	});
})();
