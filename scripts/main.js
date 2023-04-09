const myImage = document.querySelector('img')

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc = 'images/img-blue.png'){
        myImage.setAttribute('src','images/img-purple.png');
    }else{
        myImage.setAttribute('src','images/img-blue.png');
    }
}