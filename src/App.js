import { useState, useEffect } from "react";
import Details from "./components/Details";
import Display from "./components/Display";
import axios from 'axios';

function App() {
    const [weatherData, setWeatherData] = useState({});
    const [latitude, setLatitude] = useState(30.3118769);
    const [longitude, setLongitude] = useState(-95.45605119999999);
    const [cityAndState, setCityAndState] = useState("");

    const fetchLatitudeAndLongitude = () => {
        // Input Validation - Check if the input is empty
        if (cityAndState.length === 0) {
            alert ("Please enter a valid city and state")
            setCityAndState("")
            return
        }

        const parts = cityAndState.split(',');

        // Input Validation - Confirm array has only two strings
        if (parts.length !== 2) {
            alert ("Please enter a valid city and state")
            setCityAndState("")
            return
        }

        const city = parts[0].trim();
        const state = parts[1].trim();

        // Input Validation - Confirm that both strings are not empty
        if (city.length === 0 || state.length === 0) {
            alert ("Please enter a valid city and state")
            setCityAndState("")
            return
        }

        const googleMapsApiKey = process.env.REACT_APP_GOOGLE_API_KEY;
        const geocodeApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(`${city}, ${state}`)}&key=${googleMapsApiKey}`;

        console.log("hi")

        axios.get(geocodeApiUrl)
        .then((response) => {
            const { results } = response.data;
            if (results && results.length > 0) {
                const { lat, lng } = results[0].geometry.location;

                console.log(lat, lng)

                setLatitude(lat)
                setLongitude(lng)
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }


    useEffect(() => {
        const fetchWeatherData = () => {
            const openWeatherApiKey = process.env.REACT_APP_OPENWEATHER_API_KEY
            const openWeatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openWeatherApiKey}&units=imperial`;
    
            axios.get(openWeatherApiUrl)
            .then((response) => {
                console.log(response.data)
                setWeatherData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
        }

        fetchWeatherData()

    }, [latitude, longitude])

    return (
        <div className="flex w-full items-center justify-center">
            {weatherData.main && (
                <div className="m-4 flex h-fit w-full max-w-[1440px] flex-col items-center justify-center rounded-xl p-4 lg:max-h-[800px] lg:flex-row lg:border-4 lg:border-[#efefef]">
                    <Display 
                        name={weatherData.name}
                        temp={weatherData.main.temp}
                        desc={weatherData.weather[0].description}
                        cityAndState={cityAndState}
                        setCityAndState={setCityAndState}
                        fetchLatitudeAndLongitude={fetchLatitudeAndLongitude}
                    />
                    <Details 
                        feelsLikeTitle="Feels Like"
                        feelsLike={weatherData.main.feels_like + "°F"}
                        tempMaxTitle="Maxiumum Temperature"
                        tempMax={weatherData.main.temp_max + "°F"}
                        tempMinTitle="Minimum Temperature"
                        tempMin={weatherData.main.temp_min + "°F"}
                        pressureTitle="Pressure"
                        pressure={weatherData.main.pressure + "in"}
                        humidityTitle="Humidity"
                        humidity={weatherData.main.humidity + "%"}
                        windSpeedTitle="Wind Speed"
                        windSpeed={weatherData.wind.speed + "mph"}
                    />
                </div>
            )}
        </div>
    );
}

export default App;
