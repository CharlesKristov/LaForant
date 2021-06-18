$(function(){
    const aCaret = Array.from(document.querySelectorAll('.a-caret')), caretSidebar = Array.from(document.querySelectorAll('.caret-sidebar')), sidebarDrop = Array.from(document.querySelectorAll('.sidebar-dropdown')), sidebar = document.querySelector('.sidebar-responsive'), burgerRes = document.querySelector('.burger-button'), closeButton = document.querySelector('.sidebar-close');

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

    let a = null;

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

    // cardSysReq();

    // function cardSysReq(){
    //     let titleCard = ['OS', 'PROCESSOR', 'MEMORY', 'GRAPHICS CARD/VGA', 'GRAPHICS MEMORY', 'HARD DRIVE'], contentCard = [
    //         {
    //             'title' : 'MINIMUM',
    //             'subTitle' : '30 FPS',
    //             'os' : 'Windows/7/8/10 64-bit',
    //             'proc' : ['Intel Core 2 Duo E8400', 'Athlon II X2 270'],
    //             'memory' : '4GB',
    //             'vga' : 'Intel HD 4000 or equivalent and higher',
    //             'vram' : '1GB',
    //             'storage': '10GB'
    //         },
    //         {
    //             'title' : 'RECOMMENDED',
    //             'subTitle' : '60 FPS',
    //             'os' : 'Windows/7/8/10 64-bit',
    //             'proc' : ['Intel Core i3-4150', 'AMD A6 6400K'],
    //             'memory' : '4GB',
    //             'vga' : 'Geforce GT 730 and higher',
    //             'vram' : '1GB',
    //             'storage': '10GB'
    //         },
    //         {
    //             'title' : 'HIGH END',
    //             'subTitle' : '30 FPS',
    //             'os' : 'Windows/7/8/10 64-bit',
    //             'proc' : ['Intel Core i5-4460 3.2GHZ', 'AMD FX 8320'],
    //             'memory' : '4GB',
    //             'vga' : 'GTX 1050 Ti and higher',
    //             'vram' : '1GB',
    //             'storage': '10GB'
    //         },
    //     ]
    //     for(let i = 0; i < 3; i++){
    //         $('.body').append($(`
    //         <div class="wrapper-card">
    //             <div class="sub-wrapper-card">
    //                 <div class="title-req">
    //                     <h2>${contentCard[i].title}</h2>
    //                     <h3>${contentCard[i].subTitle}</h3>
    //                 </div>
    //                 <div class="os">
    //                     <h3></h3>
    //                 </div>
    //                 <div class="proc">
    //                     <h3></h3>
    //                 </div>
    //                 <div class="memory">
    //                     <h3></h3>
    //                 </div>
    //                 <div class="vga">
    //                     <h3></h3>
    //                 </div>
    //                 <div class="vga-mem">
    //                     <h3></h3>
    //                 </div>
    //                 <div class="storage">
    //                     <h3></h3>
    //                 </div>
    //             </div>
    //         </div>
    //         `))
    //     }
    //     let subWrapper = $('.sub-wrapper-card');
    //     for(let i = 0; i < $('.wrapper-card').length; i++){
    //         for(let j = 1; j < subWrapper[i].children.length; j++){
                
    //         }
    //     }
    // }

})