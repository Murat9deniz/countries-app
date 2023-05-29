import { Card } from "../card";
import "./style.css";

export const ListCard = ({ items }) => {
  // js
  return (
    <div className="list-card">
      {items.map(({ flags, region, capital, name, population }, index) => {
        return (
          <Card
            key={index}
            flag={flags.png}
            name={name.official}
            population={population}
            region={region}
            capital={capital}
          />
        );
      })}
    </div>
  );
};
