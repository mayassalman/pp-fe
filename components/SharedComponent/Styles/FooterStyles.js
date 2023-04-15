import styled from "styled-components";


const FooterWrapper = styled.main`




.footer{
    padding: 4.5rem 0 3rem;
    background: rgba(73, 89, 113, 0.08);
    mix-blend-mode: normal;
    backdrop-filter: blur(16.2887px);

    .ft-about{
        img{
            display: block;
        }

        p{
            color: #fff;
            margin-top: 1.5rem;
            width: 60%;
            font-size: 16px;
            line-height: 30px;
            font-weight: 400;
            font-family: 'Poppins';
            color: #D1E9FF;
            mix-blend-mode: normal;
        }
    }

    .social-media-links{
        margin-top: 2rem;
        margin-bottom: 1rem !important;
        img{
            margin-right:1rem;
            width:27px;
            cursor:pointer;
        }
    }

    .btm-footer{
        font-weight: 400;
        padding: 0 1rem;
        font-size: 16px;
        line-height: 18px;
        text-align: left;
        color: #D1E9FF;
        opacity: 0.7;
    }

    h3{
        color: #7AD8CD;
        font-size: 21px;
        font-family: 'Sora';
        font-weight:600;
        line-height: 30px;
        margin-bottom: 1.5rem !important;
    }


    .ft-links{
        list-style-type: none;
        padding-left:0rem;

        li{
            color: #fff;
            font-size: 15px;
            line-height: 24px;
            font-weight: 400;
            font-family: 'Poppins';
            color: #D1E9FF;
            padding: 0.6rem 0;
            cursor: pointer;
        }
    }
}










@media screen and (min-width: 992px) and (max-width: 1199px) {

}


@media screen and (min-width: 768px)and (max-width: 991px) {

    .footer{
        .ft-about{
            p{
                width:95%;
                text-align:left;
            }
        }
    }

}


@media screen and (min-width: 451px)and (max-width: 767px) {
    .footer{
        .ft-about{
            p{
                width:100%;
                text-align:left;
                margin-bottom:1.5rem !important;
            }
        }
    }


}

@media screen and (max-width: 450px) {
    .footer{
        padding-bottom: 1rem;
        .ft-about{
            p{
                width:100%;
                text-align:left;
                margin-bottom:1.5rem !important;
            }
        }
    }

}


`

export default FooterWrapper;
