import Menu from "../interfaces/menu";

export default class MenuTipoTelefone implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual opção? `)
        console.log(`----------------------`)
        console.log(`| 1 - Cadastrar telefone`)
        console.log(`| 0 - Finalizar cadastro de telefones`)
        console.log(`----------------------`)
    }
}