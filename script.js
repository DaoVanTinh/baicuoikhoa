function validateEmail() {
  const emailInput = document.getElementById("emailInput").value;
  const errorMessage = document.getElementById("errorMessage");
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (emailRegex.test(emailInput)) {
    localStorage.setItem("userEmail", emailInput);

    window.location.href = "createpass.html";
  } else {
    errorMessage.innerHTML =
      "Email này không hợp lệ. Hãy đảm bảo rằng email được nhập dưới dạng example@email.com";

    errorMessage.style.display = "flex";
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "13px";
    errorMessage.style.fontWeight = "400";
    errorMessage.style.alignItems = "center";
  }
}

function savePassword() {
  const password = document.getElementById("passwordInput").value;
  const creerrorMessage = document.getElementById("cre__errorMessage");

  if (password.length >= 6) {
    const email = localStorage.getItem("userEmail");
    const user = {
      email: email,
      password: password,
    };
    localStorage.setItem("userAccount", JSON.stringify(user));
    window.location.href = "login.html";
  } else {
    creerrorMessage.innerHTML = "Mật khẩu phải có trên 6 ký tự";

    creerrorMessage.style.display = "flex";
    creerrorMessage.style.color = "red";
    creerrorMessage.style.fontSize = "13px";
    creerrorMessage.style.fontWeight = "400";
    creerrorMessage.style.alignItems = "center";
  }
}

function login() {
  const logerrorMessage = document.getElementById("log__errorMessage");
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const userData = JSON.parse(localStorage.getItem("userAccount"));

  if (userData && userData.email === email && userData.password === password) {
    window.location.href = "index.html";
  } else {
    logerrorMessage.innerHTML =
      "Tài khoản hoặc mật khẩu không chính xác";
    logerrorMessage.style.display = "flex";
    logerrorMessage.style.color = "red";
    logerrorMessage.style.fontSize = "13px";
    logerrorMessage.style.fontWeight = "400";
    logerrorMessage.style.alignItems = "center";
  }
}
