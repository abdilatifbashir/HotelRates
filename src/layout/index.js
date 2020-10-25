import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/navigation";
import LayoutWrapper from "../styles/layout";
import WeeklyRates from "../components/hotelComparison";
import OverViewBanner from "../components/overViewTitle";
import DayRate from "../components/dailyRates";
import Switch from "@material-ui/core/Switch";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import PaletteIcon from "@material-ui/icons/Palette";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import BuildIcon from "@material-ui/icons/Build";
import KitchenIcon from "@material-ui/icons/Kitchen";
import RoomRate from "../components/roomTypes";
import OfferRate from "../components/offers";
import { dailyRates } from "../fixtures/today";
import { roomDetails } from "../fixtures/roomTypeFixture";
import { offersDetails } from "../fixtures/offersFixture";
import OverViewCard from "../components/card";

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

  const toggleRate = () => {
    if (toggleDailyOn) {
      setToggleDailyOn(false);
    } else {
      setToggleDailyOn(true);
    }
  };

  return (
    <LayoutWrapper>
      <div className="sidebar">
        {/* <h1>sidebar</h1> */}

        <ul>
          <li>
            {" "}
            <PaletteIcon />
          </li>

          <li>
            <AccessAlarmsIcon style={{ fill: "#D3D3D3" }} />
          </li>
          <li>
            <AssignmentTurnedInIcon style={{ fill: "#D3D3D3" }} />
          </li>
          <li>
            <BuildIcon style={{ fill: "#D3D3D3" }} />
          </li>
          <li>
            <KitchenIcon style={{ fill: "#D3D3D3" }} />
          </li>
        </ul>
      </div>
      <div className="header_rates_section">
        <Header />
        <OverViewBanner />
        <OverViewCard />
        <br />
        <OverViewCard />
        <div className="weekly-view">
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
        </div>
        {toggleDailyOn ? (
          <DayRate dailyRates={dailyRates} />
        ) : (
          <WeeklyRates rate={rate} />
        )}
        <div className="offers">
          <span>
            <RoomRate roomDetails={roomDetails} />{" "}
          </span>

          <span>
            <OfferRate offersDetails={offersDetails} />
          </span>
        </div>
      </div>
    </LayoutWrapper>
  );
};
export default Layout;
