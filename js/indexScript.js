// Constants
const cardImages = ['music', 'dog', 'ball', 'videogames'];
const cardBack = "card-back";
const cardFront = "card-front";
const cardCircleImg = "card-circle-img"
const offWhiteColourString = "#f8f6f6";

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
}

function formatRGBValuesToString(arr) {
    return "rgb(" + arr[0] + "," + arr[1] + "," + arr[2] + ")";
}

function formatImageUrl(cardImage, textColourString) {
    return `url('../images/${cardImage}${textColourString}.png')`
}

function setColours(gradientColour, backgroundColour, textColour, imageUrl, index) {
    document.getElementsByClassName(cardBack)[index].style.background = gradientColour;
    document.getElementsByClassName(cardBack)[index].style.color = textColour;
    document.getElementsByClassName(cardFront)[index].style.background = backgroundColour;
    document.getElementsByClassName(cardFront)[index].style.backgroundImage = imageUrl;
    document.getElementsByClassName(cardCircleImg)[index].style.backgroundImage = imageUrl;
}

function generateColours() {
    for (let i=0; i<4; i++) {
        let bgColour = getRandomColour();
        let formattedBackgroundColour = formatRGBValuesToString(bgColour);
        let textIsWhite = shouldTextBeWhite(bgColour); 
        let textColour = textIsWhite ? formatRGBValuesToString([255, 255, 255]) : formatRGBValuesToString([0, 0, 0]);
        let formattedGradientBackgroundColour = `linear-gradient(to bottom, ${formattedBackgroundColour} 0%, ${formattedBackgroundColour} 30%, ${offWhiteColourString} 30%, ${offWhiteColourString} 100%)`;
        setColours(formattedGradientBackgroundColour, formattedBackgroundColour, textColour, formatImageUrl(cardImages[i], (textIsWhite ? '-white' : '-black')), i)
    }
}

generateColours();
