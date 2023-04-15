import styled from "styled-components";


const rollsWrapper = styled.section`
    position: relative;
    z-index:1;
    text-align:center;
    width:100%;
    padding-bottom:3rem;

    .partners_logo{
        opacity:0.7;
    }

    .ethereum{
        position:relative;
        z-index:100;
    }

    .polygon{
        position:relative;
        z-index:100;
    }

    .flare{
        position:relative;
        z-index:100;
    }

    .avalanche{
        position:relative;
        z-index:100;
    }

    .near{
        position:relative;
        z-index:100;
    }

    @media screen and (min-width: 991px) and (max-width: 1199px) {
        position: relative;
        // margin-top: 8rem;
    }

    @media screen and (min-width: 768px)and (max-width: 991px) {
        position: relative;
        // transform: translate(0,0%);
        // margin-top: 10rem;
    }


    @media screen and (min-width: 451px)and (max-width: 768px) {
        position: relative;
        // transform: translate(0,-0%);
        // margin-top: 10rem;
    }

    @media screen and (max-width: 451px) {
        position: relative;
        // transform: translate(0,-0%);
        // margin-top: 10rem;

        .ethereum{
            width: 129.24px;
            height: 32.9px;
        }
    
        .polygon{
            width: 117.9px;
            height: 26px;
        }
    
        .flare{
            width: 100.72px;
            height: 32.49px;
        }
    
        .avalanche{
            width: 131.296px;
            height: 27.168px;
        }
    
        .near{
            width: 106px;
            height: 41.6px;
        }
    }
`

export default rollsWrapper