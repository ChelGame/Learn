function calcAmountPurchases(customers) {
  let sum = 0;
  customers.forEach(i => {
    sum += i;
  });
  return sum;
}

let mostValuableCustomers = [10000, 20000, 30000];
console.log(calcuPurchaseAmount(mostValuableCustomers));