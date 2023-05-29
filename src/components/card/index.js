import "./style.css";
import { useContext } from "react";
import { Context } from "../../context";

export const Card = ({ flag, name, population, region, capital }) => {
  const { isDark } = useContext(Context);
  return (
    <div
      className="card"
      style={{
        backgroundColor: isDark ? "white" : "#2a3743",
        color: isDark ? "black" : "white"
      }}
    >
      <img src={flag} alt={name} />
      <div className="info">
        <h3>{name}</h3>
        <div>
          <p>
            Population:
            <span style={{ opacity: 0.5 }}>{" " + population}</span>
          </p>
          <p>
            <b>Region: </b>
            <span style={{ opacity: 0.5 }}>{" " + region}</span>
          </p>
          <p>
            <b>Capital: </b>
            <span style={{ opacity: 0.5 }}>{" " + capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
