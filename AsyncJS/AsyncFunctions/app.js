const delayColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.background = color;
            resolve();
        }, delay)
    })
}

async function rainbow() {
    await delayColorChange('red', 1000);
    await delayColorChange('orange', 1000);
    await delayColorChange('yellow', 1000);
    await delayColorChange('green', 1000);
    await delayColorChange('blue', 1000);
    await delayColorChange('indigo', 1000);
    await delayColorChange('violet', 1000);
    return "All done!"
}

async function printRainbow() {
    await rainbow();
    console.log("End of the rainbow!");
}

printRainbow();