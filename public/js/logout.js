const logout = async function () {
	const response = await fetch("/api/user/logout", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
	});

	if (response.ok) {
		document.location.replace("/");
	} else {
		alert("Failed to log out");
	}
};
var idleTime = 0;
$(document).ready(function () {
	// Increment the idle time counter every minute.
	var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

	// Zero the idle timer on mouse movement.
	$(this).mousemove(function (e) {
		idleTime = 0;
	});
	$(this).keypress(function (e) {
		idleTime = 0;
	});
});

function timerIncrement() {
	idleTime = idleTime + 1;
	if (idleTime > 10) {
		logout(); // 20 minutes
		window.location.reload();
	}
}

document.querySelector("#logout-link").addEventListener("click", logout);
