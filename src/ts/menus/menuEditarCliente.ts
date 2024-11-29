import Menu from "../interfaces/menu";

export default class MenuEditarCliente implements Menu {
  mostrar(): void {
    console.clear();
    console.log(`****************************`);
    console.log(`| Escolha a opção p/ editar: `)
    console.log(`----------------------`);
    console.log(`| 1 - Nome`);
    console.log(`| 2 - Nome social`);
    console.log(`| 3 - Data de nascimento`);
    console.log(`| 4 - Telefones`);
    console.log(`| 5 - Endereço`);
    console.log(`| 6 - Documentos`);
    console.log(`----------------------`);
    console.log(`| Ou qual opção deseja adicionar: `)
    console.log(`----------------------`);
    console.log(`| 7 - Telefones`);
    console.log(`| 8 - Documentos`);
    console.log(`| 9 - Acomodações`);
    console.log(`| 0 - Finalizar edição/adição`)
    console.log(`----------------------`);
  }
}