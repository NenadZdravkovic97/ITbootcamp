let generateImage = (src) => {
    let img = document.createElement('img');
    img.src = src;
    return img;
}

export {generateImage}