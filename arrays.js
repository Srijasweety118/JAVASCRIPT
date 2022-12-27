// the js method tostring() coverts an array to a string of (comma separated) array values.
fruits=["banana","orange","mango"]
console.log(fruits);
//pop()
a=[10,20,11,22]
a.pop();
console.log(a);
//push()
a=[10,20,11,22]
a.push(50);
console.log(a);
//shift()
a=[10,20,11,22]
a.shift()
console.log(a)
//unshift()
a=[10,20,11,22]
a.unshift(40)
console.log(a)
//changing elements 
fruits=["banana","orange","mango"]
  fruits[1]="appple"
console.log(fruits);
// array length
fruits=["banana","orange","mango"]
console.log(fruits.length);
//delete()
fruits=["banana","orange","mango"]
delete fruits[0]
console.log(fruits);
//merging by using concat()
cars=["benz","audi","Bmw","ferari"]
bikes=["royal Enfield","ktm","pulsar","rajdut"]
vehicals=cars.concat(bikes);
console.log(vehicals);
// merging three arrays
cars=["benz","audi","Bmw","ferari"]
bikes=["royal Enfield","ktm","pulsar","rajdut"]
buses=["palleyvelugu","superluxery","benz","amaravati"]
vehicals=cars.concat(bikes,buses);
console.log(vehicals);
//merging an array with values
cars=["benz","audi","Bmw","ferari"]
brand=cars.concat("xuv500");
console.log(brand);
// splice
num=[1,2]
num.splice(3,4,5,6,7,8,9,0);
console.log(num);
//remove elements by using splice
//With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
bikes=["royal Enfield","ktm","pulsar","rajdut"]
bikes.splice(1,2)
console.log(bikes);
//slice
//The slice() method slices out a piece of an array into a new array
fruits=["banana","orange","mango"]
a=fruits.slice(1)
console.log(a);
// slice() with two arguments
fruits=["banana","orange","mango","apple","grapes","sapota"]
a=fruits.slice(2,6)
console.log(a);
//automatic tostring()
fruits=["banana","orange","mango","apple","grapes","sapota"]
console.log(fruits.toString());
//sort()
num=[1,2,3,4,5]
num.sort();
console.log(num);
//reverse()
num.reverse();
console.log(num);
// compare function
a=[1,200,100,90,38];
a.sort(function(a,b){return (a-b)});
console.log(a);
//Find the Highest (or Lowest) Array Value
points=[40,100,1,34,2,200]
points.sort(function(a, b){return a - b});
console.log(points);
///literal
