import styled from "styled-components";


const NewsWrapper = styled.section`
padding: 6rem 0 8rem;;
// background:  #090222;

h4{
    font-family: 'Sora';
    font-weight: 600;
    font-size: 54px;
    line-height: 62px;
    text-align: center;
    letter-spacing: -0.614263px;
    color: #fff;
    margin-bottom: 2rem !important;
}

p{
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 20px;
    line-height: 35px;
    text-align: center;
    width: 45%;
    margin: 0 auto 4rem auto !important;
    color: #D1E9FF;
}

h6{
    width:45%;
    padding: 0.8rem 0.8rem 0.6rem 1.5rem;
    margin-left: auto;
    margin-right:auto;
    font-size:16px;
}

.form-cta{

    position:relative;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-radius: 60px;  
    padding: 0.6rem 0.8rem 0.6rem 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(1.68793px);
    width: 45%;
    margin: 0 auto;
    border: 3px solid transparent;

    input{
        background:transparent;
        padding: 6px 6px 6px 10px;
        display: block;
        color: #fff;
        width: 65%;
        border:none;
        outline: none;
    }

    input:focus-visible{
         outline-width:0;
     }
 

    button{
        padding: 0.8rem 2.5rem;
        border-radius: 60px;
        display: flex;
        font-weight: 700;
        font-size: 16px;
        line-height: 16px;
        font-family: 'Inter';
        color: #fff;
        align-items: center;
        cursor: pointer;
        border: 2px solid transparent;
        backdrop-filter: blur(72.0899px);
        background: linear-gradient(#090222, #090222) padding-box,
        linear-gradient(90.51deg, #87F9C2 8.05%, #6BB1D9 92.6%) border-box;

        :hover{
            transform: scale(0.9);
        }
        
        .btn-overlay{
            position:absolute;
            top:0;
            left:0;
            right:0;
            bottom:0;
            background: #090222;
            border-radius: 60px;
            height:100%;

            .i-overlay{
                position:absolute;
                top:0;
                left:0;
                right:0;
                bottom:0;
                background: rgba(217, 217, 217, 0.05);
                border-radius: 60px;
                height:100%;
                z-index:1;

                // :hover{
                //     background:transparent;
                // }
            }
        }

        span{
            display:inline-block;
            position:relative;

        }
        img{
            display:inline-block;
            position:relative;
            width:10px;
            margin-left:0.5rem;
        }
    }


}

@media screen and (min-width: 992px) and (max-width: 1199px) {
    p{
        font-size: 20px;
        line-height: 35px;
        width:75%;
    }
    
    h6{
        width: 65%;
    }
    .form-cta{
        width: 65%;

        input{
            width: 70%;
        }
    }
}

@media screen and (min-width: 768px)and (max-width: 991px) {

    p{
        font-size: 20px;
        line-height: 35px;
        width:80%;
    }

    h6{
        width: 60%;
    }

    .form-cta{
        width: 60%;

        button{
            padding: 0.8rem 1.8rem;
        }

        input{
            width: 65%;
        }
    }

}

@media screen and (min-width: 451px)and (max-width: 767px) {
    h4{
        font-size: 42px;
        width:100%;
        margin-right:auto;
        margin-left: auto;
        margin-bottom: 1.5rem !important;
    }

    p{
        font-size: 20px;
        line-height: 35px;
        width:80%;
        margin-bottom: 3rem !important;
    }

    h6{
        width: 92%;
        padding: 0.9rem 1rem 0.9rem 1.2rem;
    }
    .form-cta{
        width: 92%;
        padding: 0.9rem 1rem 0.9rem 1.2rem;

        input{
            width: 65%;
        }

        button{
            padding: 0.9rem 1.5rem;
            font-size: 14px;
            line-height: 1;


            img{
                display:inline-block;
                width:8px;
                margin-left:0.3rem;
            }
        }
    }


}

@media screen and (max-width: 451px) {
    h4{
        font-size: 36px;
        width:100%;
        margin-right:auto;
        margin-left: auto;
        margin-bottom: 1.5rem !important;
    }

    p{
        font-size:16px;
        line-height: 25px;
        width:90%;
        margin-bottom: 3rem !important;
    }

    h6{
        width: 100%;
        padding: 0.8rem 0.8rem 0.8rem 1rem;
    }
    
    .form-cta{
        width: 100%;
        padding: 0.8rem 0.8rem 0.8rem 1rem;
        
        input{
            width: 65%;
        }

        button{
            padding: 0.7rem 0.9rem;
            font-size: 14px;
            line-height: 1;


            img{
                display:inline-block;
                width:8px;
                margin-left:0.3rem;
            }
        }

        
    }
}



`

export default NewsWrapper