function welcomeMessage(name, greetHandler) {
    greetHandler(name);
}
function greetMorning(name) {
    console.log('Good morning', name);
}
function greetEvening(name) {
    console.log('Good evening', name);
}
function greetAfternoon(name) {
    console.log('Good afternoon', name);
}
welcomeMessage('Tom Hanks', greetMorning);
welcomeMessage('Sakib Hanks', greetAfternoon);
welcomeMessage('Bappa Raj', greetEvening);



/*
function welcome(name, call) {
    call(name);
}
function morning(x) {
    console.log('Good morning', x);
}

welcome('Alif', morning);
 */