import { IPaginaHTML } from "./shared/pagina.interface.js";

class Index implements IPaginaHTML{
  btnCadastrar: HTMLButtonElement;

  constructor(){

    this.configurarElementos();
  }
  public configurarElementos(): void {    
  }
}

new Index();