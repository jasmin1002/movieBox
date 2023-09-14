// eslint-disable-next-line react/prop-types
function Logo({ orientation, pl, pr }) {
  const style = { paddingLeft: pl, paddingRight: pr };
  return (
    <div
      style={style}
      className={`logo ${
        orientation === "horizontal" ? "display-flex" : "block"
      } items-center`}
    >
      <img src="./newtv.png" alt="movieBox" />
      <h3 className=" text-xl">MovieBox</h3>
    </div>
  );
}

export default Logo;
