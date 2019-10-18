//jshint esversion:6
// const fs = require("fs");
// fs.copyFileSync("file1.txt", "file2.txt");
const superheroes = require("superheroes");
const supervillians = require("supervillains");
var mySuperheroName = superheroes.random();

console.log(mySuperheroName);
console.log(supervillians.random());