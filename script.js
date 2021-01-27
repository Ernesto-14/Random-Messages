// This is a program that display a random message every time it runs.

const message = {
    firstPart : ['Your limitation—it’s only your imagination.',
'Push yourself, because no one else is going to do it for you.',
'Sometimes later becomes never. Do it now.'],
    secondPart : ['Great things never come from comfort zones.',
'Dream it. Wish it. Do it.', 'Success doesn’t just find you. You have to go out and get it.'],
    thirdPart : ['The harder you work for something, the greater you’ll feel when you achieve it.',
'Dream bigger. Do bigger.', 'Don’t stop when you’re tired. Stop when you’re done.']
};

const createMessage = (obj) => {
    let randomNumber1 = Math.floor(Math.random() * obj.firstPart.length);
    let randomNumber2 = Math.floor(Math.random() * obj.secondPart.length);
    let randomNumber3 = Math.floor(Math.random()* obj.thirdPart.length);
    let message = `Your first advice of the day is: ' ${obj.firstPart[randomNumber1]} 'This will be a good thing to keep in mind: ' ${obj.secondPart[randomNumber2]} 'And this is your final quote of the day: ' ${obj.thirdPart[randomNumber3]}`;
    return message;
}

console.log(createMessage(message));
