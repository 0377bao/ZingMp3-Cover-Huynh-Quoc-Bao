var list = document.querySelectorAll('.item')
var i = 0;
var indexSinger = 1;
var indexSingerItem = true;
var temp = 1;
var individualHome = document.querySelector('.individual__home')
var spanani = document.querySelector('.animation-span')
var iconLefts = document.querySelectorAll('.icon-direction-left')
var iconRights = document.querySelectorAll('.icon-direction-right')
var appShows = document.querySelectorAll('.app-show')
var appShowContents = document.querySelectorAll('.app-show-content')
var widthCurretnContent = 0;

setInterval(function() {
        list[i].classList.replace('one', 'four');
        i++;
        if(i === list.length - 2) {
            list[i].classList.replace('two', 'one');
            list[i + 1].classList.replace('three', 'two');
            list[0].classList.replace('four', 'three');
        }else if(i === list.length - 1) {
            list[i].classList.replace('two', 'one');
            list[0].classList.replace('three', 'two');
            list[1].classList.replace('four', 'three');
        }else if(i === list.length) {
            list[0].classList.replace('two', 'one');
            list[1].classList.replace('three', 'two');
            list[2].classList.replace('four', 'three');
            i = 0;
        }
        else {
            list[i].classList.replace('two', 'one');
            list[i + 1].classList.replace('three', 'two');
            list[i + 2].classList.replace('four', 'three');
        }
}, 2000)

individualHome.onmousemove = function(e) {
    let x = e.offsetX;
    let y = e.offsetY;
    spanani.style.left = x + 'px';
    spanani.style.top = y + 'px';
}

for(let i = 0; i< appShows.length; i++) {
    iconRights[i].onclick = function() {
        widthCurretnContent += appShowContents[i].clientWidth;
        if(widthCurretnContent > 0) {
            iconLefts[i].classList.add('icon-active');
        }
        if(widthCurretnContent >= appShowContents[i].scrollWidth - appShowContents[i].clientWidth) {
            widthCurretnContent = appShowContents[i].scrollWidth - appShowContents[i].clientWidth;
            iconRights[i].classList.remove('icon-active')
        }
        appShows[i].scrollTo(widthCurretnContent, 0)
    }
    iconLefts[i].onclick = function() {
        widthCurretnContent -= appShowContents[i].clientWidth;
        if(widthCurretnContent < appShowContents[i].scrollWidth - appShowContents[i].clientWidth) {
            iconRights[i].classList.add('icon-active')
        }
        if(widthCurretnContent <= 0) {
            widthCurretnContent = 0;
            iconLefts[i].classList.remove('icon-active');
        }
        appShows[i].scrollTo(widthCurretnContent, 0)
    }
}

function handleOnclickNavigation() {
    const overView = document.querySelector('#overview');
    const song = document.querySelector('#songs');
    const singer = document.querySelector('#singer');
    const playlist = document.querySelector('#playlist');
    const album = document.querySelector('#album');
    const mv = document.querySelector('#mv');
    const wideIndividual = document.querySelector('.wide-individual');
    const curentItemAcitve = overView;

    function removecurentItemAcitve() {
        document.querySelector('.home-item--active').classList.remove('home-item--active');
    }

    function disnoneAllActive() {
        document.querySelector('.individual-music').classList.add('dis-none');
        document.querySelector('.individual-playlist').classList.add('dis-none');
        document.querySelector('.individual-album').classList.add('dis-none');
        document.querySelector('.individual-mv').classList.add('dis-none');
        document.querySelector('.individual-singer').classList.add('dis-none');
    }

    function removeDisnoneAllActive() {
        document.querySelector('.individual-music').classList.remove('dis-none');
        document.querySelector('.individual-playlist').classList.remove('dis-none');
        document.querySelector('.individual-album').classList.remove('dis-none');
        document.querySelector('.individual-mv').classList.remove('dis-none');
        document.querySelector('.individual-singer').classList.remove('dis-none');
    }

    function addHandleOnclick(e) {
        removecurentItemAcitve();
        e.target.classList.add('home-item--active');
        wideIndividual.classList.add('handle-onclick');
        disnoneAllActive();
        document.querySelector(`.${e.target.getAttribute('classonclick')}`).classList.remove('dis-none');
    }

    song.onclick = addHandleOnclick;
    singer.onclick = addHandleOnclick;
    playlist.onclick = addHandleOnclick;
    album.onclick = addHandleOnclick;
    mv.onclick = addHandleOnclick;
    overView.onclick = function(e) {
        removecurentItemAcitve();
        e.target.classList.add('home-item--active');
        wideIndividual.classList.remove('handle-onclick')
        removeDisnoneAllActive();
    };


}

handleOnclickNavigation();