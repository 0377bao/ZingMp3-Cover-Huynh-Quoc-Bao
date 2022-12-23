const playbtn = document.querySelector('#play')
const pausebtn = document.querySelector('#pause')
const randombtn = document.querySelector('#randombtn')
const loopbtn = document.querySelector('#loopbtn')
const audio = document.querySelector('.audio')
const playerAvtInfo = document.querySelector('.app__player-info')
const controlsTrackTime = document.querySelector('.app__player-controls-tracktime')
const playerControlVolume = document.querySelector('.app__player-system-volumn')
const playerControlVolumeBar = document.querySelector('.app__player-system-volumnBar')
const PlayerInfoContent = document.querySelector('.app__player-info-content');
const playerAvt = document.querySelector('.app__player-info-avt');
const player = document.querySelector('.app__player');
const playerNamesongs = document.querySelectorAll('.app__player-info-namesong')
const playerNameauthor = document.querySelector('.app__player-info-author')
const playerDuratime = document.querySelector('.app__player-controls-durationtime')
const nextbtn = document.querySelector('#next')
const prevbtn = document.querySelector('#prev')
const playerPopupAvt = document.querySelector('.player__content-avt')
const appSideBar = document.querySelector('.app__sidebar')
const appPopUp = document.querySelector('.app__popup')
const playerPopUpBrandAvt = document.querySelector('.player__popup-brand-avt')
const playerPopupContentList = document.querySelector('.player__popup-list')
const popupBtnDown = document.querySelector('.popup-btn-down')
var isLoop = false;
var isRandom = false;
var currentSong = 0;
const KEY__SETTING__LOAD = 'config';
var appConfig = JSON.parse(localStorage.getItem(KEY__SETTING__LOAD)) || {}
if(appConfig.currentSong) {
    currentSong = appConfig.currentSong;
}
if(appConfig.isRandom) {
    isRandom = appConfig.isRandom;
    randombtn.classList.toggle('btn-active', isRandom)

}
if(appConfig.isLoop) {
    isLoop = appConfig.isLoop;
    loopbtn.classList.toggle('btn-active', isLoop)
}
if(appConfig.volumeValue) {
    playerControlVolume.value = appConfig.volumeValue;
    playerControlVolumeBar.style.width = playerControlVolume.value + '%'
}

var songs = [
    {
        audio: './assest/audio/y2meta.com - Chuyện Cũ Bỏ Qua Remix Chill Ke - Bích Phương ( J02 Remix ) _ Nhạc Chill Ke Tết 2021 Hot Tik Tok (128 kbps).mp3',
        author: 'Bích Phương, J02 Remix',
        title: 'Chuyện Cũ Bỏ Qua Remix',
        thumb: './assest/img/music/chuyencuboqua.webp',
        duratime: '03:20'
    },
    {
        audio: './assest/audio/y2meta.com - Ước Hẹn Đầu Xuân - Giáng Tiên (Duzme Remix) _ Audio Lyrics (128 kbps).mp3',
        author: 'BT Remix',
        title: 'Ước Hẹn Đầu Xuân Remix',
        thumb: './assest/img/music/uochendauxuan.jpg',
        duratime: '02:46'
    },
    {
        audio: './assest/audio/y2meta.com - PHONG DẠ HÀNH - BT x LVT REMIX - (TREND TIKTOK 00_00) - NHẠC THỊNH HÀNH TIKTOK 2022 (128 kbps).mp3',
        author: 'BT Remix',
        title: 'Phong Dạ Hành Remix',
        thumb: './assest/img/music/phongdahanh.jpeg',
        duratime: '04:46'
    },
    {
        audio: './assest/audio/SaoCungDuoc-ThanhDat-8072594.mp3',
        author: 'Thành Đạt',
        title: 'Sao Cũng Được',
        thumb: './assest/img/music/saocungduoc.jpg',
        duratime: '05:19'
    },
    {
        audio: './assest/audio/y2meta.com - CHẠY NGAY ĐI _ RUN NOW _ SƠN TÙNG M-TP _ Official Music Video (128 kbps).mp3',
        author: 'Sơn Tùng - MTP',
        title: 'Chạy Ngay Đi',
        thumb: './assest/img/music/chayngaydi.jpg',
        duratime: '04:33'
    },
    {
        audio: './assest/audio/BenTrenTangLau-TangDuyTan-7412012.mp3',
        author: 'Tăng Duy Tân',
        title: 'Bên Trên Tầng Lầu',
        thumb: './assest/img/music/bentrentanglau.jpg',
        duratime: '03:04'
    },
    {
        audio: './assest/audio/ChangTraiCuaEm-DuyVanPhamACV-8374089.mp3',
        author: 'Phạm Văn Duy, ACV',
        title: 'Chàng Trai Của Em',
        thumb: './assest/img/music/changtraicuaem.jpg',
        duratime: '03:49'
    },
    {
        audio: './assest/audio/ChuyenDoiTa-EmceeLDaLAB-7120974.mp3',
        author: 'Emcee LDaLAB',
        title: 'Chuyện Tình Đôi Ta',
        thumb: './assest/img/music/chuyendoita.jpg',
        duratime: '03:28'
    },
    {
        audio: './assest/audio/cuoicungthi.mp3',
        author: 'Jack',
        title: 'Cuối Cùng Thì',
        thumb: './assest/img/music/cuoicungthi.jpeg',
        duratime: '03:40'
    },
    {
        audio: './assest/audio/CuoiHongChotNha-DuyenKendyDoThanhDuyNH4T-8215885.mp3',
        author: 'Duyên Kendy, Đỗ Thanh Duy, NH4T',
        title: 'Cưới Hông Chốt Nha',
        thumb: './assest/img/music/cuoihongchotnha.jpg',
        duratime: '03:56'
    },
    {
        audio: './assest/audio/CuoiVoMienTay-HuynhJamesPjnboys-8268356.mp3',
        author: 'Huỳnh James, Pjnboys',
        title: 'Cưới Vợ Miền Tây',
        thumb: './assest/img/music/cuoivomientay.jpg',
        duratime: '03:38'
    },
    {
        audio: './assest/audio/DeVuong-DinhDungACV-7121634.mp3',
        author: 'Đình Dũng, ACV',
        title: 'Đế Vương',
        thumb: './assest/img/music/devuong.jpg',
        duratime: '04:22'
    },
    {
        audio: './assest/audio/DuBaoThoiTietHomNayMua-GREYD-8255553.mp3',
        author: 'GREYD',
        title: 'Dự Báo Thời Tiết Hôm Nay Mưa',
        thumb: './assest/img/music/dubaothoitiethomnaymua.jpg',
        duratime: '04:41'
    },
    {
        audio: './assest/audio/EmNenDungLaiLofiVersion-KhangViet-7825743.mp3',
        author: 'Khang Việt',
        title: 'Em Nên Dừng Lại',
        thumb: './assest/img/music/emnendunglai.jpg',
        duratime: '05:10'
    },
    {
        audio: './assest/audio/haytraochoanh.mp3',
        author: 'Sơn Tùng - MTP, Snopp Dogg',
        title: 'Hãy Trao Cho Anh',
        thumb: './assest/img/music/haytraochoanh.jpg',
        duratime: '04:05'
    },
    {
        audio: './assest/audio/KhongSaoEmA-DinhTungHuy-6978623.mp3',
        author: 'Đình Tùng Huy',
        title: 'Không Sao Em À',
        thumb: './assest/img/music/khongsaoema.jpg',
        duratime: '05:00'
    },
    {
        audio: './assest/audio/KhongTronVenNua-ChauKhaiPhongACV-7197914.mp3',
        author: 'Châu Khải Phong, ACV',
        title: 'Không Trọn Vẹn Nửa',
        thumb: './assest/img/music/khongtronvennua.jpg',
        duratime: '05:07'
    },
    {
        audio: './assest/audio/MatBaoLauDeQuenMotNguoi-QuangTrungAiPhuong-8365570.mp3',
        author: 'Quang Trung, Ái Phương',
        title: 'Mất Bao Lâu Để Quên Một Người',
        thumb: './assest/img/music/matbaolaudequenmotnguoi.jpg',
        duratime: '05:15'
    },
    {
        audio: './assest/audio/NguoiTinhMuaDong-DucPhucMONODTAP-8343704.mp3',
        author: 'Đức Phúc, MONO, DTAP',
        title: 'Người Tình Mùa Đông',
        thumb: './assest/img/music/nguoitinhmuadong.jpg',
        duratime: '03:42'
    },
    {
        audio: './assest/audio/PhaiChiaTayThoi-TuanHung-5566949.mp3',
        author: 'Tuấn Hưng',
        title: 'Phải Chia Tay Thôi',
        thumb: './assest/img/music/phaichiataythoituanhung.jpg',
        duratime: '05:13'
    },
    {
        audio: './assest/audio/TamLongSon-HKray-7160658.mp3',
        author: 'HKray',
        title: 'Tấm Lòng Son',
        thumb: './assest/img/music/tamlongson.jpg',
        duratime: '04:40'
    },
    {
        audio: './assest/audio/ThuyenQuyenAmRemix-DieuKien-7805775.mp3',
        author: 'Am',
        title: 'Thuyền Quyên Remix',
        thumb: './assest/img/music/thuyenquyen.jpg',
        duratime: '03:31'
    },
    {
        audio: './assest/audio/TongPhu-KeyoVietNam-7802406.mp3',
        author: 'Keyo',
        title: 'Tòng Phu',
        thumb: './assest/img/music/tongphu.jpg',
        duratime: '04:54'
    },
    {
        audio: './assest/audio/TrotTraoDuyen-NB3HoaiBao-8246273.mp3',
        author: 'NB3 Hoài Bảo',
        title: 'Trót Trao Duyên',
        thumb: './assest/img/music/trottraoduyen.jpg',
        duratime: '04:43'
    },
    {
        audio: './assest/audio/Vaicaunoicokhiennguoithaydoi-GREYDDoanTheLanTlinh-7533673.mp3',
        author: 'GREYD, Đoàn Thế Lan, TLinh',
        title: 'Vài Câu Nói Có Khiến Người Thay Đổi',
        thumb: './assest/img/music/vaicaunoicokhiennguoithaydoi.jpg',
        duratime: '03:45'
    },
    {
        audio: './assest/audio/VeTinh-HIEUTHUHAIHoangTonKewtiie-7730914.mp3',
        author: 'HIEUTHUHAI, Hoàng Tôn',
        title: 'Vệ Tinh',
        thumb: './assest/img/music/vetinh.jpg',
        duratime: '03:39'
    },
    {
        audio: './assest/audio/WaitingForYou-MONOOnionn-7733882.mp3',
        author: 'MoNo',
        title: 'WaitingForYou',
        thumb: './assest/img/music/waitingforyou.jpg',
        duratime: '04:25'
    },
]

const lecngthMS = songs.length;

function setConfig(key, value) {
    appConfig[key] = value;
    localStorage.setItem(KEY__SETTING__LOAD, JSON.stringify(appConfig));
}

function loadData() {
    var musicList = document.querySelector('.individual__songs-list-lists')
    const html = songs.map(function(song, index) {
        return `
        <div class="individual__songs-list-item list-item-hover" valueindex="${index}">
            <div class="individual__songs-list-brand">
                <div class="individual__songs-list-avt" style="background: url(${song.thumb}) no-repeat center /cover;">
                    <i class="fa-solid fa-play avt-play icon-hover"></i>
                    <img class="avtactiveonplay" style="background: url(./assest/img/logo/songnhac2.gif) no-repeat center /cover"></img>
                    <div class="avt-background-hover"></div>
                </div>
                <div class="individual__songs-list-writer">
                    <span class="individual__songs-list-name">${song.title}</span>
                    <a href="#" class="individual__songs-list-author stoppropagation">${song.author}</a>
                </div>
            </div>

            
            <div class="individual__songs-list-option"> 
                <i class="fa-solid fa-heart individual__songs-list-icon heart-favourite icon-hover icon-hover stoppropagation"></i>
                <i class="fa-solid fa-microphone individual__songs-list-icon icon-hover icon-hover stoppropagation"></i>
                <i class="fa-solid fa-ellipsis-vertical individual__songs-list-icon icon-hover icon-menu-horizontal icon-hover stoppropagation"></i>
                <span class="individual__songs-list-time">${song.duratime}</span>
            </div>
        </div>
        `
    })

    musicList.innerHTML = `<div class="individual__songs-list-descrip">
        <span class="individual__songs-list-title">DANH SÁCH CÁC BÀI HÁT</span>
        <span class="individual__songs-list-title hiden-on-mobile">TÙY CHỌN</span>
    </div>` + html.join('');
    playerPopupContentList.innerHTML = html.join('');
}

loadData();

function loadAppPlayer() {
    playerAvt.style.background = `url(${songs[currentSong].thumb}) no-repeat center /cover`
    for (const namesong of playerNamesongs) {
        namesong.innerHTML = `${songs[currentSong].title}`
    }
    playerNameauthor.innerHTML = `${songs[currentSong].author}`
    audio.src = `${songs[currentSong].audio}`
    playerDuratime.innerHTML = `${songs[currentSong].duratime}`
    const addActives = document.querySelectorAll(`.individual__songs-list-item[valueindex = "${currentSong}"`)
    for (const addActive of addActives) {
        addActive.classList.add('active')
    }
}

loadAppPlayer();

function loadPlayerPopupBrand() {
    playerPopUpBrandAvt.style.background = `url(${songs[currentSong].thumb}) no-repeat center /cover`
    document.querySelector('.player__popup-brand-namesong').innerHTML = `${songs[currentSong].title}`
    document.querySelector('.player__popup-brand-author').innerHTML = `${songs[currentSong].author}`
    const randomPersonLike  = Math.floor(Math.random() * 1000)
    document.querySelector('.player__popup-brand-personlike').innerHTML = `${randomPersonLike} người yêu thích`
}

loadPlayerPopupBrand()

function setupCurentSong() {
    const actives = document.querySelectorAll('.active')
    for (const active of actives) {
        active.classList.remove('active')
    }
    loadAppPlayer()
    loadPlayerPopupBrand()
    audio.currentTime = 0;
    audio.play()
}

function inToOverView() {
    document.querySelector('.active').scrollIntoView({
        behevior: 'smooth',
        block: 'nearest'
    })
}

inToOverView()

var listItemMusics = document.querySelectorAll('.individual__songs-list-item');
var listItemMusicsAudioOnplay = document.querySelectorAll(`.individual__songs-list-item[valueindex = "${currentSong}"`)

function updateListItemAudioOnPlay() {
    listItemMusicsAudioOnplay = document.querySelectorAll(`.individual__songs-list-item[valueindex = "${currentSong}"`)
}

function removeClassAudioOnplay() {
    for (const itemaudio of listItemMusicsAudioOnplay) {
        itemaudio.classList.remove('audio-onplay')
    }
}

function addClassAudioOnplay() {
    for (const itemaudio of listItemMusicsAudioOnplay) {
        itemaudio.classList.add('audio-onplay')
    }
}

function handleOnclickItemMusic() {
    for (const itemmusic of listItemMusics) {
        itemmusic.onclick = function(e) {
            removeClassAudioOnplay()
            currentSong = itemmusic.getAttribute('valueindex');
            updateListItemAudioOnPlay()
            setupCurentSong()
            setConfig('currentSong', currentSong)
        }
    }
}

handleOnclickItemMusic()

function nextMusic() {
    if(!isRandom) {
        removeClassAudioOnplay()
        if(currentSong == lecngthMS - 1) {
            currentSong = 0;
        }else {
            currentSong++;
        }
        updateListItemAudioOnPlay()
        setupCurentSong();
    }else {
        handleRandomMusic();
    }
    setConfig('currentSong', currentSong)
}

function handleNextPrevMusic() {
    nextbtn.onclick = function() {
        nextMusic()
    }
    prevbtn.onclick = function(e) {
        if(!isRandom) {
            removeClassAudioOnplay()
            if(currentSong == 0) {
                currentSong = lecngthMS - 1;
            }else {
                currentSong--;
            }
            updateListItemAudioOnPlay()
            setupCurentSong()
        }else {
            handleRandomMusic();
        }
        setConfig('currentSong', currentSong)
    }
}

handleNextPrevMusic()

function handleBtnControlOnclick() {
    playbtn.onclick = function() {
        audio.play();
    }

    pausebtn.onclick = function() {
        audio.pause();
    }

    randombtn.onclick = function() {
        if(isRandom) {
            randombtn.classList.remove('btn-active');
            isRandom = false;
        }else {
            randombtn.classList.add('btn-active');
            isRandom = true;
        }
        setConfig('isRandom', isRandom);
    }

    loopbtn.onclick = function() {
        if(isLoop) {
            loopbtn.classList.remove('btn-active');
            isLoop = false;
        }else {
            loopbtn.classList.add('btn-active');
            isLoop = true;
        }
        setConfig('isLoop', isLoop);
    }
}

handleBtnControlOnclick();

audio.ontimeupdate = function() {
    const progressValue =  Math.floor(audio.currentTime / audio.duration * 100);
    if(progressValue) {
        appPlayerControlsProgress.value = progressValue;
        appPlayerControlsProgressBar.style.width = progressValue + '%';
    }
    const minite = Math.floor((this.currentTime / 60));
    const second = Math.floor((this.currentTime % 60));
    if(second <= 9) {
        controlsTrackTime.innerText = '0' + minite + ':' + '0' + second
    }else
        controlsTrackTime.innerText = '0' + minite + ':' + second
}

function randomIndex() {
    const randomtemp = Math.floor(Math.random() *songs.length);
    if(randomtemp === currentSong)  randomIndex()
    else return randomtemp
}

function handleRandomMusic() {
    removeClassAudioOnplay()
    currentSong = randomIndex()
    updateListItemAudioOnPlay()
    setupCurentSong()
}

audio.onended = function() {
    if(isLoop) audio.play()
    else nextMusic()
}

appPlayerControlsProgress.oninput = function() {
    audio.ontimeupdate = function() {
    }
    appPlayerControlsProgressBar.style.width = this.value + '%';
    const minite = Math.floor((appPlayerControlsProgress.value / 100 * audio.duration) / 60);
    const second = Math.floor((appPlayerControlsProgress.value / 100 * audio.duration) % 60);
    if(second <= 9) {
        controlsTrackTime.innerText = '0' + minite + ':' + '0' + second
    }else
        controlsTrackTime.innerText = '0' + minite + ':' + second
}

appPlayerControlsProgress.onchange = function() {
    if(audio.currentTime) {
        audio.currentTime = Math.floor(this.value / 100 * audio.duration);
    }
    audio.ontimeupdate = function() {
        const progressValue =  Math.floor(audio.currentTime / audio.duration * 100);
        if(progressValue) {
            appPlayerControlsProgress.value = progressValue;
            appPlayerControlsProgressBar.style.width = progressValue + '%';
        }else {
            appPlayerControlsProgress.value = 0;
            appPlayerControlsProgressBar.style.width = 0 + '%';
        }
        const minite = Math.floor((this.currentTime / 60));
        const second = Math.floor((this.currentTime % 60));
        if(second <= 9) {
            controlsTrackTime.innerText = '0' + minite + ':' + '0' + second
        }else
            controlsTrackTime.innerText = '0' + minite + ':' + second
    }
    audio.play();
    playbtn.classList.add('dis-none')
    pausebtn.classList.remove('dis-none')
    playerAvtInfo.classList.add('app__player-info--play')
}

playerControlVolume.oninput = function() {
    audio.volume = this.value / 100;
    playerControlVolumeBar.style.width = this.value + '%'
    audio.play();
    setConfig('volumeValue', this.value)
}

audio.onplay = function() {
    spanani.style.backgroundImage = 'url(https://i.pinimg.com/originals/b0/06/7a/b0067ade5e832d2aefec8ee9bda50fdc.gif)'
    playbtn.classList.add('dis-none')
    pausebtn.classList.remove('dis-none')
    playerAvtInfo.classList.add('app__player-info--play')
    playerPopUpBrandAvt.classList.add('app__player-info--play')
    PlayerInfoContent.style.animation = 'showNameSong linear 3s infinite'
    playerAvt.classList.remove('avt-off')
    playerPopUpBrandAvt.classList.remove('avt-off')
    addClassAudioOnplay()
}

audio.onpause = function() {
    spanani.style.backgroundImage = 'url(http://cuuam.gosu.vn/home/static/uploads/icon-bai-viet/nam-moi/mualan.gif)'
    playbtn.classList.remove('dis-none')
    pausebtn.classList.add('dis-none')
    playerAvtInfo.classList.remove('app__player-info--play')
    playerPopUpBrandAvt.classList.remove('app__player-info--play')
    PlayerInfoContent.style.animation = 'unset'
    playerAvt.classList.add('avt-off')
    playerPopUpBrandAvt.classList.add('avt-off')
    removeClassAudioOnplay()
}

var stopPropagations = document.querySelectorAll('.stoppropagation');

function stopPropagation() {
    for (const item of stopPropagations) {
        item.onclick = function(e) {
            e.stopPropagation();
        }
    }
}

stopPropagation()

player.onclick = function() {
    appPopUp.style.top = 0;
    function setupHeightplayerPopupContentList() {
        const heightPlayercontent = document.querySelector('.player__popup-songs').clientHeight
        const heightPlayercontenttitle = document.querySelector('.player__popup-songs-title').offsetHeight
        playerPopupContentList.style.height = (heightPlayercontent - heightPlayercontenttitle - 50) + 'px'
    }
    setupHeightplayerPopupContentList()
    appPopUp.classList.add('on-popup')
}

popupBtnDown.onclick = function() {
    appPopUp.style.top = '100%';
    appPopUp.classList.remove('on-popup')
}