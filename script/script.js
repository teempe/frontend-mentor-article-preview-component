const shareBtn = document.querySelector('.share-btn');
const popup = document.querySelector('.popup');
const popupBtn = popup.querySelector('.share-btn');

const togglePopup = () => popup.classList.toggle('show');

const handleClick = event => {
    // when share button clicked => toggle popup visibility
    if (event.target === shareBtn || event.target === popupBtn) {
        togglePopup();
        return;
    }

    // hide popup (only if opened) when user click anywhere on page
    if (popup.classList.contains('show')) {
        popup.classList.remove('show');
        return;
    }
}

document.body.addEventListener('click', handleClick, true);