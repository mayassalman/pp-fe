import styled from "styled-components";
import { keyframes } from "styled-components";



const gradient = keyframes`
{
0% {
  background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 50%;
}}
`;


const Wrapper = styled.section`
padding: 5rem 0;
// background: #090222;
text-align:center;

.is-sticky {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    /* z-index: 999; */
    /* box-shadow: 0 2px 24px 0 rgb(0 0 0 / 15%); */
    background-color: red !important;
    /* animation: 500ms ease-in-out 0s normal none 1 running fadeInDown; */
    /* padding-top: 0px; */
    /* padding-bottom: 0px; */
  }

h4{
    font-family: 'Sora';
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    text-align: center;
    letter-spacing: 0.255em;
    text-transform: uppercase;
    background: linear-gradient(90.51deg, #87F9C2 8.05%, #6BB1D9 92.6%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

h3{
    font-family: 'Sora';
    font-weight: 600;
    font-size: 54px;
    line-height: 1.2;
    text-align: center;
    letter-spacing: 1px;
    color: #fff;
    margin:1rem auto 0rem !important;
}

p{
    position:relative;
    z-index:100;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 24px;
    line-height: 37px;
    text-align: center;
    width: 60%;
    margin: 0 auto 3rem auto !important;
    color: #D1E9FF;
}

.container2{
    text-align:center;
}



.works_container{
    margin: 5rem auto;
    // background: #090222;


    .steps-container{
        display:flex;
        align-items:center;
        margin-left:0.5rem;
        position:relative;
 

        img{
            display: inline-block;
            width: 35px;
            margin-right: 1rem;
            margin-top: -67px;
            padding-bottom: 2rem;
            position:relative;
            cursor: pointer;

            ::before{
                content:'';
                position:absolute;
                opacity: 0.5;
                background: #87BEFF;
                filter: blur(79.0344px);
                width:100%;
                height:100%;
            }

        }
    }

    .works_box{
        display:flex;
        align-items: flex-start;
    }

    ul {
        margin: 1rem 0 0 0 !important;
        padding-left:20px;
        list-style: none;

          

        
        li{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;
            color: #DAE1E8;
            text-align:left;

            ::before {
                content: "•";
                color: #82EBC7;
                font-weight: bold;
                display: inline-block; 
                width: 1em;
                margin-left: -1em;
              }
           
        }
    }
   

    img{
        display:block;
        margin-right:2rem;
    }

    h3{
        font-family: 'Sora';
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        text-align:left;
        line-height: 1;
        letter-spacing: -0.499051px;
        color: #fff;
        margin-bottom: 1.5rem !important;
        animation: ${gradient} 3s ease-in-out infinite;
        background-size: 150%;
    }

    p{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        color: #DAE1E8;;
        width: 90%;
        mix-blend-mode: normal;
        text-align:left;
        margin: 0  !important;
        
        strong{
            color: #82EBC7;
            font-weight: 600;
        }
    }

    .box_container{
        display:flex;
        align-items:center;
        height:500px;
    }

 
    .works_img{

        .img1{
            height:500px;
        }
        img{
            height: 100%;
            width:100%;
            margin-right: 0;
            margin-left:auto;
            position:relative;
        }

          .img2 {
        img{
        width:85%;
        }
    }
    
    }

  

}


@media screen and (min-width: 992px) and (max-width: 1199px) {}

@media screen and (min-width: 768px)and (max-width: 991px) {}

@media screen and (min-width: 451px)and (max-width: 767px) {}
@media screen and (min-width: 451px)and (max-width: 600px) {}
@media screen and (min-width: 451px)and (max-width: 767px) {
    h3{
        font-size: 42px;
    }
    h4{
        font-size: 21px;
      
    }

    p{
        font-size:18px;
        line-height: 32px;
        width:80%;
        margin-bottom: 3rem !important;
    }

    .works_container{

        .box_container:first-child{
            margin-top:3rem;
        }
        .box_container{
            height:auto !important;
        }

        .works_img{
            

            .img1{
                height:370px !important;
            }
            img{
                height: 100%;
                width:100%;
                margin-right: auto !important;
                margin-left:auto !important;
                position:relative;
                top:-10% !important;
            }
        }
    }
}

@media screen and (max-width: 451px) {
    h3{
        font-size: 42px;
    }

    h4{
        font-size: 21px;
       
    }

    p{
        font-size:18px;
        line-height: 32px;
        width:90%;
        margin-bottom: 3rem !important;
    }


    .works_container{

        .box_container:first-child{
            margin-top:3rem;
        }

        
    .box_container{
        height:auto !important;
    }


        .works_img{
            

            .img1{
                height:315px !important;
            }
            img{
                height: 100%;
                width:100%;
                margin-right: auto !important;
                margin-left:auto !important;
                position:relative;
                top:-10% !important;
            }
        }
    }


  
}


`

export default Wrapper;