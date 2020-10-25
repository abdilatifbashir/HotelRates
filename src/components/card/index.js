import React from "react";
import CardContainer from "../../styles/card";

import PermScanWifiIcon from "@material-ui/icons/PermScanWifi";
import EventNoteIcon from "@material-ui/icons/EventNote";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import TodayIcon from "@material-ui/icons/Today";

const OverViewCard = ({ cardDetails }) => {
  console.log(cardDetails, "mohamed");
  return (
    <CardContainer>
      {[1, 2, 3, 4].map((index) => (
        <div key={index.toString()} className="card">
          <br />
          <span>
            <EventNoteIcon style={{ fill: "#D3D3D3" }} />
          </span>
          <br />
          <br />
          <span className="total">12</span>
          <br />
          <br />
          <span className="request">Total request</span>
          <br />
        </div>
      ))}
    </CardContainer>
  );
};
export default OverViewCard;
