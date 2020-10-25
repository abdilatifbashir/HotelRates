import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-left: 40px;
  .card {
    width: 290px;
    height: 142px;
    background: #ffffff;
    padding-bottom: 15px;
    span {
      margin: 30px;
    }
    .total {
      color: #434343;
      font-size: 32px;
      font-famly: Roboto Bold;
    }
    .request {
      color: #bdbdbd;
      font-size: 16px;
      font-famoly: Roboto Medium;
    }
  }
`;

export default CardContainer;
