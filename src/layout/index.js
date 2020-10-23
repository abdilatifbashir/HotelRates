import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/navigation";
import LayoutWrapper from "../styles/layout";
// import WeelkyRates from "../components/hotelComparison";
import WeeklyRates from "../components/hotelComparison";
import DayRate from "../components/dailyRates";

import Switch from "@material-ui/core/Switch";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Layout = () => {
  const [rate, setRate] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://us-central1-stremlind-app.cloudfunctions.net/api/hotel/rate-comparison"
      )
      .then((response) => {
        setRate(response.data);
      });
  }, [rate]);
  const [toggleDailyOn, setToggleDailyOn] = useState(true);
  // const [toggleWeeklyOff, setToggleWeeklyOff] = useState(true);

  const toggleRate = () => {
    setToggleDailyOn(false);
  };

  return (
    <LayoutWrapper>
      <div className="sidebar">
        {/* <h1>sidebar</h1> */}

        <ul>
          <li>
            {" "}
            <img src="/diameter.png" />
          </li>

          <li>
            <img src="diameter.png" />
          </li>
          <li>
            <img src="diameter.png" />
          </li>
          <li>
            <img src="/diameter.png" />
          </li>
          <li>
            <img src="diameter.png" />
          </li>
        </ul>
      </div>
      <div className="header_rates_section">
        <Header />
        <div>
          <ul>
            <li>
              Hotel Rate Comparison
              <span>
                <ArrowDropDownIcon />
              </span>
            </li>

            <li>
              Weekly View{" "}
              <span onClick={toggleRate}>
                &nbsp;&nbsp;
                <Switch />
              </span>
            </li>
          </ul>
          {toggleDailyOn ? <DayRate /> : <WeeklyRates rate={rate} />}
          {/* <WeeklyRates rate={rate} /> */}
          <br />
          {/* <DayRate /> */}
        </div>
      </div>
    </LayoutWrapper>
  );
};
export default Layout;
