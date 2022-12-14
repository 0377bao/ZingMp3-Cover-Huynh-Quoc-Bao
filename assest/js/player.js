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
const rootStyle = document.documentElement.style
var isLoop = false;
var isRandom = false;
var currentSong = 0;
var colorIsBackground = true;
var indexItemTheme = 12

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
        audio: './assest/audio/y2meta.com - T???t B??nh An - Hana C???m Ti??n x DN Team Remix _ m???t n??m c?? ???? qua c??ng nhau ????n n??m m???i b??nh an (128 kbps).mp3',
        author: 'Hana C???m Ti??n, DN Team',
        title: 'T???t B??nh An Remix',
        thumb: './assest/img/music/tetbinhan.jpg',
        duratime: '04:01'
    },
    {
        audio: './assest/audio/y2meta.com - Chuy???n C?? B??? Qua Remix Chill Ke - B??ch Ph????ng ( J02 Remix ) _ Nh???c Chill Ke T???t 2021 Hot Tik Tok (128 kbps).mp3',
        author: 'B??ch Ph????ng, J02 Remix',
        title: 'Chuy???n C?? B??? Qua Remix',
        thumb: './assest/img/music/chuyencuboqua.webp',
        duratime: '03:20'
    },
    {
        audio: './assest/audio/y2meta.com - ?????c H???n ?????u Xu??n - Gi??ng Ti??n (Duzme Remix) _ Audio Lyrics (128 kbps).mp3',
        author: 'BT Remix',
        title: '?????c H???n ?????u Xu??n Remix',
        thumb: './assest/img/music/uochendauxuan.jpg',
        duratime: '02:46'
    },
    {
        audio: './assest/audio/y2meta.com - PHONG D??? H??NH - BT x LVT REMIX - (TREND TIKTOK 00_00) - NH???C TH???NH H??NH TIKTOK 2022 (128 kbps).mp3',
        author: 'BT Remix',
        title: 'Phong D??? H??nh Remix',
        thumb: './assest/img/music/phongdahanh.jpeg',
        duratime: '04:46'
    },
    {
        audio: './assest/audio/SaoCungDuoc-ThanhDat-8072594.mp3',
        author: 'Th??nh ?????t',
        title: 'Sao C??ng ???????c',
        thumb: './assest/img/music/saocungduoc.jpg',
        duratime: '05:19'
    },
    {
        audio: './assest/audio/y2meta.com - CH???Y NGAY ??I _ RUN NOW _ S??N T??NG M-TP _ Official Music Video (128 kbps).mp3',
        author: 'S??n T??ng - MTP',
        title: 'Ch???y Ngay ??i',
        thumb: './assest/img/music/chayngaydi.jpg',
        duratime: '04:33'
    },
    {
        audio: './assest/audio/BenTrenTangLau-TangDuyTan-7412012.mp3',
        author: 'T??ng Duy T??n',
        title: 'B??n Tr??n T???ng L???u',
        thumb: './assest/img/music/bentrentanglau.jpg',
        duratime: '03:04'
    },
    {
        audio: './assest/audio/ChangTraiCuaEm-DuyVanPhamACV-8374089.mp3',
        author: 'Ph???m V??n Duy, ACV',
        title: 'Ch??ng Trai C???a Em',
        thumb: './assest/img/music/changtraicuaem.jpg',
        duratime: '03:49'
    },
    {
        audio: './assest/audio/ChuyenDoiTa-EmceeLDaLAB-7120974.mp3',
        author: 'Emcee LDaLAB',
        title: 'Chuy???n T??nh ????i Ta',
        thumb: './assest/img/music/chuyendoita.jpg',
        duratime: '03:28'
    },
    {
        audio: './assest/audio/cuoicungthi.mp3',
        author: 'Jack',
        title: 'Cu???i C??ng Th??',
        thumb: './assest/img/music/cuoicungthi.jpeg',
        duratime: '03:40'
    },
    {
        audio: './assest/audio/CuoiHongChotNha-DuyenKendyDoThanhDuyNH4T-8215885.mp3',
        author: 'Duy??n Kendy, ????? Thanh Duy, NH4T',
        title: 'C?????i H??ng Ch???t Nha',
        thumb: './assest/img/music/cuoihongchotnha.jpg',
        duratime: '03:56'
    },
    {
        audio: './assest/audio/CuoiVoMienTay-HuynhJamesPjnboys-8268356.mp3',
        author: 'Hu???nh James, Pjnboys',
        title: 'C?????i V??? Mi???n T??y',
        thumb: './assest/img/music/cuoivomientay.jpg',
        duratime: '03:38'
    },
    {
        audio: './assest/audio/DeVuong-DinhDungACV-7121634.mp3',
        author: '????nh D??ng, ACV',
        title: '????? V????ng',
        thumb: './assest/img/music/devuong.jpg',
        duratime: '04:22'
    },
    {
        audio: './assest/audio/DuBaoThoiTietHomNayMua-GREYD-8255553.mp3',
        author: 'GREYD',
        title: 'D??? B??o Th???i Ti???t H??m Nay M??a',
        thumb: './assest/img/music/dubaothoitiethomnaymua.jpg',
        duratime: '04:41'
    },
    {
        audio: './assest/audio/EmNenDungLaiLofiVersion-KhangViet-7825743.mp3',
        author: 'Khang Vi???t',
        title: 'Em N??n D???ng L???i',
        thumb: './assest/img/music/emnendunglai.jpg',
        duratime: '05:10'
    },
    {
        audio: './assest/audio/haytraochoanh.mp3',
        author: 'S??n T??ng - MTP, Snopp Dogg',
        title: 'H??y Trao Cho Anh',
        thumb: './assest/img/music/haytraochoanh.jpg',
        duratime: '04:05'
    },
    {
        audio: './assest/audio/KhongSaoEmA-DinhTungHuy-6978623.mp3',
        author: '????nh T??ng Huy',
        title: 'Kh??ng Sao Em ??',
        thumb: './assest/img/music/khongsaoema.jpg',
        duratime: '05:00'
    },
    {
        audio: './assest/audio/KhongTronVenNua-ChauKhaiPhongACV-7197914.mp3',
        author: 'Ch??u Kh???i Phong, ACV',
        title: 'Kh??ng Tr???n V???n N???a',
        thumb: './assest/img/music/khongtronvennua.jpg',
        duratime: '05:07'
    },
    {
        audio: './assest/audio/MatBaoLauDeQuenMotNguoi-QuangTrungAiPhuong-8365570.mp3',
        author: 'Quang Trung, ??i Ph????ng',
        title: 'M???t Bao L??u ????? Qu??n M???t Ng?????i',
        thumb: './assest/img/music/matbaolaudequenmotnguoi.jpg',
        duratime: '05:15'
    },
    {
        audio: './assest/audio/NguoiTinhMuaDong-DucPhucMONODTAP-8343704.mp3',
        author: '?????c Ph??c, MONO, DTAP',
        title: 'Ng?????i T??nh M??a ????ng',
        thumb: './assest/img/music/nguoitinhmuadong.jpg',
        duratime: '03:42'
    },
    {
        audio: './assest/audio/PhaiChiaTayThoi-TuanHung-5566949.mp3',
        author: 'Tu???n H??ng',
        title: 'Ph???i Chia Tay Th??i',
        thumb: './assest/img/music/phaichiataythoituanhung.jpg',
        duratime: '05:13'
    },
    {
        audio: './assest/audio/TamLongSon-HKray-7160658.mp3',
        author: 'HKray',
        title: 'T???m L??ng Son',
        thumb: './assest/img/music/tamlongson.jpg',
        duratime: '04:40'
    },
    {
        audio: './assest/audio/ThuyenQuyenAmRemix-DieuKien-7805775.mp3',
        author: 'Am',
        title: 'Thuy???n Quy??n Remix',
        thumb: './assest/img/music/thuyenquyen.jpg',
        duratime: '03:31'
    },
    {
        audio: './assest/audio/TongPhu-KeyoVietNam-7802406.mp3',
        author: 'Keyo',
        title: 'T??ng Phu',
        thumb: './assest/img/music/tongphu.jpg',
        duratime: '04:54'
    },
    {
        audio: './assest/audio/TrotTraoDuyen-NB3HoaiBao-8246273.mp3',
        author: 'NB3 Ho??i B???o',
        title: 'Tr??t Trao Duy??n',
        thumb: './assest/img/music/trottraoduyen.jpg',
        duratime: '04:43'
    },
    {
        audio: './assest/audio/Vaicaunoicokhiennguoithaydoi-GREYDDoanTheLanTlinh-7533673.mp3',
        author: 'GREYD, ??o??n Th??? Lan, TLinh',
        title: 'V??i C??u N??i C?? Khi???n Ng?????i Thay ?????i',
        thumb: './assest/img/music/vaicaunoicokhiennguoithaydoi.jpg',
        duratime: '03:45'
    },
    {
        audio: './assest/audio/VeTinh-HIEUTHUHAIHoangTonKewtiie-7730914.mp3',
        author: 'HIEUTHUHAI, Ho??ng T??n',
        title: 'V??? Tinh',
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

var themeTheme = [
    {
        avt: './assest/img/theme/themetheme/themeavt/xone.jpg',
        nametheme: 'XONE',
        backGround : './assest/img/theme/themetheme/themebackground/xone.jpg',
        textColorMain : 'white',
        textColorSuporting : '#999',
        textColorMainReverse : 'black',
        colorMain : '#d1ab00',
        colorPaner : 'rgb(248, 231, 28)',
        itemHover : 'rgba(255, 255, 255, 0.1)',
        colorBackgroundPopup : '#4F4F4F',
        colorBackgroundAppsidebar : 'rgba(0, 0, 0, 0.2)',
        colorBackgroundHeader : 'rgba(0, 0, 0, 0.5)',
    },
    {
        avt: './assest/img/theme/themetheme/themeavt/zingmusic.jpg',
        nametheme: 'Zing Music',
        backGround : './assest/img/theme/themetheme/themebackground/zma.svg',
        textColorMain : 'white',
        textColorSuporting : '#999',
        textColorMainReverse : 'black',
        colorMain : '#ed2b91',
        colorPaner : '#ed2b91',
        itemHover : 'rgba(255, 255, 255, 0.1)',
        colorBackgroundPopup : '#4b1178',
        colorBackgroundAppsidebar : 'rgba(0, 0, 0, 0.2)',
        colorBackgroundHeader : 'rgba(0, 0, 0, 0.5)',
    },
    {
        avt: './assest/img/theme/themetheme/themeavt/thapeffiec.jpg',
        nametheme: 'Th??p Eiffel',
        backGround : './assest/img/theme/themetheme/themebackground/eiffel.jpg',
        textColorMain : 'white',
        textColorSuporting : '#999',
        textColorMainReverse : 'white',
        colorMain : 'hsl(272deg 70% 59%)',
        colorPaner : 'hsl(272deg 70% 59%)',
        itemHover : 'rgba(255, 255, 255, 0.1)',
        colorBackgroundPopup : '#363636',
        colorBackgroundAppsidebar : 'rgba(0, 0, 0, 0.2)',
        colorBackgroundHeader : 'rgba(0, 0, 0, 0.5)',
    }
]

var themeSinger = [
    {
        avt: './assest/img/theme/themesinger/themeavt/jack.jpg',
        nametheme: 'Jack',
        backGround : './assest/img/theme/themesinger/themebackgound/jack.jpg',
        textColorMain : 'white',
        textColorSuporting : '#bab8b3',
        textColorMainReverse : 'black',
        colorMain : '#D08011',
        colorPaner : '#D08011',
        itemHover : 'rgba(255, 255, 255, 0.1)',
        colorBackgroundPopup : '#605c52',
        colorBackgroundAppsidebar : 'rgba(0, 0, 0, 0.2)',
        colorBackgroundHeader : 'rgba(0, 0, 0, 0.5)',
    },
    {
        avt: './assest/img/theme/themesinger/themeavt/IU.jpg',
        nametheme: 'IU',
        backGround : './assest/img/theme/themesinger/themebackgound/iu.jpg',
        textColorMain : 'black',
        textColorSuporting : '#666',
        textColorMainReverse : 'white',
        colorMain : '#c24793',
        colorPaner : '#c24793',
        itemHover : 'rgba(0, 0, 0, 0.1)',
        colorBackgroundPopup : '#efedeb',
        colorBackgroundAppsidebar : 'rgba(0, 0, 0, 0.1)',
        colorBackgroundHeader : 'rgba(255, 255, 255, 0.8)',
    },
    {
        avt: './assest/img/theme/themesinger/themeavt/ji-chang-wook.jpg',
        nametheme: 'Ji Chang Wook',
        backGround : './assest/img/theme/themesinger/themebackgound/ji-chang-wook.jpg',
        textColorMain : 'black',
        textColorSuporting : '#666',
        textColorMainReverse : 'white',
        colorMain : 'rgb(25 102 178)',
        colorPaner : 'rgb(25 102 178)',
        itemHover : 'rgba(0, 0, 0, 0.1)',
        colorBackgroundPopup : 'rgb(209 237 240)',
        colorBackgroundAppsidebar : 'rgba(0, 0, 0, 0.1)',
        colorBackgroundHeader : 'rgba(255, 255, 255, 0.5)',
    },
    {
        avt: './assest/img/theme/themesinger/themeavt/rose.jpg',
        nametheme: 'Rose',
        backGround : './assest/img/theme/themesinger/themebackgound/rose.jpg',
        textColorMain : 'white',
        textColorSuporting : '#999',
        textColorMainReverse : 'white',
        colorMain : '#3560f5',
        colorPaner : '#3560f5',
        itemHover : 'rgba(255, 255, 255, 0.1)',
        colorBackgroundPopup : '#1a3570',
        colorBackgroundAppsidebar : 'rgba(255, 255, 255, 0.1)',
        colorBackgroundHeader : 'rgba(0, 0, 0, 0.5)',
    }
]

var themeColorBack = [
    {
        avt: './assest/img/theme/themecolorblack/toi.jpg',
        nametheme: 'T???i',
        backGround : '#1e1e1e',
        textColorMain : 'white',
        textColorSuporting : '#999',
        textColorMainReverse : 'white',
        colorMain : '#9b4de0',
        colorPaner : '#9b4de0',
        itemHover : 'rgba(255, 255, 255, 0.1)',
        colorBackgroundPopup : '#333333',
        colorBackgroundAppsidebar : 'rgba(255, 255, 255, 0.05)',
        colorBackgroundHeader : 'rgba(0, 0, 0, 0.5)',
    },
    {
        avt: './assest/img/theme/themecolorblack/tim.jpg',
        nametheme: 'T??m',
        backGround : '#170f23',
        textColorMain : 'white',
        textColorSuporting : '#999',
        textColorMainReverse : 'white',
        colorMain : '#9b4de0',
        colorPaner : '#9b4de0',
        itemHover : 'rgba(255, 255, 255, 0.1)',
        colorBackgroundPopup : '#333333',
        colorBackgroundAppsidebar : 'rgba(255, 255, 255, 0.05)',
        colorBackgroundHeader : 'rgba(0, 0, 0, 0.5)',
    },
    {
        avt: './assest/img/theme/themecolorblack/xanhbien.jpg',
        nametheme: 'Xanh Bi???n',
        backGround : '#162a45',
        textColorMain : 'white',
        textColorSuporting : '#999',
        textColorMainReverse : 'white',
        colorMain : '#3b68ef',
        colorPaner : '#3b68ef',
        itemHover : 'rgba(255, 255, 255, 0.1)',
        colorBackgroundPopup : '#333333',
        colorBackgroundAppsidebar : 'rgba(255, 255, 255, 0.05)',
        colorBackgroundHeader : 'rgba(0, 0, 0, 0.5)',
    },
    {
        avt: './assest/img/theme/themecolorblack/xanhdam.jpg',
        nametheme: 'Xanh ?????m',
        backGround : '#0f1a2e',
        textColorMain : 'white',
        textColorSuporting : '#999',
        textColorMainReverse : 'white',
        colorMain : '#158370',
        colorPaner : '#158370',
        itemHover : 'rgba(255, 255, 255, 0.1)',
        colorBackgroundPopup : '#333333',
        colorBackgroundAppsidebar : 'rgba(255, 255, 255, 0.05)',
        colorBackgroundHeader : 'rgba(0, 0, 0, 0.5)',
    },
]

var themeColorLight = [
    {
        avt: './assest/img/theme/themecolorlight/sang.jpg',
        nametheme: 'S??ng',
        backGround : '#fff',
        textColorMain : 'black',
        textColorSuporting : '#555',
        textColorMainReverse : 'white',
        colorMain : '#8d22c3',
        colorPaner : '#8d22c3',
        itemHover : 'rgba(0, 0, 0, 0.1)',
        colorBackgroundPopup : '#fff',
        colorBackgroundAppsidebar : 'rgba(0, 0, 0, 0.1)',
        colorBackgroundHeader : 'rgba(255, 255, 255, 0.3)',
    },
    {
        avt: './assest/img/theme/themecolorlight/xam.jpg',
        nametheme: 'X??m',
        backGround : 'rgb(229 227 223)',
        textColorMain : 'black',
        textColorSuporting : '#555',
        textColorMainReverse : 'white',
        colorMain : 'rgb(100 70 70)',
        colorPaner : 'rgb(100 70 70)',
        itemHover : 'rgba(0, 0, 0, 0.1)',
        colorBackgroundPopup : '#fff',
        colorBackgroundAppsidebar : 'rgba(0, 0, 0, 0.1)',
        colorBackgroundHeader : 'rgba(255, 255, 255, 0.3)',
    },
    {
        avt: './assest/img/theme/themecolorlight/xanhnhac.jpg',
        nametheme: 'Xanh Nh???c',
        backGround : 'rgb(206 217 217)',
        textColorMain : 'black',
        textColorSuporting : '#555',
        textColorMainReverse : 'white',
        colorMain : 'rgb(14 128 128)',
        colorPaner : 'rgb(14 128 128)',
        itemHover : 'rgba(0, 0, 0, 0.1)',
        colorBackgroundPopup : 'rgb(224 235 235)',
        colorBackgroundAppsidebar : 'rgba(0, 0, 0, 0.1)',
        colorBackgroundHeader : 'rgba(255, 255, 255, 0.3)',
    },
    {
        avt: './assest/img/theme/themecolorlight/hongcanhsen.jpg',
        nametheme: 'H???ng C??nh Xen',
        backGround : 'rgb(249 219 219)',
        textColorMain : 'black',
        textColorSuporting : '#555',
        textColorMainReverse : 'white',
        colorMain : 'rgb(183 36 121)',
        colorPaner : 'rgb(183 36 121)',
        itemHover : 'rgba(0, 0, 0, 0.1)',
        colorBackgroundPopup : 'rgb(253 232 232)',
        colorBackgroundAppsidebar : 'rgba(255, 255, 255, 0.1)',
        colorBackgroundHeader : 'rgba(255, 255, 255, 0.2)',
    },
]

function loadTheme() {
    const themeLists = document.querySelectorAll('.theme__list')
    let temp = 0;
    let html = ''
    html = themeTheme.map(function(value) {
        return `
        <div class="col c-6 m-3 l-2-4">
            <div class="theme__list-item isBackground" indexthemvalue="${temp++}">
                <div class="theme__list-item-avt" style="background: url(${value.avt}) no-repeat center /cover;">
                    <div class="theme__list-item-avt-btn hiden-on-tablet-mobile-im">
                        <span class="theme__list-item-avt-apply btn-apply">??P D???NG</span>
                        <span class="theme__list-item-avt-review">XEM TR?????C</span>
                    </div>
                    <div class="theme__list-item-avt-bgr"></div>
                    <span class="theme__list-item-avt-check">
                        <i class="fa-solid fa-check"></i>
                    </span>
                </div>
                <span class="theme__list-item-name">${value.nametheme}</span>
            </div>
        </div>
        `
    }).join('\n')
    themeLists[0].innerHTML = html

    html = themeSinger.map(function(value) { 
        return `
        <div class="col c-6 m-3 l-2-4">
            <div class="theme__list-item isBackground" indexthemvalue="${temp++}">
                <div class="theme__list-item-avt" style="background: url(${value.avt}) no-repeat center /cover;">
                    <div class="theme__list-item-avt-btn hiden-on-tablet-mobile-im">
                        <span class="theme__list-item-avt-apply btn-apply">??P D???NG</span>
                        <span class="theme__list-item-avt-review">XEM TR?????C</span>
                    </div>
                    <div class="theme__list-item-avt-bgr"></div>
                    <span class="theme__list-item-avt-check">
                        <i class="fa-solid fa-check"></i>
                    </span>
                </div>
                <span class="theme__list-item-name">${value.nametheme}</span>
            </div>
        </div>
        `
    }).join('\n')
    themeLists[1].innerHTML = html

    html = themeColorBack.map(function(value) {
        return `
        <div class="col c-6 m-3 l-2-4">
            <div class="theme__list-item theme__theme-item" indexthemvalue="${temp++}">
                <div class="theme__list-item-avt" style="background: url(${value.avt}) no-repeat center /cover;">
                    <div class="theme__list-item-avt-btn hiden-on-tablet-mobile-im">
                        <span class="theme__list-item-avt-apply btn-apply">??P D???NG</span>
                        <span class="theme__list-item-avt-review">XEM TR?????C</span>
                    </div>
                    <div class="theme__list-item-avt-bgr"></div>
                    <span class="theme__list-item-avt-check">
                        <i class="fa-solid fa-check"></i>
                    </span>
                </div>
                <span class="theme__list-item-name">${value.nametheme}</span>
            </div>
        </div>
        `
    }).join('\n')
    themeLists[2].innerHTML = html

    html = themeColorLight.map(function(value) {
        return `
        <div class="col c-6 m-3 l-2-4">
            <div class="theme__list-item theme__theme-item" indexthemvalue="${temp++}">
                <div class="theme__list-item-avt" style="background: url(${value.avt}) no-repeat center /cover;">
                    <div class="theme__list-item-avt-btn hiden-on-tablet-mobile-im">
                        <span class="theme__list-item-avt-apply btn-apply">??P D???NG</span>
                        <span class="theme__list-item-avt-review">XEM TR?????C</span>
                    </div>
                    <div class="theme__list-item-avt-bgr"></div>
                    <span class="theme__list-item-avt-check">
                        <i class="fa-solid fa-check"></i>
                    </span>
                </div>
                <span class="theme__list-item-name">${value.nametheme}</span>
            </div>
        </div>
        `
    }).join('\n')
    themeLists[3].innerHTML = html
}

loadTheme()

var arrayTheme = ((themeTheme.concat(themeSinger)).concat(themeColorBack)).concat(themeColorLight)

if(appConfig.indexItemTheme) {
    indexItemTheme = appConfig.indexItemTheme
    colorIsBackground = appConfig.colorIsBackground
}

updateTheme()

function setRootStyle(name, value) {
    rootStyle.setProperty(name, value)
} 

function updateTheme() {
    const app = document.querySelector('.app')
    if(!colorIsBackground) {
        app.style.backgroundImage = `url(${arrayTheme[indexItemTheme].backGround})`
        app.style.backgroundColor = `unset`
    }else {
        app.style.backgroundImage = `unset`
        app.style.backgroundColor = `${arrayTheme[indexItemTheme].backGround}`
    }
    setRootStyle('--text-color-main', arrayTheme[indexItemTheme].textColorMain)
    setRootStyle('--text-color-main-reverse', arrayTheme[indexItemTheme].textColorMainReverse)
    setRootStyle('--text-color-suporting', arrayTheme[indexItemTheme].textColorSuporting)
    setRootStyle('--color-main', arrayTheme[indexItemTheme].colorMain)
    setRootStyle('--color-paner', arrayTheme[indexItemTheme].colorPaner)
    setRootStyle('--item-hover', arrayTheme[indexItemTheme].itemHover)
    setRootStyle('--background-color-popup', arrayTheme[indexItemTheme].colorBackgroundPopup)
    setRootStyle('--background-appsidebar', arrayTheme[indexItemTheme].colorBackgroundAppsidebar)
    setRootStyle('--background-header', arrayTheme[indexItemTheme].colorBackgroundHeader)
    if(document.querySelector('.them--active')) {
        document.querySelector('.them--active').classList.remove('them--active')
    }
    document.querySelector(`.theme__list-item[indexthemvalue="${indexItemTheme}"]`).classList.add('them--active')
}

function hidenModal(modal) {
    modal.style.display = 'none'
}

function handleClickTheme() {
    const btnTheme = document.querySelector('.app__content-heading-theme')
    const modal = document.querySelector('.modal')
    const modalBody = modal.querySelector('.modal__body')
    const btncloseModal = document.querySelector('.btn-modal-close')
    modalBody.onclick = function(e) {e.stopPropagation()}

    btnTheme.onclick = function() {
        modal.style.display = 'flex'
    }
    
    btncloseModal.onclick = function() {
        hidenModal(modal)
    }
    
    modal.onclick = function() {
        hidenModal(modal)
    }

    function onclickItemModal() {
        const listItemModal = document.querySelectorAll('.theme__list-item')

        for(let i = 0; i < listItemModal.length; i++) {
            listItemModal[i].onclick = function(e) {
                if(window.innerWidth < 1023) {
                    listItemModal[i].classList.add('btn-apply')
                }
                if(e.target.closest('.btn-apply')) {
                    indexItemTheme = Number(listItemModal[i].getAttribute("indexthemvalue"))
                    if(listItemModal[i].classList.contains("isBackground")) colorIsBackground = false;
                    else colorIsBackground = true;
                    setConfig('indexItemTheme', indexItemTheme.toFixed())
                    setConfig('colorIsBackground', colorIsBackground)
                    setTimeout(function() {
                        updateTheme()
                        hidenModal(modal)
                    }, 200)
                }
            }
        }
    }

    onclickItemModal()
}

handleClickTheme()

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
        <span class="individual__songs-list-title">DANH S??CH C??C B??I H??T</span>
        <span class="individual__songs-list-title hiden-on-mobile">T??Y CH???N</span>
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
    document.querySelector('.player__popup-brand-personlike').innerHTML = `${randomPersonLike} ng?????i y??u th??ch`
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
    if(window.innerWidth > 1029) {
        setTimeout(function() {
            appPopUp.classList.remove('on-popup')
        }, 300)
    }else {
        setTimeout(function() {
            appPopUp.classList.remove('on-popup')
        }, 400)
    }
}