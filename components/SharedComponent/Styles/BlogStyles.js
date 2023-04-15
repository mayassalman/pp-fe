import styled from "styled-components";

const Wrapper = styled.section`

height:100%;

    .blog-card{

        background:transparent;
        height:100%;
        border-radius: 20px;
        position:relative;
        z-index:1;
        cursor:pointer;
        border:0 !important;
        padding-top:1.5px;
        padding-bottom:1.5px;
        padding-right:1.5px;
        padding-left:1.5px;
        // background: rgba(110, 135, 143, 0.1);
        // backdrop-filter: blur(4px);
        // 
        // mix-blend-mode: normal;
        // width: auto;
        // border:0;
        // padding:24px;


        :hover{
            background: linear-gradient(transparent,transparent) padding-box, linear-gradient(48.96deg, rgba(138, 171, 255, 0.624) -0.49%, rgba(0, 0, 0, 0) 71.4%),
            linear-gradient(244.56deg, rgba(138, 171, 255, 0.624) 0%, rgba(72, 82, 103, 0) 79.11%) border-box;
        }
  
        // :hover{
        //     background: rgba(73, 89, 113, 0.4);
        //     mix-blend-mode: normal;
        //     backdrop-filter: blur(15.1294px);
        // }

        .sec-overlay{
            position:relative;
            background:#090222;
            height:100%;
            border-radius: 20px;

            .sec-layer{
                position:relative;
                padding: 24px;
                border-radius: 20px;
                background: rgba(110, 135, 143, 0.1);
                // backdrop-filter: blur(4px);
                mix-blend-mode: normal;
                height:100%;
                width: auto;

                :hover{
                    background:rgba(73, 89, 113, 0.4);
                }
            }

         
        }
 

        .img-container{
            width:100%;
            max-height:250px;
            
        }

        img{
            width: 100%;
            max-height:250px;
            height: 100%;
            border-radius: 15px;
        }


        h3{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 28px;
            color: #D1E9FF;
            margin: 1.5rem 0rem 0rem 0rem !important;
            max-height: 180px;
            height: 120px;
        }

        .div{
            display:flex;
            align-items:center;
            justify-content: space-between;

            p{
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 28px;
                color: #7AD8CD;
                display:flex;
                align-items:center;

  

                img{
                    display:inline-block;
                    width: 8px;
                }
            }


        }
    }


    @media screen and (min-width: 451px)and (max-width: 767px) {
        .blog-card {
            .sec-overlay{
                .sec-layer{
                    padding: 16px;
                }
            }
        }

        .blog-card{
            h3{
                font-size:18px;

            }
        }
    }


    @media screen and (max-width: 451px) {
        .blog-card {
            .sec-overlay{
                .sec-layer{
                    padding: 16px;
                }
            }
        }
        .blog-card{
            h3{
                font-size:18px;

            }
        }
    }
`

export default Wrapper;