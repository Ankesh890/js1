function outerFunction() {
  
  const message = "Hello my name is ankesh!";

  function innerFunction() {
    console.log(message);
  }

  return innerFunction;
}
const storedFunction = outerFunction();

storedFunction();  
