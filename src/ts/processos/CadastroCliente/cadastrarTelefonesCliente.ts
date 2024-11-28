import Processo from "../../abstracoes/processo";
import MenuTipoTelefone from "../../menus/menuTipoTelefone";
import Cliente from "../../modelos/cliente";
import CadastroTelefone from "./cadastroTelefone";

export default class CadastrarTelefonesCliente extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.menu = new MenuTipoTelefone()
        this.execucao = true
    }

    processar(): void {
        console.log('Inciando o cadastro de telefones...')
        while (this.execucao) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual opção desejada?')
            switch (this.opcao) {
                case 1:
                    this.processo = new CadastroTelefone(this.cliente)
                    this.processo.processar()
                    break
                case 0:
                    this.execucao = false
                    break
                default:
                    console.log('Opção não entendida.')
            }
        }
    }
}