const mainEl = document.getElementById("main1");

mainEl.addEventListener("click", (event) => {
	event.target.style.backgroundColor = 'black';
	// As you can see in the section below that you can distinguis between the event origin vs current event handler.
	// Helpfull for code reduction. 
	console.log("Tag : " + event.target.tagName);
	console.log("Current Tag : " + event.currentTarget.tagName);
});


//mainEl.addEventListener("click", eventhandler, {capture: true});
//This reverses the propogation
