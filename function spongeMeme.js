// function spongeMeme 



function spongeMeme(sentence) {
    let res = '';
    for (let i = o; i < sentence.length; i++) {
        res += (i % 2) ? sentence[i].toLowerCare() : sentence[i].toUpperCase();
    }
    return res;
}

console.log(sentence("stop Making spongebob Memes!"))



// function getRectangleString(w, h) {
//     const rn = "\r\n";
//     const tb = '*'.repeat(w) + rn;
//     const center = (w > 1) ? ('*' + ' '.repeat(w - 2) + '*' + rn).repeat(h - 2) : '';
//     return h > 1 ? (tb + center + tb) : tb.repeat(h);
// }