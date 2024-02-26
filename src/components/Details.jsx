import Card from './Card'

const Details = ({feelsLikeTitle, feelsLike, tempMaxTitle, tempMax, tempMinTitle, tempMin, pressureTitle, pressure, humidityTitle, humidity, windSpeedTitle, windSpeed}) => {
    return (
        <div className='flex w-full max-w-[900px] items-center justify-center px-6 py-4'>
            <div className='grid w-fit grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3'>
                <Card 
                    title={feelsLikeTitle}
                    value={feelsLike}
                />
                <Card 
                    title={tempMaxTitle}
                    value={tempMax}
                />

                <Card 
                    title={tempMinTitle}
                    value={tempMin}
                />
                <Card 
                    title={pressureTitle}
                    value={pressure}
                />
                <Card 
                    title={humidityTitle}
                    value={humidity}
                />
                <Card 
                    title={windSpeedTitle}
                    value={windSpeed}
                />
            </div>
        </div>
    )
}

export default Details