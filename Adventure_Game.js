var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var inventoryItem = document.getElementById('inventoryItem');
var GameContainer = document.getElementById('game-container');
var Story = document.getElementById('description');
var Titel = document.getElementById('title');

Story.innerHTML = 'Je bent een avond alleen thuis, je zit rustig op de bank en opeens hoor je allemaal geluiden die je nog nooit heb gehoord';
Titel.innerHTML = ' the Story';

button1.onclick = buttonEen;
button2.onclick = buttonTwee;
button3.onclick = buttonDrie;
inventoryItem.onclick = PickKey;

var buttonEenClicks = 0;
var buttonTweeClicks = 0;
var buttonEenClicks2 = 0;
var buttonTweeClicks2 = 0;

var Rounds = 0;
var Item = false;

button1.innerHTML = 'Start';
button2.style.display = 'none';
button3.style.display = 'none';
inventoryItem.style.display = 'none';

function CheckPlaats () {
    button3.style.display = 'none';
    // Enge Grote huis
    if (buttonEenClicks == 1 && buttonTweeClicks == 0) {
        GameContainer.style.backgroundImage = 'url(img/EngHuis.jpg)';
        Story.innerHTML = 'Je zit op de bank rustig tv te kijken en opeens hoor je allemaal enge geluiden buiten. Je gaat op onderzoek uit..';
        Titel.innerHTML = 'Scarry late night';
        button1.innerHTML = '< Links';
        button2.innerHTML = 'Rechts >';
        inventoryItem.classList.add('InvItem1');
        button1.disabled = false;
        button2.disabled = false;
        inventoryItem.style.display = 'none';
        button2.style.display = 'inline-block';
        if (Item == true && buttonEenClicks == 1 && buttonTweeClicks == 0) {
            button3.style.display = 'block';
            button3.innerHTML = 'Naar Binnen';
            Story.innerHTML = 'Mooi, ik heb nu de sleutel, laat ik naar buiten gaan.';
        }
        console.log('Level: Redelijk Eng Huis');
    }
    // Eng Bos, 1 naar links
    else if (buttonEenClicks == 2 && buttonTweeClicks == 0) {
        GameContainer.style.backgroundImage = 'url(img/EngBosEen.jpg)';
        Titel.innerHTML = 'Buiten';
        button1.disabled = false;
        button2.disabled = false;
        inventoryItem.style.display = 'none';
        Story.innerHTML = 'Oke, misschien kwam hier het geluid wel vandaan.';
        console.log('Level: Eng Bos');
    }
    // Links Einde Bos
    else if (buttonEenClicks == 3 && buttonTweeClicks == 0) {
        GameContainer.style.backgroundImage = 'url(img/EngBosTwee.jpg)';
        Titel.innerHTML = 'Donker Bos';
        button1.disabled = true;
        button2.disabled = false;
        inventoryItem.style.display = 'none';
        Story.innerHTML = 'Ik vind het hier maar eng ik ga zeker niet verder deze kant op.';
        console.log('Level: Enger Bos');
    }
    // Stapel Auto's met key
    else if (buttonTweeClicks == 0 && buttonEenClicks <= 1) {
        GameContainer.style.backgroundImage = 'url(img/ScaryCars.jpg)';
        Titel.innerHTML = 'Open vlakte';
        button1.disabled = false;
        button2.disabled = false;
        inventoryItem.style.display = 'block';
        Story.innerHTML = 'Hier is ook niks te zien.';
        console.log('Level: The Car Graveyard');
    }
    // Bos met sneeuw, Eindo rechts
    else if (buttonTweeClicks == 1 && buttonEenClicks <= 1) {
        GameContainer.style.backgroundImage = 'url(img/EngBosDrie.jpg)';
        Titel.innerHTML = 'Open vlakte';
        button1.disabled = false;
        button2.disabled = true;
        inventoryItem.style.display = 'none';
        Story.innerHTML = 'ik moet niet te ver gaan straks weet ik niet meer hoe ik terug moet.';
        console.log('Level: Bos met sneeuw');
    }
    else if (buttonEenClicks == 10 && buttonTweeClicks == 8) {
        GameContainer.style.backgroundImage = 'url(img/ScaryGarden.jpg)';
        Titel.innerHTML = 'Tuin';
        button1.disabled = true;
        button2.disabled = false;
        inventoryItem.style.display = 'none';
        Story.innerHTML = 'Hier is ook niks te horen of te zien, ik ga terug.';
        console.log('Level: Tuin');
    }
}

function CheckStatus () {
    if (Rounds > 8) {
        GameContainer.style.backgroundImage = 'url(img/dood.jpg)';
        Titel.innerHTML = 'Dood';
        Story.innerHTML = 'Je hebt er te lang over gedaan! De wolven hebben je opgegeten!';
        button2.style.display = 'none';
        button3.style.display = 'none';
        button1.disabled = false;
        button1.innerHTML = 'Begin opnieuw';
        button1.onclick = BeginOpnieuw;
        console.log('Level: Verloren');
    }
}

function PickKey () {
    Item = true;
    inventoryItem.style.display = 'none';
    console.log('Key is opgepakt.');
}

function buttonEen () {
    buttonEenClicks += 1;
    Rounds++;
    if (buttonTweeClicks > 0) {
        buttonTweeClicks -= 1;
        buttonEenClicks -= 1;
    }
    CheckPlaats();
    CheckStatus();
}

function buttonTwee () {
    buttonTweeClicks += 1;
    Rounds++;
    if (buttonEenClicks > 0) {
        buttonTweeClicks -= 1;
        buttonEenClicks -= 1;
    }
    CheckPlaats();
    CheckStatus();
}

function buttonDrie () {
    Rounds = 0;
    Item = false;
    button3.style.display = 'none';

    button1.onclick = buttonEen2;
    button2.onclick = buttonTwee2;
    button3.onclick = buttonDrie2;
    inventoryItem.onclick = PickKey;

    CheckStatus();
    CheckPlaatsPartTwo();
}

function BeginOpnieuw () {
    location.reload();
}

function CheckPlaatsPartTwo () {
    button3.style.display = 'none';
    if (buttonEenClicks2 == 0 && buttonTweeClicks2 == 0) {
        GameContainer.style.backgroundImage = 'url(img/Hallway.jpg)';
        Titel.innerHTML = 'Hal';
        button1.disabled = false;
        button2.disabled = false;
        inventoryItem.style.display = 'none';
        Story.innerHTML = 'Oke mooi, ik ben nu weer binnen. Ik moet weten waar het geluid vandaan komt';
        console.log('Level: hal');
    }
    else if (buttonEenClicks2 == 1 && buttonTweeClicks2 == 0) {
        GameContainer.style.backgroundImage = 'url(img/Bedroom.jpg)';
        Titel.innerHTML = 'Slaapkamer';
        button1.disabled = false;
        button2.disabled = false;
        inventoryItem.style.display = 'none';
        if (Item == true) {
            button3.style.display = 'block';
            button3.innerHTML = 'Verstop!';
        }
        Story.innerHTML = 'hier zie ik ook niks bijzonders.';
        console.log('Level: Slaapkamer');
    }
    else if (buttonEenClicks2 == 2 && buttonTweeClicks2 == 0) {
        GameContainer.style.backgroundImage = 'url(img/ScaryGarden.jpg)';
        Titel.innerHTML = 'Overloop';
        button1.disabled = true;
        button2.disabled = false;
        inventoryItem.style.display = 'none';
        Story.innerHTML = 'ik hoor het geluid weer volgensmij kwam het uit de badkamer';
        console.log('Level: Overloop');
    }
    else if (buttonEenClicks2 == 0 && buttonTweeClicks2 == 1) {
        GameContainer.style.backgroundImage = 'url(img/Kitchen.jpg)';
        Titel.innerHTML = 'badkamer';
        button1.disabled = false;
        button2.disabled = false;
        inventoryItem.style.display = 'none';
        Story.innerHTML = 'Help, er staat een man in onze badkamer.';
        console.log('Level: badkamer');
    }
    else if (buttonEenClicks2 == 0 && buttonTweeClicks2 == 2) {
        GameContainer.style.backgroundImage = 'url(img/LivingRoom.jpg)';
        Titel.innerHTML = 'badkamer';
        button1.disabled = false;
        button2.disabled = true;
        inventoryItem.style.display = 'block';
        inventoryItem.classList.add('InvItem2');
        Story.innerHTML = 'Ik moet hem uitschakelen.';
        console.log('Level: Woonkamer');
        if (Item == true && buttonEenClicks == 1 && buttonTweeClicks == 0) {
            button3.style.display = 'block';
            button3.innerHTML = 'Pistool';
            Story.innerHTML = 'Mooi, ik heb een pistool, ik ga hem uitschakelen.';
            console.log('level: Win Screen')
        }
        
    }
}

function buttonEen2 () {
    buttonEenClicks2 += 1;
    Rounds++;
    if (buttonTweeClicks2 > 0) {
        buttonTweeClicks2 -= 1;
        buttonEenClicks2 -= 1;
    }
    CheckPlaatsPartTwo();
    CheckStatus();
}

function buttonTwee2 () {
    buttonTweeClicks2 += 1;
    Rounds++;
    if (buttonEenClicks2 > 0) {
        buttonTweeClicks2 -= 1;
        buttonEenClicks2 -= 1;
    }
    CheckPlaatsPartTwo();
    CheckStatus();
}

function buttonDrie2 () {
    GameContainer.style.backgroundImage = 'url(img/win.jpg)';
    Titel.innerHTML = 'EINDE';
    button1.disabled = false;
    button2.disabled = false;
    button2.style.display = 'none';
    button1.innerHTML = 'Speel opnieuw';
    button1.onclick = BeginOpnieuw;
    inventoryItem.style.display = 'block';
    button3.style.display = 'none';
    Story.innerHTML = 'Je hebt gewonnen! De dief kan je hier niet vinden!';
    console.log('Level: Win Screen');
}

function inventoryItem2 () {
    inventoryItem2.style.display = 'none';
    Item = true;
}