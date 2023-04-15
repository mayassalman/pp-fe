import styled from "styled-components";


const SCWrapper = styled.section`
padding: 6rem 0;

h4{
    font-family: 'Sora';
    font-weight: 600;
    font-size: 21px;
    line-height: 42px;
    text-align: center;
    letter-spacing: 0.255em;
    text-transform: uppercase;
    background: linear-gradient(90.51deg, #87F9C2 8.05%, #6BB1D9 92.6%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

}


.audit-sec{
    margin-top:2.5rem;
    align-items:stretch;

      
        .sec-card{ 
            border-radius: 20px;
            position:relative;
            z-index:1;
            cursor:pointer;
            background:transparent;
            height:100%;
            text-align:center;
            border:0 !important;
            padding-top:1.5px;
            padding-bottom:1.5px;
            padding-right:1.5px;
            padding-left:1.5px;

           

            :hover{
                background: linear-gradient(transparent,transparent) padding-box, linear-gradient(48.96deg, rgba(138, 171, 255, 0.624) -0.49%, rgba(0, 0, 0, 0) 71.4%),
                linear-gradient(244.56deg, rgba(138, 171, 255, 0.624) 0%, rgba(72, 82, 103, 0) 79.11%) border-box;
                mix-blend-mode: normal;
            }

            .sec-overlay{
                position:relative;
                background:#090222;
                height:100%;
                border-radius: 20px;

                .sec-layer{
                    position:relative;
                    padding: 2.2rem 2.3rem;
                    border-radius: 20px;
                    background: rgba(73, 89, 113, 0.15);
                    height:100%;

                    :hover{
                        background:rgba(73, 89, 113, 0.4);
                    }
                }

             
            }



            img{
                height:40px;
            }
    
            h5{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                padding: 1.2rem 0 0 0;
                font-size: 14px;
                line-height: 20px;
                color: #888B92;
                display:flex;
                align-items:center;
                justify-content:center;
    
                span{
                    display:inline-block;
                }
    
                img{
                    width: 12px;
                    height:12px;
                    display:inline-block;
                    margin-left:0.5rem;
                }
            }




        
            
        }
    


        

    
    
    
}

@media screen and (min-width: 1200px) and (max-width: 1250px) {

    .audit-sec .sec-card img{
        width: 100%;
    }
    .audit-sec{
        .sec-card{
            padding:0;
    
            h5{
                font-weight: 500;  
                font-size: 16px;
    
                img{
                    width: 9px;
                    height:12px;
                    margin-left:0.5rem;
                }
            }
        }
    }

}




@media screen and (min-width: 1100px) and (max-width: 1200px) {

    .audit-sec .sec-card img{
        width: 100%;
    }

}

@media screen and (min-width: 992px) and (max-width: 1100px) {

    .audit-sec .sec-card img{
        width: 100%;
    }
    .audit-sec .sec-card   .sec-layer{
        padding:18px !important;
    }

    p{
        width:80%;
    }



}
@media screen and (min-width: 768px)and (max-width: 991px) {

    p{
        width:80%;
    }

    .audit-sec{
        .sec-card{

            h5{
                font-weight: 500;  
                font-size: 16px;
    
                img{
                    width: 9px;
                    height:12px;
                    margin-left:0.5rem;
                }
            }
        }

    
    }

}

@media screen and (min-width: 561px)and (max-width: 767px) {

    h4{
        font-size: 21px;
        
    }

    p{
        font-size:18px;
        line-height: 32px;
        width:100%;
        margin-bottom: 3rem !important;
    }

    .audit-sec .sec-card   .sec-layer{
        padding:18px !important;
    }


}
@media screen and (min-width: 451px)and (max-width: 560px) {

    h4{
        font-size: 21px;
        
    }

    p{
        font-size:18px;
        line-height: 32px;
        width:100%;
        margin-bottom: 3rem !important;
    }
    
}
@media screen and (max-width: 451px) {
    h4{
        font-size: 21px;
        
    }

    p{
        font-size:18px;
        line-height: 32px;
        width:95%;
        margin-bottom: 3rem !important;
    }


    .audit-sec{
        .sec-card{
 
            h5{
                font-weight: 500;  
                font-size: 16px;
    
                img{
                    width: 9px;
                    height:12px;
                    margin-left:0.5rem;
                }
            }
        }

    
    }

    
}



@media screen and (max-width: 350px) {

    h4{
        font-size: 21px;
        
    }

    p{
        font-size:18px;
        line-height: 32px;
        width:95%;
        margin-bottom: 3rem !important;
    }
}

`
export default SCWrapper
