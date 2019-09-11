import {Cliente} from "../cliente";

export interface IClienteService {
    adicionarCliente(cliente: Cliente): string;
}