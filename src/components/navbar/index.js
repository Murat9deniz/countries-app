import "./style.css";
import { BiMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { Context } from "../../context";
import { useContext } from "react";

const Navbar = () => {
  const { isDark, handleOnChangeDarkMode } = useContext(Context);
  return (
    <div className="navbar" style={{
      backgroundColor: isDark ? "white": "#2a3743",      
    }}>
      <h2>where in the world?</h2>
      <div className="right">
        {isDark ? (
          <BiMoon
            className="icon"
            onClick={() => handleOnChangeDarkMode((prev) => !prev)}
          />
        ) : (
          <BsSun
            className="icon"
            onClick={() => handleOnChangeDarkMode((prev) => !prev)}
          />
        )}
        <p>{isDark ? "Dark" : "Light"}  Mode</p>
      </div>
    </div>
  );
};

export default Navbar;
