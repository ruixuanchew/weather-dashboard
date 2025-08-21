export const dummyWeather = {
  name: "London",
  weather: [{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }],
  main: {
    temp: 17.4,
    feels_like: 16.7,
    humidity: 59,
  },
  wind: { speed: 5.4 },
  clouds: { all: 60 },
  visibility: 10000,
  sys: { sunrise: 1755665653, sunset: 1755717234 },
};

export const dummyForecast = {
  list: [
    {
      dt_txt: "2025-08-21 12:00:00",
      main: { temp: 18, temp_min: 17, temp_max: 19 },
      weather: [{ icon: "04d", description: "scattered clouds" }],
    },
    {
      dt_txt: "2025-08-22 12:00:00",
      main: { temp: 20, temp_min: 19, temp_max: 22 },
      weather: [{ icon: "01d", description: "clear sky" }],
    },
    {
      dt_txt: "2025-08-23 12:00:00",
      main: { temp: 22, temp_min: 19, temp_max: 22 },
      weather: [{ icon: "02d", description: "few clouds" }],
    },
    {
      dt_txt: "2025-08-24 12:00:00",
      main: { temp: 18, temp_min: 17, temp_max: 19 },
      weather: [{ icon: "04d", description: "scattered clouds" }],
    },
    {
      dt_txt: "2025-08-25 12:00:00",
      main: { temp: 20, temp_min: 19, temp_max: 22 },
      weather: [{ icon: "01d", description: "clear sky" }],
    },
    {
      dt_txt: "2025-08-26 12:00:00",
      main: { temp: 22, temp_min: 19, temp_max: 22 },
      weather: [{ icon: "02d", description: "few clouds" }],
    },
  ],
};

export const dummyPollution = {
  list: [
    {
      main: { aqi: 2 },
      components: {
        co: 201.94,
        no2: 14.6,
        o3: 67.3,
        so2: 3.5,
        pm2_5: 5.1,
        pm10: 7.2,
        nh3: 0.8,
      },
    },
  ],
};

export const dummyUv = {
  value: 5.6,
  date: 1755718539,
};
