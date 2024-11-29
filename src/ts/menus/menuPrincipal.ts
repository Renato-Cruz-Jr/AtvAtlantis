import Menu from "../interfaces/menu";

export default class MenuPrincipal implements Menu {
    mostrar(): void {
        console.log(`************************************`)
        console.log(`| Por favor, selecione uma opção...`)
        console.log(`\n----------------------`)
        console.log(`| Opções p/ cliente:`)
        console.log(`----------------------`)
        console.log(`| 1 - Cadastrar cliente`)
        console.log(`| 2 - Editar cliente`)
        console.log(`| 3 - Listar cliente(s)`)
        console.log(`| 4 - Excluir cliente`)
        console.log(`\n----------------------`)
        console.log(`| Opções p/ gestão:`)
        console.log(`----------------------`)
        console.log(`| 5 - Listar acomodações`)
        console.log(`----------------------`)
        console.log(`\n| 0 - Sair`)
        console.log(`************************************`)
        console.log(`----------------------`)
    }
}