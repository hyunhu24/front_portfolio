import { color } from 'framer-motion';
import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { IoIosSearch } from "react-icons/io";
import { useItems, ListItem } from '../context/ItemContext';

// SearchableListBox 컴포넌트
interface SearchableListBoxProps {
  title?: string;
  items: ListItem[];
  onClose?: () => void;
  showSearch?: boolean;
  showList?: boolean;
  onFocus?: () => void; 
  onBlur?: () => void; 
  icon?: boolean;
  IconName?: IconType;
  bgColor?: string;
  activeColor?: string;
  width?: string;
  searchTextSize?: string;
  listTextSize?: string;
}

const SearchableListBox: React.FC<SearchableListBoxProps> = ({
  title,
  items,
  onClose,
  showSearch = true,
  showList = true,
  onFocus,
  onBlur,
  icon = true,
  IconName,
  bgColor = '#8BB0EF',
  activeColor = '#7EA3E1',
  width = '65%',
  searchTextSize = '28px',
  listTextSize = '28px',
}) => {
  const [search, setSearch] = useState('');
  const { selectedIndex, setSelectedIndex } = useItems();

  const filteredItems = items
  .map((item, idx) => ({ ...item, __originalIndex: idx }))
  .filter(item =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleItemClick = (filteredIdx: number) => {
    const originalIdx = filteredItems[filteredIdx].__originalIndex;
    if (items[originalIdx]?.onClick) {
      items[originalIdx].onClick();
    }
  };

  return (
    <div 
      className={`shadow-lg p-0 ${showList ? 'rounded-2xl' : 'rounded-full'} ${icon ? 'relative max-w-[550px]' : ''}`}
      style={{ backgroundColor: bgColor, width: width }}
    >
      {showSearch && (
        <div 
          className={`${icon ? 'pt-1 pb-2' : 'p-2'} relative ${showList ? 'border-b-1 border-[#F8EEEE] rounded-tl-[28px] rounded-tr-[28px] ' : 'rounded-full'}`}
          style={{ backgroundColor: bgColor }}
        >
          <input
            type="text"
            value={search}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={e => setSearch(e.target.value)}
            placeholder={title}
            className={`w-full py-2 bg-transparent text-white focus:outline-none placeholder:text-white ${icon ? 'pl-5 pr-14' : 'px-3'}`}
            style={{
              fontSize: searchTextSize,
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden'
            }}
          />
          <button 
            onClick={() => setSearch('')} 
            className="ml-auto text-black/60 hover:text-black text-lg absolute right-6 top-1/2 -translate-y-1/2 z-10"
          >
            {icon ? <IoIosSearch size={22} color='white' fontWeight={800}/> : '✕'}
          </button>
        </div>
      )}
      {showList && (
        <div className={`w-full flex flex-col rounded-bl-[28px] rounded-br-[28px] overflow-hidden ${icon ? 'absolute top-[100%] left-0' : 'pt-0'}`}>
          {filteredItems.length === 0 && (
            <div className="px-4 py-3 text-white">검색 결과가 없습니다.</div>
          )}
          {filteredItems.map((item, idx) => (
            <button
              key={item.label}
              onClick={() => handleItemClick(idx)}
              className={`text-left px-4 py-4 transition font-notosans ${item.__originalIndex === selectedIndex ? 'font-bold text-white border-b border-white/36' : 'text-white/90'}`}
              style={{ 
                fontSize: listTextSize,
                outline: 'none',
                backgroundColor: item.__originalIndex === selectedIndex ? activeColor : bgColor,
                borderBottom: idx < filteredItems.length - 1 ? `1px solid ${bgColor}` : 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = activeColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = item.__originalIndex === selectedIndex ? activeColor : bgColor;
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchableListBox;