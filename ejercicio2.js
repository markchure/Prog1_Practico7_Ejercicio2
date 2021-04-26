//Hacer una función que muestre las tablas de multiplicar del 1 al 10.
function tablas() {
  for (let i = 1; i <= 10; i++) {
    console.log("\nTabla del " + i);

    for (let x = 1; x <= 10; x++) {
      console.log(i + " x " + x + " = " + i * x);
    }
  }
}

tablas();
