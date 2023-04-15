import styled from "styled-components";


const Wrapper = styled.section`
    padding: 0rem 0 6rem;
    color: #fff;

    .container{
        text-align:center;
    }

    button{
        background: transparent;
        margin-bottom: 2rem !important;
        border: none;
        cursor: pointer;
        img{
            width: 60px;
        }
    }

    button:disabled{
        opacity:0.15;
        cursor: initial	;
    }
    
    .prev-btn:active{
        //transform: scale(1.1);
    }

    .next-btn{
        transform: scale(-1);
        
    }

    .wideContainer{
        position:relative;
        z-index:100;
    }


    .roadmap-container{

        .swiper-button-next{
            display: none;
        }

        .swiper-button-prev{
            display: none;
        }
        

        ::before{
            content:'';
            position:absolute;
            left: -0.5em;
            right: -0.5em;
            top: calc(4.5rem + -2px);
            border: 3px solid #D1E9FF;
            border-radius: 10px;

        }

        .ant-row{
            width:100% !important;
            .ant-col{
                width:100% !important; 
            }
        }

        h4{
            font-size: 24px;
            line-height:30px;
            color: #fff;
            font-weight: 500;
            margin-bottom: 1rem !important;
            text-align:center;

            strong{
                font-weight:600;
                color: #82EBC7;
            }
        }


        .line{
           border: 3px solid transparent;
           margin-bottom: 4.5rem !important;
        }


        .line::before{
            content: "";
            position: absolute;
            left: 50%;
            transform: translate(-50%,-50%);
            top: 4.5rem;
            border-radius: 100%;
            width:1.5rem;
            height:1.5rem;
            background:#303c59;
        }

        .line::after{
            content: "";
            position: absolute;
            left: 50%;
            transform: translate(-50%,-50%);
            top: 4.5rem;
            border-radius: 100%;
            width:0.75rem;
            height:0.75rem;
            background:#82EBC7;
        }
    }






`

export default Wrapper;