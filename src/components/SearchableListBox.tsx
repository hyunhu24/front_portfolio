import React, { useState } from 'react';

interface ListItem {
  label: string;
  active?: boolean;
  onClick: () => void;
}

interface SearchableListBoxProps {
  title: string;
  items: ListItem[];
  onClose: () => void;
  showSearch?: boolean;
}

const SearchableListBox: React.FC<SearchableListBoxProps> = ({
  title,
  items,
  onClose,
  showSearch = true,
}) => {
  const [search, setSearch] = useState('');

  const filteredItems = items.filter(item =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );
  // 8BB0EF
  // 7EA3E1
  return (
    <div className="w-[65%]  bg-[#8BB0EF] rounded-2xl shadow-lg p-0">
      {/* Header */}
      {/* <div className="flex items-center px-4 py-3 bg-[#A6B3C2]/80 border-b border-[#A6B3C2] rounded-t-2xl">
        <span className="flex-1 text-lg font-bold text-white select-none">{title}</span>
       
      </div> */}
      {/* Search */}
      {showSearch && (
        <div className="p-2 bg-[#8BB0EF] relative border-b border-[#F8EEEE] rounded-tl-[28px] rounded-tr-[28px]">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="채현후"
            className="w-full px-3 py-2 rounded bg-transparent text-white focus:outline-none placeholder:text-white text-[28px]"
          />
           <button 
           onClick={() => setSearch('')} 
           className="ml-auto text-black/60 hover:text-black text-lg absolute right-6 top-1/2 -translate-y-1/2 z-10">✕</button>
        </div>
      )}
      {/* List */}
      <div className="flex flex-col divide-y divide-[#8BB0EF]">
        {filteredItems.length === 0 && (
          <div className="px-4 py-3 text-white">검색 결과가 없습니다.</div>
        )}
        {filteredItems.map((item, idx) => (
          <button
            key={item.label}
            onClick={item.onClick}
            className={`text-left text-[26px] px-4 py-4 hover:bg-[#7EA3E1] focus:bg-[#7EA3E1] transition font-notosans 
              ${item.active ? 'font-bold text-white bg-[#7EA3E1] border-b border-white/36' : 'text-white/90'}  
              `}
              // ${idx < filteredItems.length - 1 ? 'border-b border-white/36' : ''}
            style={{ outline: 'none' }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchableListBox; 