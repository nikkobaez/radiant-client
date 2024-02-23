import { FaMagnifyingGlass } from "react-icons/fa6";
import Cloud from "../assets/cloudy.png";

const Display = ({name, temp, desc, cityAndState, setCityAndState, fetchLatitudeAndLongitude}) => {
    const handleChange = (event) => {
        setCityAndState(event.target.value)
    }

    const handleEnter = (event) => {
        if (event.key === "Enter") {
            fetchLatitudeAndLongitude()
        }
    }

    const formatDate = (date) => {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        }
        return new Date(date).toLocaleString('en-US', options);
    }

    function capitalizeEachWord(str) {
        return str.split(' ').map(word => {
          if (word.length > 0) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          }
          return '';
        }).join(' ');
      }

    const date = new Date()
    const formattedDate = formatDate(date);

    return (
        <div className='w-[33vw] h-screen min-w-[400px] max-w-[500px]'>
            {/* INPUT */}
            <div className='w-full flex justify-center items-center'>
                <div className='bg-[#efefef] w-3/4 my-4 px-4 py-2 rounded-full flex items-center'>
                    <input 
                        type="text"
                        placeholder="City, State"
                        onChange={handleChange}
                        onKeyDown={handleEnter}
                        value={cityAndState}
                        className="w-full outline-none bg-[#efefef] pr-2"
                    />
                    <FaMagnifyingGlass 
                        size={25} 
                        color="#748CF1"
                    />
                </div>
            </div>

            {/* WEATHER DISPLAY */}
            <div className="w-full flex flex-col justify-center items-center p-4">
                {/* TOP */}
                <div className="w-full h-fit flex flex-col items-center gap-2 justify-center">
                    <img 
                        src={Cloud}
                        className="w-1/2"
                    />
                    <p className="text-3xl">
                        {temp.toFixed(1)}°C
                    </p>
                    <p className="text-lg">
                        {capitalizeEachWord(desc)}
                    </p>
                </div>

                {/* BORDER */}
                <div 
                    className="border border-[#efefef] my-8 w-3/4"
                />
                
                {/* BOTTOM */}
                <div className="w-full h-fit flex flex-col items-center gap-4 justify-center">
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