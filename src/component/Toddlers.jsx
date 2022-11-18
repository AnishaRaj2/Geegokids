import React, { useState, useEffect } from "react";
import SubToddlersCategory from "./SubToddlersCategory";
import "./Toddlers.css";
import "../index.css";

const Toddlers = () => {
  useEffect(() => {
    fetchToddlers();
  }, []);

  const [toddlersState, setToddlersState] = useState([]);

  const fetchToddlers = async () => {
    const request = await fetch(
      "https://kehitys.geegokids.com/toddlercategories/",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token 9d3b7b350c0b05725b37166f443360684cb36b1e",
          "Accept-language": "en",
        },
      }
    );
    const toddlersState = await request.json();
    console.log(toddlersState);
    setToddlersState(toddlersState);
  };

  return (
    <div className="Toddlers main-category">
      <h2>
        Toddlers
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
      </h2>
      <p>
        The tasks for kids under five years of age encourage them to develop
        their skills and explore their limits under adult guidance. Find your
        inner Geego and set an example!
      </p>
      <div className="sub-category">
        {toddlersState.map((toddler) => {
          return (
            <SubToddlersCategory
              title={toddler.title}
              imgUrl={toddler.icon}
              key={toddler.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Toddlers;
