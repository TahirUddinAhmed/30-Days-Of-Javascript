const text = "123 Hello world, welcome to the universe.";
const regex = /^\b\w+\b/;
const match = text.match(regex);

if (match) {
  console.log(`Matched word: ${match[0]}`);
}

const text1 = "Hello world, welcome to the universe";
const regex1 = /\b\w+\b$/;
const match1 = text.match(regex1);

if (match1) {
  console.log(`Matched word: ${match1[0]}`);
}

