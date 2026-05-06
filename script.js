const nome = document.getElementById("nome");
const email = document.getElementById("email");

const msgNome = document.getElementById("msgNome");
const msgEmail = document.getElementById("msgEmail");

const form = document.getElementById("form");

// regex email
const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// validar nome
function validarNome() {
if (nome.value.trim().length < 3) {
nome.classList.add("errorInput");
nome.classList.remove("success");

msgNome.style.display = "block";
msgNome.className = "message error";
msgNome.innerText = "Nome deve ter no mínimo 3 letras";

return false;
} else {
nome.classList.remove("errorInput");
nome.classList.add("success");

msgNome.style.display = "block";
msgNome.className = "message successText";
msgNome.innerText = "Nome válido";

return true;
}
}

// validar email
function validarEmail() {
if (!emailValido.test(email.value)) {
email.classList.add("errorInput");
email.classList.remove("success");

msgEmail.style.display = "block";
msgEmail.className = "message error";
msgEmail.innerText = "E-mail inválido";

return false;
} else {
email.classList.remove("errorInput");
email.classList.add("success");

msgEmail.style.display = "block";
msgEmail.className = "message successText";
msgEmail.innerText = "E-mail válido";

return true;
}
}

// validação em tempo real
nome.addEventListener("input", validarNome);
email.addEventListener("input", validarEmail);

// submit
form.addEventListener("submit", function(e) {
e.preventDefault();

const nomeOk = validarNome();
const emailOk = validarEmail();

if (nomeOk && emailOk) {
alert("Enviado com sucesso 🚀");

form.reset();

msgNome.style.display = "none";
msgEmail.style.display = "none";

nome.classList.remove("success");
email.classList.remove("success");
}
});
