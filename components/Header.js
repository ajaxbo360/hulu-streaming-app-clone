import Image from "next/image";
import HeaderItems from "./HeaderItems";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import {
  HiOutlineBadgeCheck,
  HiOutlineLightningBolt,
  HiOutlineCollection,
} from "react-icons/hi";

const Header = () => {
  return (
    <>
      <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex justify-evenly flex-grow max-w-2xl">
          <HeaderItems title="HOME" Icon={BiHomeAlt} />
          <HeaderItems title="TRENDING" Icon={HiOutlineLightningBolt} />
          <HeaderItems title="VEREFIED" Icon={HiOutlineBadgeCheck} />
          <HeaderItems title="COLLECTIONS" Icon={HiOutlineCollection} />
          <HeaderItems title="SEARCH" Icon={AiOutlineSearch} />
          <HeaderItems title="ACCOUNT" Icon={FiUser} />
        </div>
        <Image
          className="object-contain"
          src="https://links.papareact.com/ua6"
          width={200}
          height={100}
          alt=""
        />
      </header>
    </>
  );
};

export default Header;
//  BadgeCheckIcon,
//      CollectionIcon,
//       LightningBoltIcon,
//   SearchIcon,
//   UserIcon,
