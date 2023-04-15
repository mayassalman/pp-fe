import styled from "styled-components";


const Wrapper = styled.section`
padding: 6rem 0rem 4rem;
// background:  #090222;;
color: #fff;

h3{
    font-family: 'Sora';
    font-weight: 600;
    font-size: 64px;
    line-height: 113.5%;
    text-align: center;
    letter-spacing: -0.614263px;
    background: linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(93.63deg, #FFFFFF 1.55%, #A5A5A5 149.45%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    // margin-bottom: 0.5rem !important;
    position:relative;
    z-index: 100;
}

p{
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    width: 90%;
    margin: 3rem auto 3rem auto !important;
    color: #fff;
}


h2{
    font-family: 'Sora';
    font-weight: 700;
    font-size: 110px;
    line-height: 1.2;
    text-align: center;
    letter-spacing: -0.03em;
    background: linear-gradient(90.51deg, #87f9c2 8.05%, #6bb1d9 92.6%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin-bottom: 2rem !important;
}


span{
    display: block;
    font-family: 'Sora';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 76px;
    color: #FFFFFF;
    padding-bottom: 1rem;
    text-align:center;
}

@media screen and (min-width: 451px)and (max-width: 768px) {

    h3{
        font-size:54px;
    }

    h2{
        font-size: 80px;
    }
    
    p{
        font-size:18px;
        line-height: 32px;
        width:100%;
        margin-bottom: 3rem !important;
    }
}

@media screen and (max-width: 451px) {
    h3{
        font-size:42px;
    }

    h2{
        font-size: 60px;
    }

    p{
        font-size:18px;
        line-height: 32px;
        width:100%;
        margin-bottom: 3rem !important;
    }

    
}

@media screen and (max-width: 310px) {
    h3{
        font-size:40px;
    }

    h2{
        font-size: 54px;
    }

    p{
        font-size:18px;
        line-height: 32px;
        width:95%;
        margin-bottom: 3rem !important;
    }
}


`


export default Wrapper