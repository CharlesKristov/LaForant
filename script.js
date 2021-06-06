$(function(){
    const slideImage = Array.from(document.querySelectorAll('.slide-image')), detailImage = document.querySelector('.detail-image').children, boardDetail = document.querySelector('.board-text-more'), aCaret = Array.from(document.querySelectorAll('.a-caret')), caretSidebar = Array.from(document.querySelectorAll('.caret-sidebar')), sidebarDrop = Array.from(document.querySelectorAll('.sidebar-dropdown')), sidebar = document.querySelector('.sidebar-responsive'), burgerRes = document.querySelector('.burger-button'), closeButton = document.querySelector('.sidebar-close');

let count = document.querySelector('.count'), temp = 0, right = document.querySelector('#right'), left = document.querySelector('#left'), a = null, 

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

function sliderDetail(){
    detailNews.forEach( e => {
        $('.board-text-more').append($(`<a href="${e.url}" target="_blank">${e.title}</a><span class=text-detail-date>${e.date}</span></a>`))
    });
}

    const slidesImage = $('.slide-image'), counts = $('.count');

    slidesImage.hide();
    let curr = 0;

    slidesImage.eq(curr).show();
    counts.html(curr + 1);
    $('.detail-image-text').html(arr[curr].title);
    $('.detail-image-date').html(arr[curr].date);

    $('#left').click(()=>{
        slidesImage.eq(curr).hide()
        if(curr == 0){
            curr = 2;
        }else{
            --curr;
        }
        $('.detail-image-text').html(arr[curr].title);
        $('.detail-image-date').html(arr[curr].date);
        counts.html(curr + 1);
        slidesImage.eq(curr).fadeIn();
    })

    $('#right').click(()=>{
        slidesImage.eq(curr).hide()
        if(curr == 2){
            curr = 0
        }else{
            ++curr
        }
        $('.detail-image-text').html(arr[curr].title)
        $('.detail-image-date').html(arr[curr].date)
        counts.html(curr + 1)
        slidesImage.eq(curr).fadeIn()
    })



burgerRes.addEventListener('click', () =>{
    sidebar.style.display = 'flex';
    setTimeout(() => {
        sidebar.children[0].classList.add('show-side');
    }, 200);
})

closeButton.addEventListener('click', () => {
    sidebar.children[0].classList.remove('show-side');
    setTimeout(() => {
        sidebar.style.display = 'none';
    }, 300);
})

window.addEventListener('click', (e) => {
    if(e.target == sidebar){
        sidebar.children[0].classList.remove('show-side');
        setTimeout(() => {
            sidebar.style.display = 'none';
        }, 300);
    }
})


aCaret.forEach((e) => {
    e.addEventListener('click', () => {
        let dropdown = e.closest('.section-content-sidebar').children[1];
        caretSidebar.forEach((element) => {
            element.style.transform = 'rotate(0deg)';
        })
        sidebarDrop.forEach((element) => {
            element.classList.remove('show');
        })
        if(a == e){
            e.children[0].style.transform = 'rotate(0deg)';
            dropdown.classList.remove('show');
            a = null;
        }else{
            e.children[0].style.transform = 'rotate(90deg)';
            dropdown.classList.add('show');
            a = e;
        }
    })
})


})