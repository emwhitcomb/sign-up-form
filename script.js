const create = document.getElementById("create");
const password = document.getElementById("password");
const confirmPW = document.getElementById("confirm-pw");
const entry = document.getElementById("entry");
const message = document.getElementById("error-msg");

create.onclick = () => checkInputs();

function checkInputs() {
    if (password.checkValidity() && confirmPW.checkValidity()) {
        if (password != confirmPW) {
            message.innerHTML = "Passwords do not match.";
        }
        else {
            document.entry.reset();
        }
    }
}