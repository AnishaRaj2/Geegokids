import React, { useState, useEffect } from "react";
import SubToddlersCategory from "./SubToddlersCategory";
import "./Toddlers.css";
import "../index.css";

const Toddlers = (props) => {
  useEffect(() => {
    fetchToddlers(props.token);
  }, [props.token]);

  const [toddlersState, setToddlersState] = useState([]);

  const fetchToddlers = async (token) => {
    const request = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/toddlercategories`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
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
      <div className="sub-categrory-group">
        {toddlersState.map((toddler) => {
          return (
            toddler.tasks.length > 0 ?
            <div className="sub-category">
              <SubToddlersCategory
                title={toddler.title}
                imgUrl={toddler.icon}
                key={toddler.id}
              />
            </div> : ''
          );
        })}
      </div>
    </div>
  );
};

export default Toddlers;
