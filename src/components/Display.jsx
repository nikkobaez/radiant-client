import { FaMagnifyingGlass, Cloudy } from "../assets"
import { formatDate, capitalizeEachWord } from "../utils"

const Display = ({name, temp, desc, cityAndState, setCityAndState, fetchLatitudeAndLongitude}) => {
    const date = new Date()
    const formattedDate = formatDate(date);
    
    const handleChange = (event) => {
        setCityAndState(event.target.value)
    }

    const handleEnter = (event) => {
        if (event.key === "Enter") {
            fetchLatitudeAndLongitude()
        }
    }

    return (
        <div className='flex h-fit w-[33vw] min-w-[400px] max-w-[500px] flex-col items-center justify-center sm:h-screen'>
            {/* INPUT */}
            <div className='flex w-full items-center justify-center'>
                <div className='my-4 flex w-3/4 items-center rounded-full bg-[#efefef] px-4 py-2'>
                    <input 
                        type="text"
                        placeholder="City, State"
                        onChange={handleChange}
                        onKeyDown={handleEnter}
                        value={cityAndState}
                        className="w-full bg-[#efefef] pr-2 outline-none"
                    />
                    <FaMagnifyingGlass 
                        size={25} 
                        color="#748CF1"
                    />
                </div>
            </div>

            {/* WEATHER DISPLAY */}
            <div className="flex w-full flex-col items-center justify-center p-4">
                {/* TOP */}
                <div className="flex h-fit w-full flex-col items-center justify-center gap-2">
                    <img 
                        src={Cloudy}
                        className="w-1/2"
                        alt="sun covered by clouds"
                    />
                    <p className="text-3xl">
                        {temp.toFixed(1)}°F
                    </p>
                    <p className="text-lg">
                        {capitalizeEachWord(desc)}
                    </p>
                </div>

                {/* BORDER */}
                <div 
                    className="my-8 w-3/4 border border-[#efefef]"
                />
                
                {/* BOTTOM */}
                <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
                    <p>
                        {formattedDate}
                    </p>
                    <p className="text-2xl font-thin"> 
                        {name}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Display