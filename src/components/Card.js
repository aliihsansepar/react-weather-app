/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Card(props) {
  return (
    <div className="w-full md:w-1/2 xl:w-1/5 px-4 ">
      <div className="bg-white rounded-lg overflow-hidden mb-10 shadow-lg">
        <div className="p-8 sm:p-9 md:py-7 xl:py-9 text-center ">
          <h3>
            <a href="{void(0)}" className="font-semibold
                                          text-zinc-700
                                            text-xl
                                            sm:text-[22px]
                                            md:text-md
                                            lg:text-[27px]
                                            xl:text-2xl
                                            2xl:text-[25px]
                                            mb-4
                                            block
                                            hover:text-primary
            ">
              { props.degree } &#8451;
            </a>
          </h3>
          <p className="text-base text-body-color leading-relaxed mb-2 text-gray-500">
            { props.date }
          </p>
        </div>
      </div>
    </div>
  );
}