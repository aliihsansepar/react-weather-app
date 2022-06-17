export default function Cities () {
  return(
    <div className="mb-12">
         <label className="font-medium text-base text-black block mb-3">
         Select City You Live
         </label>
         <div className="relative">
            <select className="
               w-full
               border-[1.5px] border-form-stroke
               rounded-lg
               py-3
               px-5
               font-medium
               text-body-color
               outline-none
               focus:border-primary
               active:border-primary
               transition
               disabled:bg-[#F5F7FD] disabled:cursor-default
               appearance-none
               ">
               <option value="">Option</option>
               <option value="">Option</option>
               <option value="">Option</option>
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