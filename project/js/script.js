window.addEventListener('load', () => {
    const mobileMenuBtn = document.querySelector('#mobile_menu_btn');
    const navMenu = document.querySelector('#nav_menu');

    const silver = `57.844 AMD`;
    const gold = `98.455 AMD`;
    const vip = `250.485 AMD`;

    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('menu_active');
    });

    try {
        document.querySelector('.loader_wrap').remove();
    } catch {
        console.log('error loader')
    }

    try {
        const modalPreview = (btn, modal, close) => {
            btn = document.querySelector(btn);
            close = document.querySelector(close);
            modal = document.querySelector(modal);

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.style.display = 'flex';
            });

            close.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        };

        modalPreview('#logBtn', '[data-loginOrReg-modal]', '[data-close-logmodal]');
        modalPreview('.member_count', '[data-memberCount-modal]', '[data-count-close]');
    } catch {
        console.log('error preview modal');
    }

    try {
        const offerModalContent = (price, submit, title, money, offerItemh3) => {
            title.innerHTML = `Վճարել։ ${offerItemh3.innerHTML}ի համար`;
            price.innerHTML = `Վճարման ենթակա գումարը։ <span> ${money}</span>`;
            submit.setAttribute('value', `Վճարել ${money}`);
        };

        const offerModalPreview = (button, modal, close, price, submit, title, offerItem) => {
            button = document.querySelectorAll(button);
            modal = document.querySelector(modal);
            close = document.querySelector(close);
            price = document.querySelector(price);
            submit = document.querySelector(submit);
            title = document.querySelector(title);
            offerItem = document.querySelectorAll(offerItem);

            button.forEach((btn, i) => {
                btn.addEventListener('click', () => {
                    modal.style.display = 'flex';

                    if (i == 0) {
                        offerModalContent(price, submit, title, silver, offerItem[0]);
                    }
                    if (i == 1) {
                        offerModalContent(price, submit, title, gold, offerItem[1]);
                    }
                    if (i == 2) {
                        offerModalContent(price, submit, title, vip, offerItem[2]);
                    }
                });
            });

            close.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }

        offerModalPreview('[data-modal-btn]', '[data-offer-modal]', '[data-offer-close]', '[data-offerPrice]', '[data-modal-submit]', '[data-offer-modal] h3', '.offer_item h3');

    } catch {
        console.log('error offer modal');
    }

    try {
        const minusBtn = document.querySelectorAll('[data-minus]');
        const plusBtn = document.querySelectorAll('[data-plus]');
        const counterResault = document.querySelectorAll('[data-resault]');

        const counterFilter = (minus, plus, resault) => {
            let i = 0;
    
            minus.addEventListener('click', (e) => {
                e.preventDefault()
                if (resault.innerHTML >= 1) {
                    resault.innerHTML = --i;
                }
            });
    
            plus.addEventListener('click', (e) => {
                e.preventDefault()
                if (resault.innerHTML <= 8) {
                    resault.innerHTML = ++i;
                }
            });
        };

        counterFilter(minusBtn[0], plusBtn[0], counterResault[0]);
        counterFilter(minusBtn[1], plusBtn[1], counterResault[1]);
        counterFilter(minusBtn[2], plusBtn[2], counterResault[2]);

    } catch {
        console.log('error counter');
    }

    try {
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 5,
            spaceBetween: 15,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                520: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                980: {
                    slidesPerView: 3,
                },
                1140: {
                    slidesPerView: 4,
                }
            }
        });
    
        const swiperSlide = document.querySelectorAll('.swiper-slide');
    
        swiperSlide.forEach(slide => {
            slide.addEventListener('mouseover', () => {
                swiper.autoplay.stop();
            });
            
            slide.addEventListener('mouseleave', () => {
                swiper.autoplay.start();
            });
        });
    } catch {
        console.error('error in swiper');
    }

    try {
        const logTab = document.querySelector('[data-log]');
        const logBtn = document.querySelector('.open_log');

        const regTab = document.querySelector('[data-reg]');
        const regBtn = document.querySelector('.open_reg');

        const tabConfig = (activeBtn, deactiveBtn, currentClass, showTab, hideTab) => {
            activeBtn.addEventListener('click', () => {
                deactiveBtn.classList.remove(currentClass);
                activeBtn.classList.add(currentClass);
                hideTab.style.display = 'none';
                showTab.style.display = 'block';
            });
        }

        logBtn.addEventListener('click', () => {
            tabConfig(logBtn, regBtn, 'active_tab', logTab, regTab);
        });

        regBtn.addEventListener('click', () => {
            tabConfig(regBtn, logBtn, 'active_tab', regTab, logTab);
        });

    } catch {
        console.log('error in tabs');
    }

    try {
        const userSettingsBtn = document.querySelector('#user_settings_btn');
        const userSettingsContent = document.querySelector('.user_settings_content');

        userSettingsBtn.addEventListener('click', () => {
            userSettingsContent.classList.toggle('active_usc');
        })
    } catch {
        console.log('error in user settings');
    }

    try {
        const accordion = (btn, content, activeClass) => {
            btn = document.querySelector(btn);
            content = document.querySelector(content);

            btn.addEventListener('click', () => {
                content.classList.toggle(activeClass);
            });
        };

        accordion('[data-accBtn1]', '[data-accCon1]', 'active_accordion');
        accordion('[data-accBtn2]', '[data-accCon2]', 'active_accordion');
        accordion('[data-accBtn3]', '[data-accCon3]', 'active_accordion');
        accordion('[data-accBtn4]', '[data-accCon4]', 'active_accordion');

    } catch {
        console.log('error in accordion')
    }
});