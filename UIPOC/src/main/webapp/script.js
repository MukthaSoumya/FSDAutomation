function onSubmitClick() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	alert("UserName :: "+username);
	alert("Password :: "+password);
     window.location.href = 'Registration.html';
}