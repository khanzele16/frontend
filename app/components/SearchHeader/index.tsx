import { Search } from "lucide-react";

export const SearchHeader = () => {
  return (
    <div className="w-full flex flex-row items-center justify-center content-center bg-[#2B2929] max-w-[450px] rounded-[10px] px-[8px] gap-x-[6px]">
      <Search
        size={20}
        strokeWidth={2}
        color="#5F5F5F"
      />
      <input
        type="text"
        className="w-full text-white bg-transparent text-[15px] py-[6px] rounded-[5px] outline-none"
        placeholder="Поиск"
      />
    </div>
  );
};