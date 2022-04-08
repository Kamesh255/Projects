import React from "react";
import "./Page.css";
import { FaHeart } from "react-icons/fa";
const Page = ({
  stars,
  total_votes,
  reviews,
  cost_for_one,
  categories,
  payment_method,
  name,
  img,
}) => {
  let arr = [];
  for (let i in payment_method) {
    if (payment_method[i] == true) { 
      arr.push(i);
    }
  }
  
  const [fav, setFav] = React.useState(false);
  const handleFav = () => {
    const type = !fav;
    setFav(type);
  };

  return (
    <>
      <div className="show">
        <div className="food_box">
          <div>
            <img className="img" src={img} alt="" />
          </div>
          <div className="deatil">
            <h2 style={{ color: "red" }}>{name}</h2>
            <p className="gray">{categories.join(", ")}</p>
            <p className="gray">{`Cost Rs.${cost_for_one} for one`}</p>
            <p className="black">Min Rs. 50 ~ Up to 30 min</p>
            <div className="payment">
              <h5>Accepts :</h5>
              {arr.map((el) => (
                <span> {el} , </span>
              ))}
            </div>
          </div>
          <div className="vots">
            <div>
              <FaHeart
                fontSize="20px"
                cursor="pointer"
                color={fav ? "red" : "rgb(192, 192, 192) "}
                onClick={handleFav}
              />
            </div>
            <div>
              <p
                className="stars"
                style={{
                  backgroundColor:
                    stars < 4
                      ? stars < 3
                        ? "red"
                        : "rgb(255, 238, 0)"
                      : "green",
                }}
              >
                {stars}
              </p>
            </div>
            <div>
              <p
                className="gray"
                style={{ fontSize: "small" }}
              >{`${total_votes} votes`}</p>
            </div>
            <div>
              <p
                className="gray"
                style={{ fontSize: "small" }}
              >{`${reviews} reviews`}</p>
            </div>
          </div>
        </div>
        <div className="order">
          <div className="order_btn">{`Order Online >`}</div>
        </div>
      </div>
    </>
  );
};

export default Page;
