import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";

export default class EditarDataDeNascimento extends Processo {
  private cliente: Cliente;
  constructor(cliente: Cliente) {
    super();
    this.cliente = cliente;
  }
  
  processar() {
    let novaDataDeNascimento = this.entrada.receberData("Qual a nova data de nascimento? ");
    this.cliente.DataNascimento = novaDataDeNascimento;
  }
}