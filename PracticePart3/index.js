const arrayList = ["China", "India", "USA"];

function generateSentence(desc, arr) {
  let lists = "";
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    lists += `${arr[i]} `;
    count += i;
  }
  console.log(`The ${count} ${desc} are ${lists}`);
}

generateSentence("largest countries", arrayList);
