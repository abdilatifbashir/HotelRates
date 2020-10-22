import styled from "styled-components";

const LayoutWrapper = styled.div`
margin-left:130px;
margin-right:80px;
display:flex;
flex-direction-row;

    // SideBar
  .sidebar {
    ul {
      display: flex;
      flex-direction: column;
      list-style-type: none;
    //   justify-content: space-between;
    }
    li{
        margin-top:60px;
    }
  }
  .header_rates_section{
      display:flex;
      flex-direction:column;
  }



    // Navigation and rates section

    .header_rates_section{
        div{
            ul{
                li:nth-child(1){
                    color:#434343;
                    font-famly:Roboto Medium;
                    font-size:16px;
                    float:left;
                }
                li:nth-child(2){
                    color:#434343;
                    font-famly:Roboto Medium;
                    font-size:16px;
                    float:right;
                }
                
                li{
                    list-style-type:none;
                }
            }
        }
    }

`;

export default LayoutWrapper;
