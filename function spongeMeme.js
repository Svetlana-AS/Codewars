// function spongeMeme 



function spongeMeme(sentence) {
    let res = '';
    for (let i = o; i < sentence.length; i++) {
        res += (i % 2) ? sentence[i].toLowerCare() : sentence[i].toUpperCase();
    }
    return res;
}

console.log(sentence("stop Making spongebob Memes!"))