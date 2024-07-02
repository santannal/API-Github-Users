function search() {
    var username = document.getElementById("inputUserName").value;
    var url = `https://api.github.com/users/${username}`;

    $.getJSON(url, (user) => {

        document.getElementById("name").innerHTML = user.name;
        document.getElementById("url").innerHTML = user.html_url;
        document.getElementById("company").innerHTML = user.company;

        document.getElementById("userimg").innerHTML =

            `
                <img src="${user.avatar_url}" alt="Imagem do usuário" width="220"
                height="220" class="rounded shadow">
            `;

    });

}