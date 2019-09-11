import {ICadastroProduto} from "./Interfaces/icadastroProduto";

class CadastroProduto implements ICadastroProduto {

    public validarDados()
    {
        // Validar valor
    }

    public salvarBanco()
    {
        // Insert tabela Produto
    }

    public enviarEmail()
    {
        // Produto nao tem e-mail, o que eu faço agora???
        throw new Error("Esse metodo nao serve pra nada");
    }
}
export {CadastroProduto}