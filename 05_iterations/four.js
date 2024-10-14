//* We can use for in loop to iterate over objects using the following syntax
const coding = {
  py: "Python",
  js: "javascript",
  pa: "Pascal",
};

for (const key in coding) {
  console.log(`${key} is file extension of  ${coding[key]}`);
}
