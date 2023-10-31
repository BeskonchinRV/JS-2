//вторая лаба
var animal = [];
animal.push("Бурундук");
animal.push("Белка");
animal.push("Хорек");
animal.push("Я");
console.log(animal);
console.log(animal.length);

var animal = [];
animal.push("Бурундук");
animal.push("Белка");
animal.push("Хорек");
animal.push("Я");
console.log(animal);

[animal[0], animal[animal.length - 1]] = [animal[animal.length - 1], animal[0]]
console.log(animal);

function swap (arr)
{
    let temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}
swap(animal);
console.log(animal);

let Animals = ["тигр", "броненосец", "зебра", "бегемот", "гепард"];
console.log(Animals);
Animals.unshift("муравьед");
console.log("Добавим няшное животное", Animals);
let outSider = Animals.pop();
console.log(Animals, `\nНяшное животное ${Animals[0]}`, `Подружилось ${outSider+"a"}`);

function swap (arr)
{
    let temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}
let predators = ["тигр", "лев", "волк", "пума", "як"];
console.log(predators);
let herbivores = ["слон", "олень", "зебра", "кролик", "лось"];
console.log(herbivores);
let friendlyfamily = predators.concat(herbivores);
console.log(friendlyfamily);
swap(friendlyfamily);
console.log();

let person = ["Бескончин", "Роман", "Владимирович"];
console.log(person);
person.unshift("Господин");
console.log(person);
person.pop();
person.pop();
console.log(person);
person = person.join("@");
console.log(person);
