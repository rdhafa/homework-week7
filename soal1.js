const formula = require("./planeGeometryFormula");

// Keliling & luas persegi
const square = { side: 10 };
const squarePerimeter = formula.squarePerimeter(square);
const squareArea = formula.squareArea(square);
console.log(`Keliling persegi adalah: ${squarePerimeter} cm`);
console.log(`Luas persegi adalah: ${squareArea} cm\u00B2 \n`);

// Keliling & luas persegi panjang
const rectangle = {
  length: 16,
  width: 10,
};
const rectanglePerimeter = formula.rectanglePerimeter(rectangle);
const rectangleArea = formula.rectangleArea(rectangle);
console.log(`Keliling persegi panjang adalah: ${rectanglePerimeter} cm`);
console.log(`Luas persegi panjang adalah: ${rectangleArea} cm\u00B2`);
