//Getting the elements required 
const count = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const submit = document.getElementById('submit');
const likes = document.querySelector('.likes');
const list = document.getElementById('list')
const comment = document.getElementById('comment-input');

//Code for interval counter and plus and minus buttons

let countRunning = true;
let likeCount ={};

function counting() {
    if (countRunning === true)
    count.innerHTML++
}

let interval = setInterval(counting, 1000);

document.addEventListener('DOMContentLoaded', () => {
    interval;
}) 

minus.addEventListener('click', () => {
    count.innerHTML--;  
});

plus.addEventListener('click', () => {
    count.innerHTML++;     
})

//Code for likes 
heart.addEventListener('click', () => {
    if (likeCount[count.innerHTML]) {
        const li = document.querySelector(`[data-number="${count.innerHTML}"]`)
        likeCount[count.innerHTML] += 1
        li.innerHTML = `The number ${count.innerHTML} has been liked ${likeCount[count.innerHTML]} times`
    } else {
        likeCount[count.innerHTML] = 1
        const li = document.createElement('li')
        li.dataset.number = count.innerHTML
        li.innerHTML = `The number ${count.innerHTML} has been liked 1 time` 
        likes.append(li)
    }    
});  

//Code for pause and resume interval and disable buttons
pause.addEventListener('click', () => {
       if (countRunning === true) {
        countRunning = false;
        pause.innerHTML = 'resume';
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        submit.disabled = true;
       } else {
        countRunning = true;
        pause.innerHTML = 'pause';
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        submit.disabled = false;
       }    
    });
   
//Code for comments
document.querySelector('form').onclick = () => {
    const comments = comment.value;
    const p = document.createElement('p')
    p.innerHTML = comments;
    list.append(p);
    comment.value = '';
    return false;
  }

  //https://www.youtube.com/watch?v=Pa-L5pahqsg

