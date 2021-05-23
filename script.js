const slideImage = Array.from(document.querySelectorAll('.slide-image')), detailImage = document.querySelector('.detail-image').children, boardDetail = document.querySelector('.board-text-more');

let count = document.querySelector('.count'), temp = 0, right = document.querySelector('#right'), left = document.querySelector('#left'), 

arr = [
    {
        'title': 'LAFORANT NEW MAP: BREEZE',
        'date': '23/04/21',
        'url': 'https://www.youtube.com/watch?v=HuI3qdaL-jI&ab_channel=VALORANT'
    },
    {
        'title': 'NEW AGENTS REVEAL "ASTRA"',
        'date': '09/03/21',
        'url': 'https://playvalorant.com/en-us/news/dev/astra-from-sketch-to-key-art/'
    }, 
    {
        'title': 'LAFORANT NEW MODE: ESCALATION',
        'date': '16/02/21',
        'url': 'https://playvalorant.com/en-us/news/game-updates/new-valorant-mode-escalation/'
    }
], 

detailNews = [
    {
        'title': 'COMMUNITY SPOTLIGHT #7',
        'date': '14/10/2020',
        'url': 'https://playvalorant.com/en-us/news/announcements/community-spotlight-7/'
    },
    {
        'title': 'NEW AGENTS REVEAL "SKYE"',
        'date': '08/10/2020',
        'url': 'https://www.youtube.com/watch?v=C3QTyMXi-WE&ab_channel=VALORANT'
    },
    {
        'title': 'LAFORANT NEW MAP: ICEBOX',
        'date': '06/10/2020',
        'url': 'https://www.youtube.com/watch?v=EB4vFzY3MWc&ab_channel=VALORANT'
    },
    {
        'title': 'COMMUNITY SPOTLIGHT #6',
        'date': '23/09/2020',
        'url': 'https://playvalorant.com/en-us/news/announcements/community-spotlight-6/'
    },
    {
        'title': 'COMMUNITY SPOTLIGHT #5',
        'date': '11/09/2020',
        'url': 'https://playvalorant.com/en-us/news/announcements/community-spotlight-5/'
    },

];

sliderDetail();
changeImage(temp);

function changeImage(now){
    slideImage.forEach(e => {
        e.style.display = 'none';
    });
    detailImage[0].innerHTML = arr[now].title;
    detailImage[1].innerHTML = arr[now].date;
    slideImage[now].href = arr[now].url;

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

function sliderDetail(){
    detailNews.forEach( e => {
        boardDetail.innerHTML += `<a href="`+e.url+`" target="_blank">`+ e.title +`<span class=text-detail-date>`+ e.date +`</span></a>`
    });
}

