const gerarComponenteLogin = () => {

  document.getElementById("template").innerHTML = `
  <h1 class="text-primary fs-1 mt-4 p-2 ">Login</h1>
  <form  id="formulario"  class="container d-flex flex-column p-4" onsubmit="onClickLogin(event)">
    <div class="mb-3">
      <input type="text" class="form-control" id="login" name="login" placeholder="Login"  autocomplete="off">
    </div>
    <div class="mb-3">
      <input type="password" class="form-control" id="senha" name="senha" placeholder="Senha"  autocomplete="off">
    </div>
    <button   class="p-2 mt-4 btn btn-primary">Entre</button>
    <a href="#" onclick="gerarComponenteCadastro()" class="mt-3 text-primary">Cadastre-se</a>
  </form>
`;
};



const onClickLogin = (e) => {
  e.preventDefault();
  let login = document.getElementById('login').value
  let senha = document.getElementById('senha').value

  Login(login, senha);

}

const mudarInputData = (e) =>{
  document.getElementsByName('radio')[0].checked=true;
  document.getElementById('filter-input').classList.add('d-none');
  document.getElementById('filter-input').classList.add('d-inline');
  document.getElementById('filter-input').classList.add('text-primary');
  document.getElementById('filter-input').classList.add('form-control');
  document.getElementById('filter-input').type = "date";
}

const mudarInputID = (e) =>{
  document.getElementsByName('radio')[1].checked=true;
  document.getElementById('filter-input').classList.add('d-none');
  document.getElementById('filter-input').classList.add('d-inline');
  document.getElementById('filter-input').classList.add('text-primary');
  document.getElementById('filter-input').classList.add('form-control');
  document.getElementById('filter-input').type = "text";
  document.getElementById('filter-input').value = "";
}
  const gerarComponenteCadastro = () => {
    document.getElementById("template").innerHTML = `
  <h1 class="text-primary fs-1 mt-4 p-2 ">Cadastro</h1>
                <form id="formulario" onsubmit="onSubmitCadastro(event)" class="container d-flex flex-column p-4" >
                  <div class="mb-3">
                    <input type="text" class="form-control" id="nome" name="nome" placeholder="Nome"  autocomplete="off">
                  </div>
                  <div class="mb-3">
                    <input type="email" class="form-control" id="email" name="email" placeholder="Email"  autocomplete="off"/>
                  </div>
                 
                  <div class="mb-3">
                    <input type="password" class="form-control" id="senha" name="senha" placeholder="Senha" value="" autocomplete="off">
                  </div>
                  <div class="mb-3">
                    <input type="password" class="form-control" id="senhaTwo" name="senhaTwo" placeholder="Confirme a senha"  autocomplete="off">
                  </div>
                  <button type="submit" class="p-2 mt-4 btn btn-primary">Entre</button>
                 <p class="d-flex flex-row mt-3 align-items-center justify-content-center"><span class="mr-2"> Já possui cadastro ? </span><a  onclick="gerarComponenteLogin()" href="#" class=" text-primary"> Faça Login </a></p>
                </form>
`;
  };

  const activeLink = (id) => {
    for (let i = 0; i < document.getElementsByClassName('nav-item').length; i++) {
      let item = document.getElementsByClassName('nav-item')[i]
      if (item.childNodes[1].id === id) {
        item.childNodes[1].style.color = "#ffff";
      } else {
        item.childNodes[1].style.color = "#aaaa"
      }
    }
  }
  /* 
  * Função quer irá fazer a navegação entre os link da single Page
  */
  function onHandleNavigate(event) {
    event.preventDefault();
    //Pega a url colocada no href da tag <a href="/home"></a>
    let currentPage = event.currentTarget.attributes[3].nodeValue;
    //resultado = currentPage = "/home"

    switch (currentPage) {
      case "/home":
        toHome();
        activeLink('home');
        break;
      case "/page2":
        toPage2();
        activeLink('page2');
        break;
      case "/page3":
        toPage3();
        activeLink('page3');
        break
      default:
        toHome();
        activeLink('home');
        break;
    }

  }

  const onSubmitCadastro = (event) => {
    event.preventDefault();
    const label = ["nome", "email", "senha", "senhaTwo"];
    let objeto = {
      nome:"",
      email:"",
      senha:"",
      senhaTwo:""
    };
    label.forEach((item) => {
      objeto[item] = document.getElementById(item).value;
    });
    if (
      objeto.nome !== "" &&
      objeto.email !== "" &&
      objeto.senha === objeto.senhaTwo
    ) {
      let user = localStorage.getItem('usuario')
      let data = JSON.parse(user)
      data.push(objeto);

      localStorage.removeItem('usuario')
      localStorage.setItem('usuario', JSON.stringify(data))
      localStorage.setItem('userAuth', JSON.stringify(objeto))
      //Atualizar o array salvo no localStorage
      document.getElementById('register-alert').classList.remove('d-flex')
            document.getElementById('register-alert').classList.add('d-none')
            document.getElementById('alert').classList.remove('justify-content-between')
            document.getElementById('alert').classList.add('justify-content-end')
            //remove o botão do header
            document.getElementById('acount-btn').classList.remove('d-flex')
            document.getElementById('acount-btn').classList.add('d-none')
            document.getElementById('exampleModal').classList.remove('show')
            document.getElementsByClassName('modal-backdrop')[0]?.remove('modal-backdrop fade show')
            //Navega para home autenticada
            toHome();
            activeLink('home');
            //Adiciona o botão com o nome do usuário 
            document.getElementById('acount-container').innerHTML = `<button onclick="loggof()" class="btn btn-primary border-white"> <i class="fa-solid fa-circle-user h3 text-white hoverBtn"></i>${objeto.nome.substr(0, 6)}</button>`
    } else {
      let objVerificaSenha = {};
      label.forEach((item) => {
        objVerificaSenha[item] = document.getElementById(item).value;
        if (document.getElementById(item).value === "") {
          document.getElementById(item).value = "Preencha o campo " + item;
          document.getElementById(item).style.color = "red";
        } else {
          if (objVerificaSenha.senha !== objVerificaSenha.senhaTwo) {
            document.getElementById("senha").type = "text";
            document.getElementById("senhaTwo").type = "text";
            document.getElementById("senha").value = "As senhas não correspondem ";
            document.getElementById("senhaTwo").value =
              "As senhas não correspondem ";
            document.getElementById("senha").style.color = "red";
            document.getElementById("senhaTwo").style.color = "red";
          }
        }
      });
    }
  };



