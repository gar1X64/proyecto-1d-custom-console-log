const log = require("./../index");

var chai = require("chai"),
  expect = chai.expect,
  sinonChai = require("sinon-chai"),
  sinon = require("sinon");

chai.use(sinonChai);

const MENSAJE = "Hola, estamos en el curso de NPM!";

describe("test de las funciones", () => {
  //
  beforeEach(function () {
    sinon.spy(console, "log");
  });
  afterEach(function () {
    console.log.restore();
  });
  //xit para ignorar prueba
  it("funcion ok", () => {
    //ok
    log.ok(MENSAJE);
    expect(console.log).to.be.called;
  });

  it("funcion Info", () => {
    //Aviso
    log.info(MENSAJE);
    expect(console.log).to.be.called;
  });

  it("funcion aviso", () => {
    //Información
    log.aviso(MENSAJE);
    expect(console.log).to.be.called;
  });

  it("funcion err", () => {
    //err
    log.error(MENSAJE);
    expect(console.log).to.be.called;
  });

  it("no llama al c.log", () => {
    log.mensajeBienvenida();
    expect(console.log).to.not.be.called;
  });
});
