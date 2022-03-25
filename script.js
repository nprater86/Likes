var likes = 0;
var numLikes = document.querySelector('#numLikes');

function increaseLikes() {
    likes++;
    numLikes.innerText = likes;
}