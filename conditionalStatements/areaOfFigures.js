function areaOfFigures(input) {
  let shape = input[0];
  let area = 0;
  if (shape === "square") {
    let side = Number(input[1]);
    area = (side * side).toFixed(3);
  } else if (shape === "rectangle") {
    let sideA = Number(input[1]);
    let sideB = Number(input[2]);
    area = (sideA * sideB).toFixed(3);
  } else if (shape === "circle") {
    let radius = Number(input[1]);
    area = (Math.PI * Math.pow(radius, 2)).toFixed(3);
  } else if (shape === "triangle") {
    let base = Number(input[1]);
    let height = Number(input[2]);
    area = (0.5 * base * height).toFixed(3);
  }
  console.log(area);
}
areaOfFigures(["triangle", "4.5", "20"]);
