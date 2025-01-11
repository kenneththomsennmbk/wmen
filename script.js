var button = document.getElementById("button-one");	
button.addEventListener("click", getSendData);
function getSendData() {
	if(button.value == "not-submitted") {
var myForm = document.getElementById("myForm");
var nombre = document.getElementById("nombre").value;
var surname = document.getElementById("surname").value;
var email = document.getElementById("e").value;

var userObj = {name: `${nombre}`, surname: `${surname}`, email: `${email}`};

 const request = new Request("http://localhost:3000/thank-you.html", { method: "post", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(userObj)});//used to be userObj as stringify param
button.value = "submitted";
		sendData();
	} else { button.value == "submitted"; 
		return 0;
	}
async function sendData() {
	try {
		fetch("http://localhost:3000/thank-you.html", {
			method: "post",
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(userObj)
		});
	} catch(e) {
		console.error(e);
	}
}
};
myForm.addEventListener("submit", (event) => {
	event.preventDefault();
	getSendData();
});
