import Processo from "../../abstracoes/processo";
import MenuTipoDeletaCliente from "../../menus/menuDeletarCliente";
import DeletaTitular from "../deletaTitular";
import DeletaDependente from "../deletaDependente";

export default class TipoDeletaCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoDeletaCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new DeletaTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new DeletaDependente()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}