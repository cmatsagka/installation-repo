const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const xIcon = document.querySelector('.mobile-nav__x');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    // State
    let isMobileNavOpen = false;

    headerBtn.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;

        if (isMobileNavOpen) {
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        };
    });

    xIcon.addEventListener('click', () => {
        if (isMobileNavOpen){
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        };
    });

    mobileLinks.forEach(Link => {
        Link.addEventListener('click', () => {
            isMobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        });
    });
    
};

mobileNav();


