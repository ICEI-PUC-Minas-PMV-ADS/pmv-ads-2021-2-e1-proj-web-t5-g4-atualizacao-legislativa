import  Home  from '../../views/Home.js';
import Usuario from  '../data/usuarios.js';
import Leis from  '../data/leis.js';
import DetalhesLei from  '../../views/Details.js';
import Page2 from '../../views/Page2.js';
import Page3 from '../../views/Page3.js';


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