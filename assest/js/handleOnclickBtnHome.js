const titleHeader = document.querySelector('head title')
const individual = document.querySelector('#individual')
const discover = document.querySelector('#discover')
const zingchart = document.querySelector('#zingchart')
const radio = document.querySelector('#radio')
const singer = document.querySelector('#singer')

let isIndividual = true
let isDiscover = false
let isZingchart = false
let isRadio = false
let isSinger = false
let isZingchartShowAll = false

function removeClassAppContent() {
    if(isIndividual) {
        appContent.classList.remove('on-individual')
        individual.classList.remove('item-active')
    }
    if(isDiscover) {
        appContent.classList.remove('on-discover')
        discover.classList.remove('item-active')
    }
    if(isZingchart) {
        appContent.classList.remove('on-zingchart')
        zingchart.classList.remove('item-active')
    }
    if(isRadio) {
        appContent.classList.remove('on-radio')
        radio.classList.remove('item-active')
    }
    if(isSinger) {
        appContent.classList.remove('on-singer')
        singer.classList.remove('item-active')
    }
    isIndividual = false
    isDiscover = false
    isZingchart = false
    isRadio = false
    isSinger = false
}

individual.onclick =function() {
    if(!isIndividual) {
        removeClassAppContent()
        appContent.classList.add('on-individual')
        isIndividual = true
        individual.classList.add('item-active')
        titleHeader.innerHTML = 'Cá Nhân - Cover | Huỳnh Quốc Bảo'
    }
}
discover.onclick =function() {
    if(!isDiscover) {
        console.log(1)
        removeClassAppContent()
        appContent.classList.add('on-discover')
        isDiscover = true
        discover.classList.add('item-active')
        titleHeader.innerHTML = 'ZingMp3 - Cover | Huỳnh Quốc Bảo'
    }
}
zingchart.onclick =function() {
    if(!isZingchart) {
        removeClassAppContent()
        appContent.classList.add('on-zingchart')
        isZingchart = true
        zingchart.classList.add('item-active')
        titleHeader.innerHTML = 'ZingChart - Cover | Huỳnh Quốc Bảo'
        if(!isZingchartShowAll) {
            setupHeightZingchartList()
            isZingchartShowAll = true
        }
    }
}
radio.onclick =function() {
    if(!isRadio) {
        removeClassAppContent()
        appContent.classList.add('on-radio')
        isRadio = true
        radio.classList.add('item-active')
        titleHeader.innerHTML = 'Radio - Cover | Huỳnh Quốc Bảo'
    }
}
singer.onclick =function() {
    if(!isSinger) {
        removeClassAppContent()
        appContent.classList.add('on-singer')
        isSinger = true
        singer.classList.add('item-active')
        titleHeader.innerHTML = 'Nghệ Sĩ - Cover | Huỳnh Quốc Bảo'
    }
}