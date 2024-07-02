var userHistory = [];

function search() {
    var username = document.getElementById("inputUserName").value;
    var url = `https://api.github.com/users/${username}`;

    $.getJSON(url, (user) => {
        clearError();
        if (verifyHistory(user)) {
            saveArray(user)
            setHistory(user);
        }
        userFound(user);
    }).fail(() => {
        showError("Não encontrado!!!");
        userFound({});
    });
}

function saveArray(user) {
    userHistory.push(user);
}

function verifyHistory(user) {
    //return history.filter((u) => u.login === user.login).length == 0;
    return userHistory.filter((u) => u.login === user.login).length == 0;
}

function setHistory(user) {
    document.getElementById("history").innerHTML +=
        `<div class="col">
        <img src="${user.avatar_url}" alt="Imagem do usuário" width="110"
            height="110" class="rounded shadow">
        </div>`;
}

function showError(msg) {

    document.getElementById("error").innerHTML =
        `
        <div class="alert alert-danger" role="alert">
            ${msg}
        </div>
        `;
}

function clearError() {
    document.getElementById("error").innerHTML = "";
}


function userFound(user) {
    document.getElementById("name").innerHTML = user.name || "";
    document.getElementById("url").innerHTML = user.html_url || "";
    document.getElementById("company").innerHTML = user.company || "";

    document.getElementById("userimg").innerHTML = user.avatar_url ?

        `
                <img src="${user.avatar_url}" alt="Imagem do usuário" width="220"
                height="220" class="rounded shadow">
        ` :
        "";
}