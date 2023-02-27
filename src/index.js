module.exports = function check(str, bracketsConfig1) {

  const openBrackets = [];
  const closeBrackets = [];
  const bracketsConfig = {};

  bracketsConfig1.forEach( el => {
    openBrackets.push(el[0]);
    closeBrackets.push(el[1]);

    bracketsConfig[el[1]] = el[0];
  })

 
  
  // const openBrackets = ['(', '{', '['];
  // const closeBrackets = [')', '}', ']'];
  // const bracketsConfig = {
  //   [')']: '(',
  //   ['}']: '{',
  //   [']']: '['
  // }

  let stack = [];
  let currentSymbol;
 

  for (let i = 0; i < str.length; i++) {
    currentSymbol = str[i];
    let topElement = stack[stack.length -1];

    if (closeBrackets.includes(currentSymbol)) {
      if (stack.length === 0) {
        if (openBrackets.includes(currentSymbol)) {
          stack.push(currentSymbol);
        } else {
          return false;
        };
      } else {
        if (bracketsConfig[currentSymbol] === topElement) {
          stack.pop();
        } else {
          if (openBrackets.includes(currentSymbol)) {
            stack.push(currentSymbol);
          } else {
            return false;
          };
        }
      }
    } else if (openBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol);
    }
  }
  return stack.length === 0;
}