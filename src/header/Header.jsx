import "./styles.css";
import { Item1 } from "./item-1/Item1";
import { Item2 } from "./item-2/Item2";
import { Item3 } from "./item-3/Item3";
import { Item4 } from "./item-4/Item4";
import { Item5 } from "./item-5/Item5";

export const Header = () => {
  return (
    <header>
      <div className="calculator-container">
      <input className="display-header" type="text" placeholder="468 % 2 = 234" />
        <Item1 />
        <Item2 />
        <Item3 />
        <Item4 />
        <Item5 />
      </div>
    </header>
  );
};
