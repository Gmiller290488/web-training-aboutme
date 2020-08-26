function getRandomColour() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return [r, g, b];
}

function shouldTextBeWhite(bgColour) {
    let r = (255 - parseInt(bgColour[0])).toString();
    let g = (255 - parseInt(bgColour[1])).toString();
    let b = (255 - parseInt(bgColour[2])).toString();

    return (r * 0.299 + g * 0.587 + b * 0.114 > 149);
            // ? formatRGBValuesToString([255, 255, 255])
            // : formatRGBValuesToString([0, 0, 0]);
}


function formatRGBValuesToString(arr) {
    return "rgb(" + arr[0] + "," + arr[1] + "," + arr[2] + ")";
}

for (let i=0; i<4; i++) {
    let cardImages = ['music', 'dog', 'ball', 'videogames']
    let bgColour = getRandomColour();
    let formattedBgColour = formatRGBValuesToString(bgColour);
    let textIsWhite = shouldTextBeWhite(bgColour); 
    let textColour = textIsWhite ? formatRGBValuesToString([255, 255, 255]) : formatRGBValuesToString([0, 0, 0]);
    let linearBgColour = `linear-gradient(to bottom, ${formattedBgColour} 0%,${formattedBgColour} 30%,${formattedBgColour} 30%,#f8f6f6 30%, #f8f6f6 100%)`;
    document.getElementsByClassName("flip-card-back")[i].style.background = linearBgColour;
    document.getElementsByClassName("flip-card-back")[i].style.color = textColour;
    document.getElementsByClassName("flip-card-front")[i].style.background = formattedBgColour;
    document.getElementsByClassName("flip-card-front")[i].style.backgroundImage = `url('../images/${cardImages[i]}${textIsWhite ? '-white' : '-black'}.png')`;
    document.getElementsByClassName("flip-card-circle-img")[i].style.backgroundImage = `url('../images/${cardImages[i]}${textIsWhite ? '-white' : '-black'}.png')`;
    document.getElementsByClassName("flip-card-front")[i].style.color = textColour;
}
