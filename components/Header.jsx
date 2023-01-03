import React from 'react';
import Image from 'next/image';
import HeaderItem from './HeaderItem';

import {
  HiOutlineBadgeCheck,
  HiOutlineCollection,
  HiOutlineHome,
  HiOutlineLightningBolt,
  HiSearch,
  HiOutlineUser,
} from 'react-icons/hi';

function Header() {
  return (
    <header className="flex flex-col items-center justify-between m-5 sm:flex-row">
      <div className="flex flex-grow max-w-2xl justify-evenly">
        <HeaderItem title="HOME" Icon={HiOutlineHome} />
        <HeaderItem title="TRENDING" Icon={HiOutlineLightningBolt} />
        <HeaderItem title="VERIFIED" Icon={HiOutlineBadgeCheck} />
        <HeaderItem title="COLLECTIONS" Icon={HiOutlineCollection} />
        <HeaderItem title="SEARCH" Icon={HiSearch} />
        <HeaderItem title="ACCOUNT" Icon={HiOutlineUser} />
      </div>
      <Image
        className="object-contain"
        alt="HULU"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
