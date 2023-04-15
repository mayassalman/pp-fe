import styled from "styled-components";

const Wrapper = styled.main`

.email-disclaimer {
    padding-top:7rem;
    padding-bottom: 5rem;
  }
  
 

  
  
  .email-disclaimer h3{
    position:relative;
    z-index:100;
    font-size: 36px;
    font-weight: 800;
    line-height: 50px;
    color: #fff;
    margin-bottom:2rem !important;
    text-align:center;
  }
  
  .email-disclaimer p{
    position:relative;
    z-index:100;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    color: #fff;
    margin-bottom:2rem !important;
  }
  
  .email-disclaimer p a{
    font-weight: 600;
    text-decoration: underline;
    color:#D1E9FF;
  }
  
  @media (max-width: 750px) {
   
  
  }
  
  @media (max-width: 400px) {

  }
`

export default Wrapper;