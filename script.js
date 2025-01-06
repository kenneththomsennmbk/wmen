const myForm = document.getElementById("myForm");
const nombre = document.getElementById("nombre").value;
const surname = document.getElementById("surname").value;
const email = document.getElementById("e").value;
const userObj = {name: `${nombre}`, surname: `${surname}`, email: `${email}`};
 const request = new Request("http://localhost:3000/thank-you.html", { method: "post", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(userObj)});
async function sendData() {
	request;
	try {
		fetch(request, {
			method: "post",
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(userObj)
		});
		console.log(await request);
	} catch(e) {
		console.error(e);
	}
}
	
myForm.addEventListener("submit", (event) => {
	event.preventDefault();
	sendData();
});
