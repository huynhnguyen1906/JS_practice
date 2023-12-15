const iconElements = document.querySelectorAll(".icon")
const symmetricPairs = []

// Tạo mảng có tính đối xứng
for (let i = 1; i <= iconElements.length / 2; i++) {
	symmetricPairs.push({ positive: i * 5, negative: -i * 5 })
}

// Lặp qua mảng icon và gán cặp số đối xứng và thời gian bắt đầu float cho mỗi phần tử
iconElements.forEach((icon, index) => {
	const pairIndex = index % symmetricPairs.length
	const pair = symmetricPairs[pairIndex]
	const delay = Math.random() * 500 // Thời gian bắt đầu float ngẫu nhiên từ 0 đến 1000ms
	icon.symmetricPair = pair
	icon.delay = delay
})

function floatIcons() {
	iconElements.forEach((icon) => {
		setTimeout(() => {
			const currentTop = parseFloat(getComputedStyle(icon).top) || 0
			const offset = icon.symmetricPair.positive
			const newTop = currentTop + offset
			icon.style.top = newTop + "px"

			// Sau 0.3s, thay đổi hướng chuyển động
			setTimeout(() => {
				icon.symmetricPair = {
					positive: icon.symmetricPair.negative,
					negative: icon.symmetricPair.positive,
				}
			}, 300)
		}, icon.delay)
	})
}

setInterval(floatIcons, 600)

// Bắt sự kiện click trên phần tử có class "icon"
document.addEventListener("click", function (event) {
	if (event.target.classList.contains("icon")) {
		// Ẩn đi tất cả các phần tử có class "icon"
		document.querySelectorAll(".icon").forEach((icon) => {
			icon.style.display = "none"
		})

		// Hiển thị phần tử có class "card"
		const card = document.querySelector(".notification")
		if (card) {
			card.style.display = "flex"
		}

		// Tạo div ngay lập tức và kéo dài trong 15 giây
		createDivs()
		setTimeout(() => {
			// Hiển thị lại tất cả các phần tử có class "icon"
			document.querySelectorAll(".icon").forEach((icon) => {
				icon.style.display = "block"
			})

			// Ẩn phần tử có class "card"
			if (card) {
				const fly = document.querySelectorAll(".icon-fly")
				card.style.display = "none"
				fly.forEach((fly) => {
					fly.remove()
				})
			}
		}, 10000)
	}
})
function createDivs() {
	const imageUrls = []

	// Tạo mảng đường dẫn hình ảnh
	for (let i = 0; i < 30; i++) {
		const randomNumber = Math.floor(Math.random() * 20) + 1
		const imageUrl = `img/${randomNumber}.png` // Sửa lại phần mở rộng của hình ảnh nếu cần
		imageUrls.push(imageUrl)
	}

	// Giả sử container đã được tạo trước đó
	const container = document.querySelector(".container")

	let index = 0
	const intervalId = setInterval(() => {
		if (index >= 30) {
			clearInterval(intervalId)
			return
		}

		const iconFlyDiv = document.createElement("div")
		const iconFlyDiv2 = document.createElement("div")
		iconFlyDiv.classList.add("icon-fly")
		iconFlyDiv2.classList.add("icon-fly2")

		// Tạo ngẫu nhiên vị trí top hoặc bottom
		const topOrBottom = Math.random() < 0.5 ? "top" : "bottom"
		iconFlyDiv.style[topOrBottom] = `-${Math.floor(Math.random() * 81) + 20}px`
		iconFlyDiv2.style[topOrBottom] = `-${Math.floor(Math.random() * 81) + 20}px`

		// Tạo ngẫu nhiên vị trí left hoặc right
		const leftOrRight = Math.random() < 0.5 ? "left" : "right"
		iconFlyDiv.style[leftOrRight] = `-${Math.floor(Math.random() * 81) + 20}px`
		iconFlyDiv2.style[leftOrRight] = `-${Math.floor(Math.random() * 81) + 20}px`

		// Tạo đường dẫn hình ảnh
		const imageUrl = imageUrls.shift()
		iconFlyDiv.style.backgroundImage = `url(${imageUrl})`
		iconFlyDiv2.style.backgroundImage = `url(${imageUrl})`

		// Thêm div vào container
		container.appendChild(iconFlyDiv)
		container.appendChild(iconFlyDiv2)
		iconFlyDiv.style.position = "absolute"
		iconFlyDiv2.style.position = "absolute"
		// Thiết lập giá trị top, left, và transform sau 5ms
		setTimeout(() => {
			iconFlyDiv.style.top = "50%"
			iconFlyDiv2.style.right = "50%"
			iconFlyDiv.style.left = "50%"
			iconFlyDiv2.style.bottom = "50%"
			iconFlyDiv.style.transform = "translate(-50%, -50%)"
			iconFlyDiv2.style.transform = "translate(-50%, -50%)"
		}, 5)

		index++
	}, 250)
}
