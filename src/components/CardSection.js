import Cities from './Cities';
import Card from './Card';

export default function CardSection() {
  return (
    <section className="absolute top-52 left-0 pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6] bg-opacity-40 flex justift-center items-center w-screen">
      <div className="flow-root p-4 m-5 w-1/2 justify-center items-center">
        <Cities />
      </div>
      <div className="container">
        <div className="flex flex-wrap -mx-4">
            <Card city="Today" degree="33"/>
            <Card city="Tomorrow" degree="31"/>
            <Card city="19/06/2022" degree="32"/>
            <Card city="20/06/2022" degree="35"/>
            <Card city="21/06/2022" degree="40"/>
        </div>
      </div>
    </section>
  );
}