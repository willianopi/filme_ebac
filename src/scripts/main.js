document.addEventListener('DOMContentLoaded', function()  {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    // Header section
    const heroSection = document.querySelector('.hero');
    const heightHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const actualScroll = window.scrollY;

        if (actualScroll < heightHero) {
            hiddenHeader();
        } else {
            showHeader();
        }
    })

    //Shows section
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const tabTarget = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id="${tabTarget}"]`);
            hideAllTabs();
            tab.classList.add('shows__list--is-active');
            removeActiveButton();
            button.target.classList.add('shows__tabs__button--is-active');
        })
    }
 
    // FAQ section
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function hideAllTabs() {
    const tabs = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('shows__list--is-active');
    }
}

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}   

function hiddenHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

