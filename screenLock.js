


function countPatternsFrom(letter, length, tem = "", total = []) {


  let connections = {
    A: ["B", "BC", "D", "E", "F", "DG", "H", "EI"],
    B: ["A", "C", "D", "E", "F", "G", "EH", "I"],
    C: ["BA", "B", "D", "E", "F", "EG", "H", "FI"],
    D: ["A", "B", "C", "E", "EF", "G", "H", "I"],
    E: ["A", "B", "C", "D", "F", "G", "H", "I"],
    F: ["A", "B", "C", "ED", "E", "G", "H", "I"],
    G: ["DA", "B", "E", "H", "D", "EC", "F", "HI"],
    H: ["A", "B", "C", "D", "EB", "F", "G", "I"],
    I: ["EA", "B", "F", "D", "E", "FC", "HG", "H"],
  };

  tem = tem + letter;
  if (tem.length == length) {
    total.push(tem);
    return
  }


  for (let elm of connections[letter]) {
    if (elm.length == 1) {
      if (!tem.includes(elm)) {
        countPatternsFrom(elm, length, tem, total);
      }
    } else if (elm.length == 2) {
      if (tem.includes(elm[0])) {
        if (!tem.includes(elm[1])) {
          countPatternsFrom(elm[elm.length - 1], length, tem, total);

        }
      }
    }
  }
  return total.length;

}
console.log(countPatternsFrom("D", 3));

