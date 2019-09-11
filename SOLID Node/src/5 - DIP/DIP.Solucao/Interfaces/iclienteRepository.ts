import {Cliente} from "../cliente";

export interface IClienteRepository {
    adicionarCliente(cliente: Cliente): void;
}