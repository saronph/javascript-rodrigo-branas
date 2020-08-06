var text =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

var HackerTextError = function (message) {
  this.message = message;
  this.name = "HackerTextError";
};

var toHackerCase = function (text) {
  // !text faz com que o texto não seja '0' NaN "" false null undefined
  if (!text) throw new HackerTextError("Invalid text");
  if (typeof text !== "string") throw new HackerTextError("Invalid type");
  var hackerTextArray = [];
  var i = 0;
  while (i < text.length) {
    switch (text.charAt(i)) {
      case "o":
        hackerTextArray.push(0);
        break;
      case "l":
        hackerTextArray.push(1);
        break;
      case "e":
        hackerTextArray.push(3);
        break;
      case "a":
        hackerTextArray.push(4);
        break;
      case "s":
        hackerTextArray.push(5);
        break;
      case "t":
        hackerTextArray.push(7);
        break;
      default:
        hackerTextArray.push(text.charAt(i));
    }
    i++;
  }
  return hackerTextArray.join("");
};
try {
  console.log(toHackerCase());
} catch (e) {
  console.log("Error: " + e.message + " " + e.name);
}
try {
  console.log(toHackerCase(10));
} catch (e) {
  console.log("Error: " + e.message + " " + e.name);
}
console.log(toHackerCase(text));
