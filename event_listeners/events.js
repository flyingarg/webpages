const btn = document.getElementById("btn");
const ta = document.getElementById("ta1");
const youPressed = document.getElementById("youPressed");

const abortController = new AbortController();

let attempts = 10;

function changeColorOfButtonText(){
	btn.setAttribute("color", "red");
	
	let variousButtonNames = ["blue", "red", "green"];
	let randomIndex = Math.floor(Math.random()*(variousButtonNames.length));
	let colorRand = variousButtonNames[randomIndex];
	btn.style = `color: ${colorRand}`;
	attempts--;
	if(attempts < 0 ){
		//btn.removeEventListener("click", changeColorOfButtonText);
		abortController.abort();
	}
}

function changeText(){
	btn.setAttribute("color", "red");
	
	let variousButtonNames = ["Not a button", "Is a button", "Is an ant", "Is void", "Is missing", "Where Wolf", "Vanadium"];
	let randomIndex = Math.floor(Math.random()*(variousButtonNames.length-1));
	btn.textContent = variousButtonNames[randomIndex];
	attempts--;
	if(attempts < 0 ){
		btn.removeEventListener("click", changeColorOfButtonText);
		//abortController.abort(); //Does not seem to work !!
	}
}

function testEventObject(event){
	//e is the event object.
	event.target.style.backgroundColor = "black";
}

function keyPress(event){
	youPressed.textContent = `You Pressed "${event.key}"`;
}
	

btn.addEventListener("click", changeColorOfButtonText, { singal: abortController.signal});
btn.addEventListener("click", changeText);
btn.addEventListener("click", testEventObject);
ta1.addEventListener("keydown", keyPress);


