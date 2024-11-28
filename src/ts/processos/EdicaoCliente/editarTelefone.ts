import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";

export default class EditarNumero extends Processo {
  private cliente: Cliente;
  constructor(cliente: Cliente) {
    super();
    this.cliente = cliente;
  }

  processar() {
    console.clear();
    console.log(`Listagem dos Telefones:`);
    this.cliente.Telefones.forEach((i) => {
      console.log(`------------------------------`);
      console.log(`|  Telefone: ${i.Ddd} - ${i.Numero} `);
      console.log(`------------------------------`);
    });

    let telefoneAntigo = this.entrada.receberTexto("Qual o número do telefone para ser editado? Padrão: DDD NUMERO ");
    let partesTell = telefoneAntigo.split(" ");
    this.cliente.Telefones.filter(
      (tell) => tell.Numero == partesTell[1] && tell.Ddd === partesTell[0]
    ).forEach((novo) => {
      let tell = this.entrada.receberTexto(`Qual o número do telefone novo? Padrão: DDD NUMERO `);
      let partesTell = tell.split(" ");
      novo.Ddd = new String(partesTell[0].valueOf()).valueOf();
      novo.Numero = new String(partesTell[1].valueOf()).valueOf();
    });
  }
}