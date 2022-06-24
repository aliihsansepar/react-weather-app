const API_KEY = `${process.env.API_KEY}`
export const BASE_API_URL = `https://api.openweathermap.org/data/2.5/weather`
export const API_URL = `${BASE_API_URL}?appid=${API_KEY}&units=metric`

export async function getWeather(city, lang = 'en') {
  const response = await fetch(`${API_URL}&q=${city}&lang=${lang}`);
  return response.json();
}