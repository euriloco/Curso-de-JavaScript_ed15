function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}

console.log(caseInSwitch(1));
console.log(caseInSwitch("a"));
console.log(caseInSwitch("b"));
console.log(caseInSwitch("c"));
