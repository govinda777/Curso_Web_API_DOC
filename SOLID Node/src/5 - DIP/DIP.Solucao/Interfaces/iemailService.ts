import {Cliente} from "../cliente"

export interface IEmailService {

    isValid(email: string): boolean;
    enviar(de: string , para: string , assunto: string , mensagem: string): void;
}