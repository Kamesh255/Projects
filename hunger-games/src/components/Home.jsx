import React, { useState } from "react";
import "./Home.css";
import data from "../data.json";
import Page from "./Page";
import Navbar from "./Navbar";
import Pagination from "./Pagination";

console.log(data);
const Home = () => {
  let len = data.length;
  let filterObj = {
    star: {
      filter: false,
      type: 0,
    },
    payment: {
      filter: false,
      type: "",
    },
  };
  // Filter by Star rating
  let [filterStar, setFilterStar] = useState(filterObj);
  const filterList = (arr) => {
    if (filterStar.star.filter) {
      switch (filterStar.star.type) {
        case 1:
          arr = arr.filter((item) => item.stars <= 2 && item.stars > 1);
          break;
        case 2:
          arr = arr.filter((item) => item.stars <= 3 && item.stars > 2);
          break;
        case 3:
          arr = arr.filter((item) => item.stars <= 4 && item.stars > 3);
          break;
        case 4:
          arr = arr.filter((item) => item.stars <= 5 && item.stars > 4);
          break;
      }
    }
    if (filterPayment.payment.filter) {
      switch (filterPayment.payment.type) {
        case "cash":
          arr = arr.filter((item) => item.payment_method.cash === true);
          break;
        case "card":
          arr = arr.filter((item) => item.payment_method.card === true);
          break;
        case "all":
          arr = arr.filter(
            (item) =>
              item.payment_method.cash === true &&
              item.payment_method.card === true &&
              item.payment_method.upi === true
          );
          break;
      }
    }
    len = arr.length;
    return arr;
  };
  const filterByStar = (type) => {
    let payload = JSON.parse(JSON.stringify(filterStar));
    payload.star.type = type;
    payload.star.filter = true;
    setFilterStar(payload);
    setPage(1);
  };

  // Filter by Payment mode
  let [filterPayment, setFilterPayment] = useState(filterObj);

  const filterByPayment = (type) => {
    let payload = JSON.parse(JSON.stringify(filterPayment));
    payload.payment.type = type;
    payload.payment.filter = true;
    setFilterPayment(payload);
    setPage(1);
  };
  const removeFilter = (cat) => {
    let payload = JSON.parse(JSON.stringify(filterStar));
    switch (cat) {
      case "star":
        payload[cat].filter = false;
        break;
    }
    setFilterStar(payload);
  };
  //Sort by ascending and descending
  let sortObj = {
    cost: {
      sort: false,
      type: "htol",
    },
  };
  let [sort, setSort] = useState(sortObj);

  const sortList = (arr) => {
    if (sort.cost.sort) {
      switch (sort.cost.type) {
        case "ltoh":
          arr = arr.sort((a, b) => a.cost_for_one - b.cost_for_one);
          break;
        case "htol":
          arr = arr.sort((a, b) => b.cost_for_one - a.cost_for_one);
          break;
      }
    }
    return arr;
  };
  const sortByCost = (type) => {
    let payload = JSON.parse(JSON.stringify(sort));
    payload.cost.type = type;
    payload.cost.sort = true;
    setSort(payload);
    setPage(1);
  };
  //Pagination code
  let per_page = 6;
  let [page, setPage] = useState(1);
  const display_card = (arr) => {
    let start = (page - 1) * per_page;
    let end = start + per_page;
    return arr.slice(start, end);
  };
  const nextPage = () => {
    if (page < Math.ceil(len) / per_page) {
      setPage((page) => page + 1);
    }
  };
  const prevPage = () => {
    if (page > 1) {
      setPage((page) => page - 1);
    }
  };

  return (
    <div className="container">
      <h1 className="h1">Restaurant</h1>
      <div className="container-2">
        <div>
          <Navbar
            filterByStar={filterByStar}
            filterByPayment={filterByPayment}
            sortByCost={sortByCost}
            removeFilter={removeFilter}
          />
        </div>
        <div className="card_container">
          {display_card(sortList(filterList(data)))?.map((items) => (
            <Page key={items.id} {...items} />
          ))}
        </div>
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        len={len}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
};

export default Home;
