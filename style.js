const CardMaker = {
   makeFrontMessage: function(string) {
        return `<h2>${string}</h2>`
}
}
//==== Add inside message
CardMaker.makeInnerMessage=function(string) {
   return `<h2>${string}</h2>`
}

        valentineCard=Object.create(CardMaker);
        birthdayCard=Object.create(CardMaker);

       adultBCard=Object.create(birthdayCard);
       kidsBCard=Object.create(birthdayCard);


            console.log(birthdayCard.makeFrontMessage("Happy Birthday!#@"));
            console.log(birthdayCard.makeInnerMessage("you are special!"));
            console.log(valentineCard.makeFrontMessage("blink blink"));
            console.log(valentineCard.makeInnerMessage("ha ha "));
            console.log(kidsBCard.makeFrontMessage("how old are you now?"));
            console.log(adultBCard.makeInnerMessage("i am sixteen"));


document.getElementById("on-the-front").innerHTML=CardMaker.makeFrontMessage("a wonderfull");
document.getElementById("from-the-inner").innerHTML=CardMaker.makeInnerMessage("year!@#");
