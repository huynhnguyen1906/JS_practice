const apiKey = "c21092e5fcd6ae71cd36ca5af2177f71";

const searchButton = document.getElementById("button");

searchButton.addEventListener("click", getWeather);

function getWeather() {
	const cityInput = document.getElementById("cityInput");
	const city = cityInput.value;

	if (city.trim() === "") {
		alert("領域を入力してください！");
		return;
	}

	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => {
			const weatherDiv = document.getElementById("weather");
			weatherDiv.innerHTML = `
            <p>地域: ${data.name}</p>
            <p>現在の温度: ${data.main.temp}°C</p>
            <p>最高温度: ${data.main.temp_max}°C</p>
            <p>体感温度: ${data.main.feels_like}°C</p>
            <p>風の速度: ${data.wind.speed} km/h</p>
          `;
			console.log(data);
		})
		.catch((error) => {
			console.error("エラー: " + error);
		});
}
