function moveParagraph() {
	const p = document.querySelector(" p ")
	const button = document.querySelector(".button")
	const container = document.querySelector(".container")

	// Lấy kích thước của phần tử và kích thước của vùng chứa
	const pRect = p.getBoundingClientRect()
	const buttonRect = button.getBoundingClientRect()
	const containerRect = container.getBoundingClientRect()

	// Tính toán vị trí mới cho phần tử
	const newX = Math.random() * (containerRect.width - pRect.width)
	const newY = Math.random() * (containerRect.height - pRect.height)

	// Di chuyển phần tử tới vị trí mới
	p.style.transform = `translate(${newX}px, ${newY}px)`

	// Bật ngược lại sau một khoảng thời gian
	setTimeout(() => {
		const revertX = buttonRect.width / 2 - pRect.width / 2
		const revertY = buttonRect.height / 2 - pRect.height / 2
		p.style.transform = `translate(${revertX}px, ${revertY}px)`
	}, 1000) // Đặt thời gian delay ở đây, ví dụ 1000ms (1 giây)
}
moveParagraph()
