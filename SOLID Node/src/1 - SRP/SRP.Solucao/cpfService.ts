class CpfService {
    
    public isValid(cpf: string) : boolean {
        return cpf.length != 11 ? false : true;
    }
}
export {CpfService}