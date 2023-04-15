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


const CommunityWrapper = styled.section`
padding: 6rem 0;
// background: #020613;

h4{
    font-family: 'Sora';
    font-weight: 600;
    font-size: 60px;
    line-height: 1;
    text-align: center;
    letter-spacing: -0.03em;
    background: linear-gradient(92.53deg, #3669E6 0%, #A0EFE1 95.77%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin-bottom: 2rem !important;
    animation: ${gradient} 3s ease-in-out infinite;
    background-size: 150%;
}

p{
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 24px;
    line-height: 37px;
    text-align: center;
    margin: 0 auto 3rem auto !important;
    color: #D1E9FF;
}



.community-stats{
    margin-top:5rem;
    .ant-card{
        padding: 2rem 1rem;
        background: rgba(129, 149, 206, 0.2);
        backdrop-filter: blur(43.4458px);
        border-radius: 20px;
        border:0 !important;

        .ant-body{
            display: flex;
            align-items:center;
            justify-content: center;
        }
        .ant-card-body{
            display: flex;
            align-items:center;
            justify-content: center;
            padding: 0;
        }

        img{
            display:block;
            margin-right: 2rem;
        }

        h5{
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            line-height: 30px;
            color: #fff;
            margin-bottom: 0.6rem !important;
        }

        p{
            font-weight: 400;
            font-size: 16px !important;
            line-height: 30px;
            width:100%;
            margin: 0 !important;
            text-align: left;

        }


    }
}


@media screen and (min-width: 992px) and (max-width: 1199px) {}

@media screen and (min-width: 768px)and (max-width: 991px) {}

@media screen and (min-width: 451px)and (max-width: 767px) {
    h4{
        font-size: 56px;
        width:100%;
        margin-right:auto;
        margin-left: auto;
        margin-bottom: 1.5rem !important;
    }

    p{
        font-size:18px;
        line-height: 32px;
        width:80%;
        margin-bottom: 3rem !important;
    }

}

@media screen and (max-width: 450px) {

    h4{
        font-size: 48px;
        width: 100%;
        margin-right:auto;
        margin-left: auto;
        margin-bottom: 1.5rem !important;
    }

    p{
        font-size:18px;
        line-height: 32px;
        width:90%;
        margin-bottom: 3rem !important;
    }
}


`

export default CommunityWrapper