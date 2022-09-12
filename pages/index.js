import { useState, useEffect } from "react";

export default function Home() {
  const [weather, setWeather] = useState("");
  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}&lang=ja`
      );
      const data = await response.json();
      setWeather(data);
    };
    fetchWeather();
  }, []);

  return (
    <div>{weather.weather && <p>東京の天気：{weather.weather[0].main}</p>}</div>
  );
}
