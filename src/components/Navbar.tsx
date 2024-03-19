import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="navbar">
        <Link href={"/"} className="navbar__logo">
          YourCofes
        </Link>
        <div className="navbar__list">
          <Link href="/cafes" className="navbar__list--item">
            카페목록
          </Link>
          <Link href="/cafes/new" className="navbar__list--item">
            카페등록
          </Link>

          <Link href="/users/likes" className="navbar__list--item">
            찜한카페
          </Link>
          <Link href="/users/login" className="navbar__list--item">
            로그인
          </Link>
        </div>

        <div
          role="presentation"
          className="navbar__button"
          onClick={() => {
            setIsOpen((val) => !val);
          }}
        >
          {isOpen ? <AiOutlineClose /> : <BiMenu />}
        </div>
      </div>
      {isOpen && (
        <div className="navbar--mobile">
          <div className="navbar__list--mobile">
            <Link href="/cafes" className="navbar__list--item--mobile">
              카페 목록
            </Link>
            <Link href="/cafes/new" className="navbar__list--item--mobile">
              카페 등록
            </Link>

            <Link href="/users/likes" className="navbar__list--item--mobile">
              찜한 카페
            </Link>
            <Link href="/users/login" className="navbar__list--item--mobile">
              로그인
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
