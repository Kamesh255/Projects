import React from "react";
import "./Navbar.css";

const Navbar = ({
  filterByStar,
  filterByPayment,
  sortByCost,
  removeFilter,
}) => {
  return (
    <div className="navbar">
      <h2>Menu</h2>
      <button onClick={() => sortByCost("htol")}>High to Low</button>
      <button onClick={() => sortByCost("ltoh")}>Low to High</button>
      <button onClick={() => filterByStar(1)}>1 Star</button>
      <button onClick={() => filterByStar(2)}>2 Stars</button>
      <button onClick={() => filterByStar(3)}>3 Stars</button>
      <button onClick={() => filterByStar(4)}>4 Stars</button>
      <button onClick={() => removeFilter("star")}>No Filter</button>
      <button onClick={() => filterByPayment("cash")}>Cash</button>
      <button onClick={() => filterByPayment("card")}>Card</button>
      <button onClick={() => filterByPayment("all")}>All Payment</button>
    </div>
  );
};

export default Navbar;
