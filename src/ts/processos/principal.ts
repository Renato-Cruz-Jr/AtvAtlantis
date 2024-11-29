import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPrincipal"
import TipoCadastroCliente from "./TiposDeUso/tipoCadastroCliente"
import TipoEdicaoCliente from "./TiposDeUso/tipoEdicaoCliente"
import TipoListagemClientes from "./TiposDeUso/tipoListagemClientes"
import TipoDeletaCliente from "./TiposDeUso/tipoDeletaCliente"
import ListaDeAcomodacoes from "./listagemAcomodacoes"

export default class Principal extends Processo {
    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada:')
        switch (this.opcao) {
            case 1:
                this.processo = new TipoCadastroCliente()
                this.processo.processar()
                break
            case 2:
                this.processo = new TipoEdicaoCliente()
                this.processo.processar()
                break
            case 3:
                this.processo = new TipoListagemClientes()
                this.processo.processar()
                break
            case 4:
                this.processo = new TipoDeletaCliente()
                this.processo.processar()
                break
            case 5:
                this.processo = new ListaDeAcomodacoes()
                this.processo.processar()
                break
            case 0:
                this.execucao = false
                console.log('Fim da execução.')
                console.clear()
                break
            default:
                console.log('Essa opção não existe.')
        }
    }
}