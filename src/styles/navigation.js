import styled from "styled-components";

const NavSection = styled.div`
  div {
    display: flex;
    margin-left: 50px;
    margin-top: 60px;
    ul:nth-child(1) {
      display: flex;
      gap: 100px;
      background-color: #ffff;
      padding: 20px;
      li {
        list-style-type: none;
      }
    }
    ul:nth-child(2) {
      display: flex;
      gap: 10px;
      margin-left: 80px;
      li {
        list-style-type: none;
      }
    }
  }
`;

export default NavSection;
