import React, { useEffect } from "react";
import axios from "axios";
import Header from "../components/navigation";
import LayoutWrapper from "../styles/layout";
import WeelkyRates from "../components/hotelComparison";
import WeeklyRates from "../components/hotelComparison";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";

const Layout = () => {
  useEffect(() => {});
  axios
    .get(
      "https://us-central1-stremlind-app.cloudfunctions.net/api/hotel/rate-comparison"
    )
    .then((response) => {
      console.log(response);
    });
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
              Hotel Rate Comparison <span>H</span>
            </li>

            <li>
              Weekly View{" "}
              <span>
                &nbsp;&nbsp;
                <ToggleOffIcon />
              </span>
            </li>
          </ul>
          <WeeklyRates />
        </div>
      </div>
    </LayoutWrapper>
  );
};
export default Layout;
