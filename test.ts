import test from "ava";
import { User, Product } from "./index";

test("Testeo la clase User", (t) => {
  var usuario1 = new User("Roque");
  t.is(usuario1.name, "Roque");
});
test("Testeo la clase Product y sus métodos", (t) => {
  var producto1 = new Product("Teclado", 25);
  t.is(producto1.name, "Teclado");
  t.is(producto1.price, 25);
  var usuario2 = new User("Mikel");
  var producto2 = new Product("Monitor", 125);
  usuario2.addProduct(producto2);
  t.is(usuario2.products[0].name, "Monitor");
  t.is(usuario2.products[0].price, 125);
});
