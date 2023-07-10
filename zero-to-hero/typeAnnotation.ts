// ==> Vars
let aperson: string = "John Doe";
console.log(aperson);

// ==> Arrays
let animals: string[] = ["cat", "dog", "bird"];
console.log(animals);

// ==> Objects
let car: { brand: string; color: string; year: number } = {
  brand: "BMW",
  color: "red",
  year: 2020,
};
console.log(car);

// ==> Functions
function multiply(a: number, b: number): number {
  return a * b;
}
console.log(multiply(2, 3));

// ==> Functions with void
function print(value: any): void {
  console.log(value);
}
print("Hello World");

// ==> Functions with never
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}
// throwError("Error");

let num1: number = 23.0;
let num2: number = 0x78cf;
let num3: number = 0o577;
let num4: number = 0b110001;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

let bitint: bigint =
  0b1110101010101010010101001000001011010110101010110101010101010001n;
console.log(bitint);
