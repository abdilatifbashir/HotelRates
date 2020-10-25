import React from "react";
import NavSection from "../../styles/navigation";
import SearchIcon from "@material-ui/icons/Search";
const Header = () => {
  return (
    <NavSection>
      <div>
        <ul>
          <li className="over-view">Overview</li>
          <li>Announcements</li>
          <li>Task & Notes</li>
          <li>Daily Checklist</li>
          <li>Requests</li>
          <li></li>
        </ul>
        <ul>
          <li>
            <SearchIcon />
          </li>
          <li>Dwight S.</li>
          <li>
            <img src="prof.png" />
          </li>
        </ul>
      </div>
    </NavSection>
  );
};
export default Header;
