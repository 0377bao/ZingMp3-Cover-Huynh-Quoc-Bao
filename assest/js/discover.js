const slideShowDis = document.querySelector('.discover__slide')
const slideItems = document.querySelectorAll('.discover__slide-item')
const btnnextSlide = document.querySelector('.discover__slide-navargation-right')
const btnprevSlide = document.querySelector('.discover__slide-navargation-left')
let i2 = 0
let ifIntervar

function setHeightSlideShowDiscover() {
    slideShowDis.style.height = slideItems[0].offsetHeight + 'px'
}

setHeightSlideShowDiscover()

function nextSlide() {
    if(i2 + 4 == slideItems.length) {
        slideItems[i2].classList.replace('slide-one', 'slide-five')
        slideItems[i2 + 1].classList.replace('slide-two', 'slide-one')
        slideItems[i2 + 2].classList.replace('slide-three', 'slide-two')
        slideItems[i2 + 3].classList.replace('slide-four', 'slide-three')
        slideItems[0].classList.replace('slide-five', 'slide-four')
        i2++;
    }
    else if(i2 + 3 == slideItems.length) {
        slideItems[i2].classList.replace('slide-one', 'slide-five')
        slideItems[i2 + 1].classList.replace('slide-two', 'slide-one')
        slideItems[i2 + 2].classList.replace('slide-three', 'slide-two')
        slideItems[0].classList.replace('slide-four', 'slide-three')
        slideItems[1].classList.replace('slide-five', 'slide-four')
        i2++;
    }else if(i2 + 2 == slideItems.length) {
        slideItems[i2].classList.replace('slide-one', 'slide-five')
        slideItems[i2 + 1].classList.replace('slide-two', 'slide-one')
        slideItems[0].classList.replace('slide-three', 'slide-two')
        slideItems[1].classList.replace('slide-four', 'slide-three')
        slideItems[2].classList.replace('slide-five', 'slide-four')
        i2++;
    }else if(i2 + 1 == slideItems.length) {
        slideItems[i2].classList.replace('slide-one', 'slide-five')
        slideItems[0].classList.replace('slide-two', 'slide-one')
        slideItems[1].classList.replace('slide-three', 'slide-two')
        slideItems[2].classList.replace('slide-four', 'slide-three')
        slideItems[3].classList.replace('slide-five', 'slide-four')
        i2 = 0;;
    }else {
        slideItems[i2].classList.replace('slide-one', 'slide-five')
        slideItems[i2 + 1].classList.replace('slide-two', 'slide-one')
        slideItems[i2 + 2].classList.replace('slide-three', 'slide-two')
        slideItems[i2 + 3].classList.replace('slide-four', 'slide-three')
        slideItems[i2 + 4].classList.replace('slide-five', 'slide-four')
        i2++;
    }
}

function prevSlide() {
    if(i2 == 0) i2 = slideItems.length;
    i2--;
    if(i2 + 4 == slideItems.length) {
        slideItems[i2].classList.replace('slide-five', 'slide-one')
        slideItems[i2 + 1].classList.replace('slide-one', 'slide-two')
        slideItems[i2 + 2].classList.replace('slide-two', 'slide-three')
        slideItems[i2 + 3].classList.replace('slide-three', 'slide-four')
        slideItems[0].classList.replace('slide-four', 'slide-five')
    }else if(i2 + 3 == slideItems.length) {
        slideItems[i2].classList.replace('slide-five', 'slide-one')
        slideItems[i2 + 1].classList.replace('slide-one', 'slide-two')
        slideItems[i2 + 2].classList.replace('slide-two', 'slide-three')
        slideItems[0].classList.replace('slide-three', 'slide-four')
        slideItems[1].classList.replace('slide-four', 'slide-five')
    }else if(i2 + 2 == slideItems.length) {
        slideItems[i2].classList.replace('slide-five', 'slide-one')
        slideItems[i2 + 1].classList.replace('slide-one', 'slide-two')
        slideItems[0].classList.replace('slide-two', 'slide-three')
        slideItems[1].classList.replace('slide-three', 'slide-four')
        slideItems[2].classList.replace('slide-four', 'slide-five')
    }else if(i2 + 1 == slideItems.length) { 
        slideItems[i2].classList.replace('slide-five', 'slide-one')
        slideItems[0].classList.replace('slide-one', 'slide-two')
        slideItems[1].classList.replace('slide-two', 'slide-three')
        slideItems[2].classList.replace('slide-three', 'slide-four')
        slideItems[3].classList.replace('slide-four', 'slide-five')
    }else {
        slideItems[i2].classList.replace('slide-five', 'slide-one')
        slideItems[i2 + 1].classList.replace('slide-one', 'slide-two')
        slideItems[i2 + 2].classList.replace('slide-two', 'slide-three')
        slideItems[i2 + 3].classList.replace('slide-three', 'slide-four')
        slideItems[i2 + 4].classList.replace('slide-four', 'slide-five')
    }
}

function sildeShow() {
    ifIntervar = setInterval(function() {nextSlide()}, 3500)
}

sildeShow()

function handleEvent() {
    window.onresize = function() {
        setHeightSlideShowDiscover()
    }

    function stopNextSlideShow() {
        slideShowDis.onmouseover = function() {
            clearInterval(ifIntervar)
        }

        slideShowDis.onmouseleave = function() {
            sildeShow()
        }
    }

    stopNextSlideShow()

    function nextPrevSlide() {
        btnnextSlide.onclick = function() {
            nextSlide()
        }

        btnprevSlide.onclick = function() {
            prevSlide()
        }
    }

    nextPrevSlide()
}

handleEvent()

function discoverSlideSinger() {
    const appShowsDis = document.querySelectorAll('.discover .app-show')
    const iconLeftsDis = document.querySelectorAll('.discover .icon-direction-left')
    const iconRightsDis = document.querySelectorAll('.discover .icon-direction-right')
    const appShowContentsDis = document.querySelectorAll('.discover .app-show-content')
    let widthCurretnContentDis = [];
    let idIntervalslide = []

    for(let i = 0; i< appShowsDis.length; i++) {
        widthCurretnContentDis[i] = 0
        iconRightsDis[i].onclick = function() {
            widthCurretnContentDis[i] += appShowContentsDis[i].clientWidth;
            if(widthCurretnContentDis[i] > 0) {
                iconLeftsDis[i].classList.remove('dis-none');
            }
            if(widthCurretnContentDis[i] >= appShowContentsDis[i].scrollWidth - appShowContentsDis[i].clientWidth) {
                widthCurretnContentDis[i] = appShowContentsDis[i].scrollWidth - appShowContentsDis[i].clientWidth;
                iconRightsDis[i].classList.add('dis-none')
            }
            appShowsDis[i].scrollTo(widthCurretnContentDis[i], 0)
        }
        iconLeftsDis[i].onclick = function() {
            widthCurretnContentDis[i] -= appShowContentsDis[i].clientWidth;
            if(widthCurretnContentDis[i] < appShowContentsDis[i].scrollWidth - appShowContentsDis[i].clientWidth) {
                iconRightsDis[i].classList.remove('dis-none')
            }
            if(widthCurretnContentDis[i] <= 0) {
                widthCurretnContentDis[i] = 0;
                iconLeftsDis[i].classList.add('dis-none');
            }
            appShowsDis[i].scrollTo(widthCurretnContentDis[i], 0)
        }

        appShowsDis[i].setAttribute('rotateRight', 'true')
        function autoSlide(i) {
            if(appShowsDis[i].getAttribute('rotateRight') === 'true') iconRightsDis[i].click()
            else iconLeftsDis[i].click()
            if(widthCurretnContentDis[i] >= appShowContentsDis[i].scrollWidth - appShowContentsDis[i].clientWidth) {
                appShowsDis[i].setAttribute('rotateRight', 'false')
            }
            if(widthCurretnContentDis[i] <= 0) {
                appShowsDis[i].setAttribute('rotateRight', 'true')
            }
        }

        setTimeout(function() {
            idIntervalslide[i] = setInterval(function() {
                autoSlide(i)
            }, 3500)
        }, i * 1000)

        function stopSlideShowSinger() {
            appShowsDis[i].onmouseover = function() {
                clearInterval(idIntervalslide[i])
            }
    
            appShowsDis[i].onmouseleave = function() {
                idIntervalslide[i] = setInterval(function() {
                    autoSlide(i)
                }, 5000)
            }
        }
    
        stopSlideShowSinger()
    }
}

discoverSlideSinger()

function setupHeightZingchartList() {
    const zingchartList = document.querySelector('.zingchart__list')
    const zingchartListItem = document.querySelector('.zingchart__list-item')
    const zingchartBTn = document.querySelector('.zingchart__btn-add')

    zingchartList.style.maxHeight = (zingchartListItem.offsetHeight * 10) + 'px'

    zingchartBTn.onclick = function() {
        zingchartList.style.maxHeight = 'unset'
        zingchartBTn.classList.add('dis-none')
    }
}

setupHeightZingchartList()
