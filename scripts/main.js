const my Image = document.querySelector("img");

myImage.onclick = () => {
	const mySrc = my Image.getAttribute("src");
	if (mySrc === "imagens/download.png") {
 		myImage.setAttribute("src", "imagens/download2.png");
 	} else {
		myImage.setAttribute("src", "imagens/download.png");
	}
};