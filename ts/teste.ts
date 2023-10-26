enum EstadosBrasileiros{
    pe = "Pernambuco",
    ba = "Bahia",
    sp = "São Paulo"
}

class NumeroTelefonico{
    private ddd: number[] = [81, 73, 21]
    public descobrirEstado(ddd: number): string | undefined | null{
        if(typeof ddd === 'number'){
            switch (ddd){
                case this.ddd[0]: 
                    return EstadosBrasileiros.pe
                case this.ddd[1]:
                    return EstadosBrasileiros.ba
                case this.ddd[2]:
                    return EstadosBrasileiros.sp
                default:
                    return "DDD não presente na lista"
            }
        }
    }
}

const pernambuco = new NumeroTelefonico();
console.log(pernambuco.descobrirEstado(14))