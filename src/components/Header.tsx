import { FC } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="flex items-center justify-between bg-light-grey-bg dark:bg-dark-grey-bg px-8">
      <div className="flex items-center gap-x-14 border-r-dark-grey-border border-r-[1px] py-2 pr-4">
        <div className="flex items-center gap-x-4">
          <img
            className="rounded-full w-10 h-10"
            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="profile picture"
          />

          <div>
            <p className="">Francis</p>
            <p className=" text-xs text-gray-300">francis2193</p>
          </div>
        </div>

        <BsArrowRightCircle />
      </div>

      <div className="flex w-1/3 justify-end items-center relative">
        <input
          type="text"
          placeholder="Search"
          className="border border-dark-grey-border dark:bg-dark-grey-input rounded-lg p-2 w-full"
        />
        <BiSearch className="absolute mr-2 w-10" />
      </div>

      <h4 className="text-primary">Arbeit Talk</h4>
    </div>
  );
};

export default Header;
