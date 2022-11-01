import Logo from "./assets/logo.svg";
import Home from "./assets/icon-nav-home.svg";
import Movies from "./assets/icon-nav-movies.svg";
import TVSeries from "./assets/icon-nav-tv-series.svg";
import Bookmark from "./assets/icon-nav-bookmark.svg";
import Avatar from "./assets/image-avatar.png";

function NavBar() {
  return (
    <div className="flex xl:flex-col justify-between items-center bg-semi-dark-blue w-screen h-[56px] md:h-[72px] md:w-[calc(100vw-2rem)] md:m-auto md:rounded-xl xl:w-[96px] xl:h-[calc(100vh-4rem)] xl:m-0 py-2 xl:py-8 px-5">
      {/* LOGO */}
      <button className="xl:hidden">
        <img className="" src={Logo} alt="Logo" />
      </button>

      {/* OPTIONS */}
      <ul className="flex space-x-7 xl:hidden">
        <li className="cursor-pointer">
          <img src={Home} alt="Home" />
        </li>
        <li className="cursor-pointer">
          <img src={Movies} alt="Movies" />
        </li>
        <li className="cursor-pointer">
          <img src={TVSeries} alt="TV Series" />
        </li>
        <li className="cursor-pointer">
          <img src={Bookmark} alt="Bookmark" />
        </li>
      </ul>

      <div className="hidden xl:inline-block space-y-16">
        {/* LOGO */}
        <button>
          <img className="" src={Logo} alt="Logo" />
        </button>

        {/* OPTIONS */}
        <ul className="flex flex-col space-y-10 items-center">
          <li className="cursor-pointer">
            <img src={Home} alt="Home" />
          </li>
          <li className="cursor-pointer">
            <img src={Movies} alt="Movies" />
          </li>
          <li className="cursor-pointer">
            <img src={TVSeries} alt="TV Series" />
          </li>
          <li className="cursor-pointer">
            <img src={Bookmark} alt="Bookmark" />
          </li>
        </ul>
      </div>

      {/* PROFILE */}
      <button>
        <img
          className="w-[28px] md:w-[32px] xl:w-[40px] border-2 rounded-full border-white"
          src={Avatar}
          alt="Profile"
        />
      </button>
    </div>
  );
}

export default NavBar;
