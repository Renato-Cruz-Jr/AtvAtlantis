import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import MenuTipoAcomodacao from "../menus/menuTipoAcomodacao";
import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";

export default class CadastroClienteAcomodacao extends Processo {
  private cliente: Cliente;
  private acomodacoes: Acomodacao[];
  constructor(cliente: Cliente) {
    super();
    this.cliente = cliente;
    this.menu = new MenuTipoAcomodacao();
    this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes;
  }

  processar(): void {
    this.menu.mostrar();
    let entrada = this.entrada.receberNumero("Qual o tipo do quarto p/ cadastrar no cliente: ");
    this.acomodacoes.forEach((alvo, index) => {
      switch (entrada) {
        case index + 1:
          if (entrada == index + 1) {
            let acomodacao = new Acomodacao(
              alvo.NomeAcomodacao,
              alvo.CamaSolteiro,
              alvo.CamaCasal,
              alvo.Suite,
              alvo.Climatizacao,
              alvo.Garagem
            );
            this.cliente.Acomodacao = acomodacao;
          }
          break;
      }
    });
  }
}
