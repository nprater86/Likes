var likes = [0,0,0];

function increaseLikes(element) {
    if(element.id === 'neilmLikes') {
        likes[0]++;
        element.innerText = likes[0];
    } else if(element.id === 'nicholekLikes'){
        likes[1]++;
        element.innerText = likes[1];
    } else if(element.id === 'jimrLikes') {
        likes[2]++;
        element.innerText = likes[2];
    }
}