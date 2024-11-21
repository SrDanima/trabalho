function validateLogin() {
    const correctUsername = "admin";
    const correctPassword = "1234";
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === correctUsername && password === correctPassword) {
        alert("Login bem-sucedido!");
        window.location.href = "menu.html";
    } else {
        errorMessage.textContent = "Nome de usuário ou senha incorretos!";
    }
}