// const a = [4,6]
// const b = [77,85]
// const c = [12,13,45,]
// function calculateTotalSpentByCategory(category1,category2,category3) {
//   return((category1),(category2),(category3))
// }


// console.log(calculateTotalSpentByCategory(a,b,c))
  




function calculateTotalSpentByCategory(category1, category2, category3) {
  const categoryTotals = {};

  [category1, category2, category3].forEach((category, index) => {
    const totalAmount = category.reduce((sum, amount) => sum + amount, 0);
    categoryTotals[`category${index + 1}`] = totalAmount;
  });

  return categoryTotals;
}

const a = [4, 4, 6];
const b = ['hello', 'ok', 77, 85];
const c = [12, 13, 45];

console.log(calculateTotalSpentByCategory(a, b, c));