function getCurrentActiveTabs() {
	return new Promise(
		( resolve, reject ) => {
			chrome.tabs.query( { active: true, currentWindow: true },
				( tabs ) => resolve( tabs )
			);
		}
	);
}

export {
	getCurrentActiveTabs
};
