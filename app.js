const datosBicis = require("./modulos/datosBici");

const dhBici = {
  bicicletas: datosBicis,
  buscarBici: function (id) {
    const bicicleta = this.bicicletas.find((element) => element.id == id);
    if (bicicleta) {
      return bicicleta;
    } else {
      return null;
    }
  },
  venderBici: function (id) {
    const bicicleta = this.buscarBici(id);
    if (bicicleta) {
      bicicleta.vendida = "Si";
      return bicicleta;
    } else return "Bicicleta no encontrada";
  },
  biciParaLaVenta: function () {
    return this.bicicletas.filter((element) => element.vendida == "no");
  },
  totalDeVentas: function () {
    const totalVendidas = this.bicicletas.filter(
      (element) => element.vendida == "si"
    );
    return totalVendidas.reduce(function (acum, element) {
      return acum + element.precio
    },0);
  },
};

//console.log(dhBici.buscarBici(2));
//console.log(dhBici.venderBici(50));
//console.log(dhBici.biciParaLaVenta());
console.log(dhBici.totalDeVentas());
