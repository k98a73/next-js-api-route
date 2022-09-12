export async function getServerSideProps() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${process.env.OPEN_WEATHER_API_KEY}&lang=ja`
  );
  const data = await response.json();

  return { props: { data } };
}

export default function Home({ data }) {
  return <div>{data.weather && <p>東京の天気：{data.weather[0].main}</p>}</div>;
}
