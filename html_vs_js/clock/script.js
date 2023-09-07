function updateTime() {
    // Lấy thời gian hiện tại
    let currentTime = new Date();

    // Lấy giờ, phút và giây
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    // Định dạng thời gian để có hai chữ số (01, 02, ... 09)
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // Hiển thị thời gian lên trình duyệt
    let clockElement = document.getElementById('clock');
    clockElement.textContent = hours + ":" + minutes + ":" + seconds;
}

// Cập nhật thời gian mỗi giây
setInterval(updateTime, 1000);

// Khởi chạy hàm updateTime để hiển thị thời gian ban đầu
updateTime();