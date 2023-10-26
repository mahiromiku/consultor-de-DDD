var EstadosBrasileiros;
(function (EstadosBrasileiros) {
    EstadosBrasileiros["pe"] = "Pernambuco";
    EstadosBrasileiros["ba"] = "Bahia";
    EstadosBrasileiros["sp"] = "S\u00E3o Paulo";
})(EstadosBrasileiros || (EstadosBrasileiros = {}));
var NumeroTelefonico = /** @class */ (function () {
    function NumeroTelefonico() {
        this.ddd = [81, 73, 21];
    }
    NumeroTelefonico.prototype.descobrirEstado = function (ddd) {
        if (typeof ddd === 'number') {
            switch (ddd) {
                case this.ddd[0]:
                    return EstadosBrasileiros.pe;
                case this.ddd[1]:
                    return EstadosBrasileiros.ba;
                case this.ddd[2]:
                    return EstadosBrasileiros.sp;
                default:
                    return "DDD não presente na lista";
            }
        }
    };
    return NumeroTelefonico;
}());
var pernambuco = new NumeroTelefonico();
console.log(pernambuco.descobrirEstado(14));
