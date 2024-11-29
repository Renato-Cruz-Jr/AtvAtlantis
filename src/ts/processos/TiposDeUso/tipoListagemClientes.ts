import Processo from "../../abstracoes/processo";
import MenuTipoListagemClientes from "../../menus/menuTipoListagemClientes";
import ListagemTitulares from "../ListarCliente/listagemTitulares";
import ListagemDosDependentesDoTitular from "../ListarCliente/listagemDependentesTitular";
import ListagemDosDependentes from "../ListarCliente/listagemDependentes";
import ListagemTitularDependente from "../ListarCliente/listagemTitularDependente";

export default class TipoListagemClientes extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoListagemClientes()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada:')
        switch (this.opcao) {
            case 1:
                this.processo = new ListagemTitulares()
                this.processo.processar()
                break;
            case 2:
                this.processo = new ListagemDosDependentesDoTitular()
                this.processo.processar()
                break;
            case 3:
                this.processo = new ListagemDosDependentes()
                this.processo.processar()
                break;
            case 4:
                this.processo = new ListagemTitularDependente()
                this.processo.processar()
                break;
            default:
                console.log('Essa opção não existe... ')
        }
    }
}