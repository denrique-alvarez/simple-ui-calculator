import "./styles.css";

export const Item1 = () => {
  return (
    <div className="calc-item-1">
      <input type="submit" value="AC" />
      <input type="submit" value="DEL" />
      <input type="submit" value="%" />
      <input className="flex-item-1" type="submit" value="/" />
    </div>
  );
};
