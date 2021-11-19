import  Home  from '../../views/Home.js';
import Usuario from  '../data/usuarios.js';
import Leis from  '../data/leis.js';
import DetalhesLei from  '../../views/Details.js';
import Page2 from '../../views/Page2.js';
import Page3 from '../../views/Page3.js';

let userLogado = localStorage.getItem('user');

let userObjeto = JSON.parse(userLogado)

let existUser =  userObjeto === null? false : true

if (existUser) {
  document.getElementById('register-alert').classList.remove('d-flex')
  document.getElementById('register-alert').classList.add('d-none')
  document.getElementById('alert').classList.remove('justify-content-between')
  document.getElementById('alert').classList.add('justify-content-end')
  //remove o botão do header
  document.getElementById('acount-btn').classList.remove('d-flex')
  document.getElementById('acount-btn').classList.add('d-none')
  document.getElementById('acount-container').innerHTML = `<button class="btn btn-primary border-white"> <i class="fa-solid fa-circle-user h3 text-white hoverBtn"></i>${userObjeto.nome.substr(0, 6)}</button>`
}
window.detailView = id =>{
  const lei = Leis.find(item=>item.id === id)
  document.getElementById('main').innerHTML = DetalhesLei(lei)
}
  document.getElementById('main').innerHTML = Home(Leis)


  //Funçoes de navegações 


  window.toHome = ()=>{
    document.getElementById('main').innerHTML = Home(Leis)
  }

  window.toPage2 = ()=>{
    document.getElementById('main').innerHTML = Page2()
  }

  window.toPage3 = ()=>{
    document.getElementById('main').innerHTML = Page3()
  }


  window.filtrar = (e) => {
    //Anula o efeito de reload da pagina para não perder o estado 
    e.preventDefault();
    let filtroSelecionado = ""

//Input digitado DATA ou CHAVE 
  let valueFilter = document.getElementById('filter-input').value

   for (let i = 0 ; i < document.getElementsByName('radio').length; i++){
               let item = document.getElementsByName('radio')[i];
      if (item.checked === true) {
        //Converte se for id porque é string para int 
        if(item.value === "id"){
          valueFilter = parseInt(valueFilter)
        }
        filtroSelecionado = item.value
      } 
    }

    let  filtro  = Leis?.filter(item=>item[filtroSelecionado] === valueFilter )
  
    document.getElementById('main').innerHTML = Home(filtro)
  
  }