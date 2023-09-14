// eslint-disable-next-line react/prop-types
function NavBar({ navbar, children }) {
  return (
    <nav
      ref={navbar}
      className="navbar w-full flex items-center justify-between"
    >
      {children}
    </nav>
  );
}

export default NavBar;
