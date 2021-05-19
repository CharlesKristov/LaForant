const slideImage = Array.from(document.querySelectorAll('.slide-image'));

let count = document.querySelector('.count'), temp = 0, right = document.querySelector('#right'), left = document.querySelector('#left');

changeImage(0);

let arr = [
    {
        'title': 'LAFORANT NEW MAP: BREEZE',
        'date': new Date('04-23-21')
    },
    {
        'title': 'NEW AGENTS "ASTRA"',
        'date': new Date('03-09-21')
    }, 
    {
        'title': 'LAFORANT NEW MODE: ESCALATION',
        'date': new Date('02-16-21')
    }
];

function changeImage(now){
    slideImage.forEach(e => {
        e.style.display = 'none';
    });
    slideImage[now].style.display = 'block';
}

right.addEventListener('click', () =>{
    if(temp + 1 > 2){
        changeImage(0);
        temp = 0;
    }else{
        ++temp;
        changeImage(temp);
    }
    count.innerHTML = temp + 1;
});

left.addEventListener('click', () =>{
    if(temp - 1 < 0){
        changeImage(2);
        temp = 2;
    }else{
        --temp;
        changeImage(temp);
    }
    count.innerHTML = temp + 1;
})
