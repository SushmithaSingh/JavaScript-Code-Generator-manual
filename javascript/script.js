//Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `“Be yourself; everyone else is already taken.”`,
        person: `Oscar Wilde`
    },
    {
        quote: `“So many books, so little time.”`,
        person: `Frank Zappa `
    },
    {
        quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” `,
        person: `Albert Einstein`
    },
    {
        quote: `“A room without books is like a body without a soul.” `,
        person: ` Marcus Tullius Cicero `
    },
    {
        quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
        person: `Bernard M. Baruch `
    },
    {
        quote: `“You've gotta dance like there's nobody watching,
        Love like you'll never be hurt,
        Sing like there's nobody listening,
        And live like it's heaven on earth.”` ,
        person: `William W. Purkey `
    }
];

btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})