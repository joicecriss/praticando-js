//o que são vetores ou arrays

//como declarar array
let array = ['string', 1, true];
console.log(array);

//pode guardar vários tipos de dados
let arrays = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(arrays[0]);

//forEach
arrays.forEach(function(item, index){console.log(item, index)})

//push
arrays.push('novo item');
console.log(arrays);

//pop
arrays.pop();
console.log(arrays);

//shift
arrays.shift();
console.log(arrays);

//unshift
arrays.unshift('novo item no inicio');
console.log(arrays);

//indexOf
console.log(arrays.indexOf(true));

//splice
arrays.splice(0, 3);
console.log(arrays);

//slice
let novoArray = arrays.slice(0, 3);
console.log(novoArray);

//objetos
let object = { string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: { objectInterno: 'objeto interno'}}
console.log(object);
console.log(object.boolean);

//desestruturação do objeto
var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var { string, boolean, objectInterno } = object;
console.log(string, boolean, objectInterno);