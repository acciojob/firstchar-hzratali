function firstChar(text) {
  // your code here
	text.trim();
	return text[0];
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
