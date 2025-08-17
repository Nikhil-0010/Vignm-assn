"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const LocationBlock: React.FC<{ isMobile?: boolean }> = ({ isMobile }) => (
  <div className={`location flex gap-2 items-center ${isMobile ? 'text-base' : ''}`}>
    <svg
      width={isMobile ? "16px": "12px"}
      height="100%"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g id="layer1">
          {" "}
          <path
            d="M 9.4921875 -0.0078125 A 0.50005 0.50005 0 0 0 9 0.5 L 9 0.98632812 A 0.50005 0.50005 0 0 0 9 1 L 9 7 L 9 16 A 0.50005 0.50005 0 1 0 10 16 L 10 7.3476562 L 17.675781 4.46875 A 0.50005 0.50005 0 0 0 17.675781 3.53125 L 10 0.65234375 L 10 0.5 A 0.50005 0.50005 0 0 0 9.4921875 -0.0078125 z M 10 1.7226562 L 16.074219 4 L 10 6.2773438 L 10 1.7226562 z M 8 12.058594 C 6.0643535 12.181754 4.3181154 12.528523 2.9550781 13.058594 C 2.1007034 13.390851 1.3913752 13.78937 0.86914062 14.269531 C 0.34690601 14.749693 0 15.343038 0 16 C 0 16.656962 0.34690601 17.250307 0.86914062 17.730469 C 1.3913752 18.21063 2.1007034 18.609149 2.9550781 18.941406 C 4.6638275 19.60592 6.9621758 20 9.5 20 C 12.037824 20 14.336172 19.60592 16.044922 18.941406 C 16.899297 18.609149 17.608625 18.21063 18.130859 17.730469 C 18.653094 17.250307 19 16.656962 19 16 C 19 15.343038 18.653094 14.749693 18.130859 14.269531 C 17.608625 13.78937 16.899297 13.390851 16.044922 13.058594 C 14.681884 12.528523 12.935646 12.181754 11 12.058594 L 11 13.058594 C 12.827211 13.181763 14.462076 13.5152 15.683594 13.990234 C 16.457899 14.291353 17.066463 14.648553 17.455078 15.005859 C 17.843693 15.363166 18 15.690464 18 16 C 18 16.309536 17.843693 16.636834 17.455078 16.994141 C 17.066463 17.351447 16.457899 17.708647 15.683594 18.009766 C 14.134984 18.612003 11.932739 19 9.5 19 C 7.0672614 19 4.8650163 18.612003 3.3164062 18.009766 C 2.5421015 17.708647 1.9335368 17.351447 1.5449219 16.994141 C 1.1563069 16.636834 1 16.309536 1 16 C 1 15.690464 1.1563069 15.363166 1.5449219 15.005859 C 1.9335368 14.648553 2.5421013 14.291353 3.3164062 13.990234 C 4.5379242 13.5152 6.1727887 13.181763 8 13.058594 L 8 12.058594 z "
            style={{
              fill: "#222222",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0,
            }}
          ></path>{" "}
        </g>{" "}
      </g>
    </svg>
    <span>Canada, Montreal</span>
  </div>
);

const NavLinks: React.FC<{ onClick?: () => void, isMobile?: boolean }> = ({ onClick, isMobile=false }) => (
  <nav className={`flex ${isMobile ? 'flex-col gap-1 text-base' : 'flex-row gap-8'}`}>
    <Link href="#manufacture" onClick={onClick}>
      <span className="border-b">Manufacture</span>
    </Link>
    <Link href="#portfolio" onClick={onClick}>
      <span className="border-b">Tool Library</span>
    </Link>
    <Link href="#getInT" onClick={onClick}>
      <span className="border-b">Get in Touch</span>
    </Link>
  </nav>
);

const LanguageSelector: React.FC<{ isMobile?: boolean }> = ({ isMobile }) => (
  <div className={`lang flex gap-2 ${isMobile ? 'text-base' : ''}`}>
    <span>Eng</span>/<span className="border-b">Fra</span>
  </div>
);

const MobileMenu: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-white bg-opacity-95 z-20 flex flex-col gap-2 items-center justify-center">
      <button
        className="absolute top-4 right-4 text-2xl"
        onClick={onClose}
        aria-label="Close menu"
      >
        <X className="w-5 h-5" />
      </button>
      <NavLinks onClick={onClose} isMobile={open} />
      <LanguageSelector isMobile={open} />
      <LocationBlock isMobile={open} />
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <header className="w-full z-10 fixed top-0 bg-transparent p-4 flex items-center justify-between text-xs">
      <div className="logo flex gap-2 items-center">
        <svg
          width="12px"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2V22M19.0711 4.92893L4.92893 19.0711M22 12H2M19.0711 19.0711L4.92893 4.92893"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Vignam</span>
      </div>
      {isMobile ? (
        <>
          <Menu onClick={() => setMenuOpen(true)} />
          <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
      ) : (
        <>
          <LocationBlock />
          <NavLinks />
          <LanguageSelector />
        </>
      )}
    </header>
  );
};

export default Navbar;
