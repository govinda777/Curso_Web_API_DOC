import { ICpfService } from "./Interfaces/icpfService";

class CpfService implements ICpfService {
    
    public isValid(cpf: string) : boolean {
        return cpf.length != 11 ? false : true;
    }
}
export {CpfService}