(() => {
	if (!('jQuery' in window)) {
		throw new Error('o');
	}
	const $$ = window.jQuery as any;

	$$(() => {
		let toggle = false;
		const $btn = $$('<button type="button" id="userscript-btn">Expand results</button>');
		const style = document.createElement('style');
		const css = `
			main[aria-label="discussions (channel)"] {
				flex-grow: 0;
			}
			section[aria-label="Search Results"] {
				resize: horizontal;
			}
		`;

		$btn.css({
			position: 'fixed',
			top: '1rem',
			left: '1rem',
			padding: '.25rem',
			zIndex: 10,
		});
		$btn.on('click', () => {
			toggle = !toggle;
			if (toggle) {
				console.log('on');
			} else {
				console.log('off');
			}
		})
		$$(document.body).append($btn);
		style.id = 'search-results-style';
		style.appendChild(document.createTextNode(css));
		document.head.appendChild(style);
	});
})();
