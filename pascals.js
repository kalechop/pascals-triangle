
let multiplesOf = 2;

let rows = 0;
let previousRow = [1];

drawAll();

function setMultiplesOf() {
	input = document.getElementById("select").value;
	multiplesOf = parseInt(input);
	drawAll();
}

function drawAll() {
	document.getElementById("container-primary").innerHTML = "";

	rows = 0;
	previousRow = [1];

	drawRow(previousRow);

	for (let i = 1; i <= 31; i++) {
		addRow();
	}
}

function addRow() {
	let newRow = [];

	newRow.push(1);
	for (let i = 0; i < previousRow.length - 1; i++) {
		newRow.push(previousRow[i] + previousRow[i + 1]);
	}
	newRow.push(1);

	rows++;
	previousRow = newRow;
	drawRow(newRow);
}

function drawRow(list) {
	let newRow = document.createElement("div");
	newRow.classList.add("container-secondary");

	for (let i = 0; i < list.length; i++) {
		let item = document.createElement("div");
		item.classList.add("container-tertiary");

		item.innerHTML = list[i];
		if (list[i] % multiplesOf == 0) {
			item.style.backgroundColor = "#dddddd";
		}

		newRow.appendChild(item);
	}

	document.getElementById("container-primary").appendChild(newRow);
}
