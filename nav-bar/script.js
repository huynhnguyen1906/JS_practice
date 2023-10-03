const menuItems = document.querySelectorAll('.menu-item');

        window.addEventListener('scroll', () => {
            // Lặp qua từng section và kiểm tra xem nó đã đủ cận đỉnh trình duyệt hay chưa
            for (let i = 0; i < menuItems.length; i++) {
                const section = document.getElementById(`section${i + 1}`);
                const rect = section.getBoundingClientRect();

                // Nếu phần trên của section hiện ra ở trên trình duyệt
                if (rect.top >= 0 && rect.top <= 50) {
                    // Xóa hiệu ứng "active" ở tất cả các mục
                    menuItems.forEach(menuItem => {
                        menuItem.classList.remove('active');
                    });

                    // Thêm hiệu ứng "active" cho mục tương ứng
                    menuItems[i].classList.add('active');
                }
            }
        });