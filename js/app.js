document.querySelectorAll('.slider').forEach((n, i)  =>{
    window[`slider${i + 1 }`] =new Swiper(n,{
        freeMode:true,
        centredslides:true,
        direction: 'vertical' ,
        mousewheel: true,
        slidesPerView:1.75,
        slidesOffisetBefore:-125
    })
})
bindSwipers(slider1, slider2, slider3, slider4)