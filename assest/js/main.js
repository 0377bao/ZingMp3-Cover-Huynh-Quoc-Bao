const appSidebarChoose = document.querySelector('.app__sidebar-choose')
const sideBar = document.querySelector('.app__sidebar')

appSidebarChoose.addEventListener('scroll',function() {
    if(appSidebarChoose.scrollTop === 0) {
        appSidebarChoose.classList.remove('hot-mask')
    }else {
        appSidebarChoose.classList.add('hot-mask')
    }
})

const appContentHeader = document.querySelector('.app__content-heading');
const appContent = document.querySelector('.app__content');
appContent.addEventListener('scroll',function() {
    if(appContent.scrollTop === 0) {
        appContentHeader.classList.remove('heading-scroll')
    }else {
        appContentHeader.classList.add('heading-scroll')
    }
})

const appPlayerControlsProgress = document.querySelector('.progress')
const appPlayerControlsProgressBar = document.querySelector('.progress-bar')
appPlayerControlsProgress.oninput = function() {
    appPlayerControlsProgressBar.style.width = this.value + '%';
}

function toast() {
    var listupdate = document.querySelectorAll('.updating');

    function showToast() {
        console.log('test')
    }

    for (const update of listupdate) {
        update.onclick =  function() {
            const toast = document.querySelector('#toast');
            const toastChild = document.createElement('div');
            toastChild.classList.add('toast');
            toastChild.innerHTML = `
                <div class="toast__icon--notify"><i class="fa-solid fa-bell"></i></div>
                <div class="toast-message">
                    <span class="toast-message-title">Thông Báo</span>
                    <span class="toast-message-description">Tính Năng Đang Trong Quá Trình Hoàn Thiện, Xin Cảm Ơn!</span>
                </div>
                <div class="toast__icon--close"><i class="fa-solid fa-xmark"></i></div>
            `
            toast.appendChild(toastChild);
            const id = setTimeout(() => {
                toast.removeChild(toastChild);
            }, 6500);
            
            toastChild.onclick = e => {
                if(e.target.closest('.toast__icon--close')) {
                    toast.removeChild(toastChild);
                    clearTimeout(id);
                }
            }
        };
    }
}
toast();

function onInputFoCus() {
    const inputSearch = document.querySelector('.app__search-heading-title');
    const headingSearch = document.querySelector('.app__search-heading-search');

    inputSearch.onfocus = function() {
        headingSearch.style.backgroundColor = 'var(--color-background-search)';
    }

    inputSearch.onblur = function() {
        headingSearch.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    }
}
onInputFoCus();

function handelSideBarTablet() {
    const arrowRightTablet = document.querySelector('.arrow-sidebar-right');
    const arrowLeftTablet = document.querySelector('.arrow-sidebar-left');
    arrowRightTablet.onclick = function() {
        sideBar.classList.remove('app__sidebar-tablet');
        sideBar.classList.remove('ani-sidebar-out-tablet');
        sideBar.classList.add('ani-sidebar-tablet');
        arrowLeftTablet.classList.remove('dis-none')
        arrowRightTablet.classList.add('dis-none')
    }
    arrowLeftTablet.onclick = function() {
        sideBar.classList.add('app__sidebar-tablet');
        sideBar.classList.add('ani-sidebar-out-tablet');
        sideBar.classList.remove('ani-sidebar-tablet');
        arrowLeftTablet.classList.add('dis-none')
        arrowRightTablet.classList.remove('dis-none')
    }
}

handelSideBarTablet();