const sel1 = document.getElementById("bd1");
const image_list=["image-1.jpg", "image-2.jpg", "image-3.jpg", "image-4.jpg", "image-0.jpg"];

sel1.addEventListener("click", (event) => {
	console.log(event.target.id);
	let id = event.target.id.split("_")[2];
	console.log(id);
	document.getElementById("display_image").innerHTML = '';
	let display_image_tag = document.createElement("img");
	display_image_tag.setAttribute("src", "./images/image-"+id+".jpg");
	display_image_tag.setAttribute("height", "500px");
	display_image_tag.setAttribute("width", "500px");
	document.getElementById("display_image").appendChild(display_image_tag);
});

window.onload = function() {
	let display_image_tag = document.createElement("img");
	display_image_tag.setAttribute("src", "./images/image-1.jpg");
	display_image_tag.setAttribute("height", "500px");
	display_image_tag.setAttribute("width", "500px");
	document.getElementById("display_image").appendChild(display_image_tag);

	for ( var i=0; i<image_list.length; i++){
		let single_image = document.createElement("img");
		let suffix = i + "";
		single_image.setAttribute("src", "./images/image-"+suffix+".jpg");
		single_image.setAttribute("height", "40px");
		single_image.setAttribute("width", "40px");
		single_image.setAttribute("id", "image_id_"+suffix);
		document.getElementById("display_inventory").appendChild(single_image);
	}
}
