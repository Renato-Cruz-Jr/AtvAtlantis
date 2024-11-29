import Menu from "../interfaces/menu";

export default class MenuEditarEndereco implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o campo deseja editar: `)
        console.log(`----------------------`)
        console.log(`| 1 - Rua`)
        console.log(`| 2 - Bairro`)
        console.log(`| 3 - Cidade`)
        console.log(`| 4 - Estado`)
        console.log(`| 5 - País`)
        console.log(`| 6 - Código postal`)
        console.log(`| 0 - Finalizar edição`)
        console.log(`----------------------`)
    }
}