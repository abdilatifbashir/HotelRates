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
    }
    li{
        margin-top:60px;
    }
  }

  



    // Navigation and rates section

    .header_rates_section{
        display:flex;
      flex-direction:column;
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

        .offers{
            margin-top:20px;
            display:flex;
            span:nth-child(1){
                margin-left:32px;
            }
            span:nth-child(2){
                margin-left:35px;
            }
            
        }
    }

`;

export default LayoutWrapper;
