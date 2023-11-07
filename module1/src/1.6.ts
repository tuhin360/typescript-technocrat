{
// Learning function
// Normal function
// Arrow function

// Normal function
function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}
add(2, 5);

// Arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2;

// object --> function --> method
const poorUser = {
  name: "John",
  balance: 0,
  addBalance(balance: number): number {
    return this.balance + balance;
  },
};

const poorUser2 = {
  name: "John",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is : ${this.balance + balance}`;
  },
};

// square each array element using map
const arr : number[] = [1, 2, 3, 4];
const newArray: number[] = arr.map((element:number): number => element*element);
}

