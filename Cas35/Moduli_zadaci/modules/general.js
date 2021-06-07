let generateImage = (src) => {
    let img = document.createElement('img');
    img.src = src;
    img.alt = 'The image could not be loaded';
    img.style.width = '200px';
    img.style.height = '200px';
    return img;
}

export default generateImage;