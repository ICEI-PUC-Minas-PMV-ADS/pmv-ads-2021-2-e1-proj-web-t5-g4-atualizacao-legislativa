import users from '../data/usuarios.js'

//Metodo quer irá fazer login
window.Login = (login, password) => {
    //verifica se existe dados
    if (login != "" && password != "") {
        //busca o usuario no array de usuarios 
        let userObjeto ={}
        users.forEach(item =>{
            if(item.nome === login && item.senha === password){
            userObjeto.nome= item.nome;
            userObjeto.senha = item.senha;
        }});
        //Olha se existe usuário para logar
        if (userObjeto) {
            document.getElementById('register-alert').classList.remove('d-flex')
            document.getElementById('register-alert').classList.add('d-none')
            document.getElementById('alert').classList.remove('justify-content-between')
            document.getElementById('alert').classList.add('justify-content-end')
            //remove o botão do header
            document.getElementById('acount-btn').classList.remove('d-flex')
            document.getElementById('acount-btn').classList.add('d-none')

            document.getElementById('exampleModal').classList.remove('show')
            //Navega para home autenticada
            toHome();
            activeLink('home');
            //Adiciona o botão com o nome do usuário 
            document.getElementById('acount-container').innerHTML = `<button class="btn btn-primary border-white"> <i class="fa-solid fa-circle-user h3 text-white hoverBtn"></i>${userObjeto.nome.substr(0, 6)}</button>`
        } else {
            alert('Deu erro na Autenticação')
        }
    } else {
        if (login === "") {
            document.getElementById('login').value = "Digite seu login"
            document.getElementById('login').style.color = "red"
        } else {
            document.getElementById('senha').value = "Digite sua Senha"
            document.getElementById('senha').style.color = "red"

        }

    }
}
