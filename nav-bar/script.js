const menuItems = document.querySelectorAll('.menu-item');

    window.addEventListener('scroll', () => {
    for (let i = 0; i < menuItems.length; i++) {
        const section = document.getElementById(`section${i + 1}`);
        const rect = section.getBoundingClientRect();

        if (rect.top >= 0 && rect.top <= 50) {
                menuItems.forEach(menuItem => {
                    menuItem.classList.remove('active');
                    }
                );
                    menuItems[i].classList.add('active');
                }
            }
        }
        );