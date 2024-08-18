const greet = function (greeting) {
return function (name) {
console.log(`${greeting} ${name}`);
};
};


const greeterHey = greet ('Hey');
greeterHey('Jonas');
greeterHey('Steven');



// Hey Jonas
// Hey Steven
