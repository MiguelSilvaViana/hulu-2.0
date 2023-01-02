import React from 'react';
import Image from 'next/image';
import HeaderItem from './HeaderItem';

import {
  HiOutlineCheckBadge,
  HiOutlineRectangleStack,
  HiOutlineHome,
  HiOutlineBolt,
  HiOutlineMagnifyingGlass,
  HiOutlineUser,
} from 'react-icons/hi2';

function Header() {
  return (
    <header className="">
      <div>
        <HeaderItem title="HOME" Icon={HiOutlineHome} />
        <HeaderItem title="TRENDING" Icon={HiOutlineBolt} />
        <HeaderItem title="VERIFIED" Icon={HiOutlineCheckBadge} />
        <HeaderItem title="COLLECTIONS" Icon={HiOutlineRectangleStack} />
        <HeaderItem title="SEARCH" Icon={HiOutlineMagnifyingGlass} />
        <HeaderItem title="ACCOUNT" Icon={HiOutlineUser} />
      </div>
      <Image
        alt="HULU"
        className="object-contain"
        src="https://logospng.org/download/hulu/hulu-2048.png"
        width={180}
        height={100}
      />
    </header>
  );
}

export default Header;
