var expect = chai.expect;

describe("CSV", function () {
  var sandbox;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
    sandbox.stub(window.console, "log");
    sandbox.stub(window.console, "error");
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe("funcion calculate", function() {
    $(document).ready(() => {
      it("deberia aceptar una cadena", function() {
        var cadena = '"hola"';
        var r;
        $.get("/csv", /* Request AJAX para que se calcule la tabla */
          { input: cadena },
          r,
          'json'
        );
        expect(r[0].value[0]).to.equal('hola');
      });
    })();
    it("prueba con una coma a la derecha", function() {
      var cadena = '"hola,"';
      var r = calculate(cadena);
      expect(r[0].value[0]).to.equal('hola,');
    });
    it("prueba con una coma a la izquierda", function() {
      var cadena = '",hola"';
      var r = calculate(cadena);
      expect(r[0].value[0]).to.equal(',hola');
    });
    it("prueba con espacios", function() {
      var cadena = '" hola"';
      var r = calculate(cadena);
      expect(r[0].value[0]).to.equal(' hola');
    });
    it("prueba separando con comas", function() {
      var cadena = '"hola","adios"';
      var r = calculate(cadena);
      expect(r[0].value[0]).to.equal('hola');
      expect(r[0].value[1]).to.equal('adios');
    });
    it("prueba separando con comas y habiendo espacios", function() {
      var cadena = ' ,"adios"';
      var r = calculate(cadena);
      expect(r[0].value[0]).to.equal(' ');
      expect(r[0].value[1]).to.equal('adios');
    });
    it("prueba separando con dos comas seguidas", function() {
      var cadena = '"hola",,"adios"';
      var r = calculate(cadena);
      expect(r[0].value[0]).to.equal('hola');
      expect(r[0].value[1]).to.equal('');
      expect(r[0].value[2]).to.equal('adios');
    });
  });
});
