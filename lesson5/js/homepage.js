const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.onclick = function () {
	//Prevent user to input empty lines. 
	if(input.value.trim() === "") {
		return;
	}
	let myItem = input.value;
	input.value = "";

	const listItem = document.createElement("li");
	const listText = document.createElement("span");
	const listBtn = document.createElement("button");

	listItem.appendChild(listText);
	listText.textContent = myItem;
	listItem.appendChild(listBtn);
	listBtn.style.color = "red";
	listBtn.style.fontWeight = "bold";
	listBtn.textContent = "X";
	list.appendChild(listItem);

	listBtn.onclick = function (e) {
		list.removeChild(listItem);
	};

	input.focus();
};


