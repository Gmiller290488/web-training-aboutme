function getRandomHobbyColour() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return [r, g, b];
}

function getSuitableTextColour(bgColour) {
    console.log(bgColour);
    console.log(bgColour[0], bgColour[1], bgColour[2]);
    let r = (255 - parseInt(bgColour[0])).toString();
    let g = (255 - parseInt(bgColour[1])).toString();
    let b = (255 - parseInt(bgColour[2])).toString();

    return (r * 0.299 + g * 0.587 + b * 0.114) > 149
            ? formatRGBValuesToString([255, 255, 255])
            : formatRGBValuesToString([0, 0, 0]);
}


function formatRGBValuesToString(arr) {
    return "rgb(" + arr[0] + "," + arr[1] + "," + arr[2] + ")";
}

for (let i=0; i<4; i++) {
    let bgColour = getRandomHobbyColour();
    let formattedBgColour = formatRGBValuesToString(bgColour);
    let linearBgColour = `linear-gradient(to bottom, ${formattedBgColour} 0%,${formattedBgColour} 30%,${formattedBgColour} 30%,#f8f6f6 30%, #f8f6f6 100%)`;
    document.getElementsByClassName("grid-item")[i].style.background = linearBgColour;
    document.getElementsByClassName("grid-item")[i].style.color = getSuitableTextColour(bgColour);
}
