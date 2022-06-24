import Cities from './Cities';
import Card from './Card';

export default function CardSection() {
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
            <Card date="Today" degree="33"/>
            <Card date="Tomorrow" degree="31"/>
            <Card date="19/06/2022" degree="32"/>
            <Card date="20/06/2022" degree="35"/>
            <Card date="21/06/2022" degree="40"/>
        </div>
      </div>
    </section>
  );
}