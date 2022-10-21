function calculo(a = 3, b = 6, c = -7) {
    const delta = b * b -4 * a * c;

const x1 = (-b + Math.sqrt(delta))/(2 * a);
const x2 = (-b - Math.sqrt(delta))/(2 * a);

console.log(x1);
console.log(x2);
}
