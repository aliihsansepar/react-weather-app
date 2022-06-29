import Cities from './Cities';
import Card from './Card';
import { useEffect, useState } from 'react';

export default function CardSection() {
  const [dates, setDates] = useState([]);
  useEffect(() => {
    let date = new Date();
    for(let i= 0; i < 5; i++) {
      date.setDate(date.getDate() + i);  
      dates.push(date.toUTCString()); 
    }
    setDates(dates);  
  });
  console.log(dates)
  return (
    <section className="absolute 
                        2xl:top-52
                        xl:top-36
                        md:top-10
                        left-0
                        pt-10
                        lg:pt-[120px]
                        pb-10
                        lg:pb-20
                        bg-[#F3F4F6]
                        bg-opacity-80
                        justift-center
                        items-center
                        w-screen
                        rounded-lg
                        shadow-lg
                        flex flex-col
    ">
      
      <div className="flow-root p-1 m-1 w-1/2 justify-center items-center">
        <Cities />
      </div>
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          { dates.map( (date) => (
              <Card date={date} degree="33"/>
          ))}
        </div>
      </div>
    </section>
  );
}