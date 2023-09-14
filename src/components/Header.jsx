import NavBar from "./NavBar";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import Menu from "./Menu";
import MovieDetail from "./MovieDetail";

// eslint-disable-next-line react/prop-types
function Header({ query, onChange, header, navbar }) {
  return (
    <header
      ref={header}
      className="banner h-4/6 bg-[url('/Poster.png')] bg-cover bg-no-repeat text-white lg:px-20 py-5 pb-20 "
    >
      <NavBar navbar={navbar}>
        <Logo orientation={"horizontal"} />
        <SearchBox query={query} onChange={onChange} />
        <Menu />
      </NavBar>
      <MovieDetail />
    </header>
  );
}

export default Header;
