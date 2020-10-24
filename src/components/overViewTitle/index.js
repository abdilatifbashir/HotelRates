import React from "react";
import OverViewBannerContainer from "../../styles/overview-banner";
import MoreVertIcon from "@material-ui/icons/MoreVert";
const OverViewBanner = () => {
  return (
    <OverViewBannerContainer>
      <ul>
        <li>Today's Overview</li>
        <li>
          <MoreVertIcon />
        </li>
      </ul>
    </OverViewBannerContainer>
  );
};
export default OverViewBanner;
