function counter(){
    var counter = 0;

function IncreaseCounter(){
    return counter += 1;
};
return IncreaseCounter;
}
var counter = counter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());