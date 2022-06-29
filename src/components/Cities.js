import { useEffect, useState } from "react";

export default function Cities () {
   const [cities, setCities] = useState([]);
   const [error, setError] = useState(null);
   const [loaded, setLoaded] = useState(false);
   const [selectedCity, setSelectedCity] = useState('Ankara');
   useEffect(() => {
      if(cities.length < 1) {
         fetch('https://gist.githubusercontent.com/psycalc/9272535bd3d33bfbd842c5b45e4f5574/raw/fd71bd745998b221d31de5f1e06539a14cbfb3bc/CitiesOfTurkeyArray')
         .then(response => response.json())
         .then((result) => {
               setLoaded(true)
               setCities(result)
            },
            (error) => {
               setLoaded(false)
               setError(error)
            }
         )
      }
   })
   useEffect(() => {
      console.log(selectedCity);
   }, [selectedCity])
  return(
    <div className="mb-12">
         <label className="font-medium text-base text-black block mb-3">Select City</label>
         <div className="relative shadow-lg">
            { !loaded && (
               'Loading...'
            )}
            { error && (
            'Error: '+ error.message
            )} 
            <select className="w-full
                              border-[1.5px] border-form-stroke
                              rounded-lg
                              py-3 px-5
                              font-medium
                              text-body-color
                              outline-none
                              focus:border-primary
                              active:border-primary
                              transition
                              disabled:bg-[#F5F7FD] disabled:cursor-default
                              appearance-none
               " onChange={event => setSelectedCity(event.target.options.selectedIndex)} value={selectedCity}>
               <option value="">Select</option>
            { cities.map( (city, key) => (
                  <option key={key}>{city}</option>
            ))} 
            </select>
            <span className="
               absolute
               right-4
               top-1/2
               -translate-y-1/2
               mt-[-2px]
               w-[10px]
               h-[10px]
               border-r-2 border-b-2 border-body-color
               rotate-45
               ">
            </span>
         </div>
      </div>
  );
}