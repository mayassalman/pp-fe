import styled from "styled-components";


const NavWrapper = styled.main`
position:relative;
z-index:20;

.main-navbar{
    padding-top: 1.5rem;
    color: #fff;

    .resp-hide{
        display:none;
    }

    .resp-links{
        display:none;
    }

    .nav-container{

        img{
            width:220px;
        }
        
        display:flex;
        align-items: center;
        justify-content: space-between;

        .resp-nav{
            display:none;
        }

        ul{
            display:flex;
            align-items:center;
            justify-content:center;
            list-style-type: none;
            margin-bottom: 0;
            padding:0;

            li{
                display: inline-block;
                margin-right: 3rem;
                font-family: 'Inter';
                font-style: normal;
                text-align:center;
                font-weight: 400;
                font-size: 16px;
                line-height: 1.2 !important;
                cursor: pointer;
                color: #fff !important;    

                .hovered{
                    background: rgba(99, 114, 136, 0.3);
                    mix-blend-mode: normal;
                    backdrop-filter: blur(20.1913px);
                    border-radius: 25px;
                    padding: 0.6rem;
                    width:150px;
                }
                
                .dropdown-link{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    width:150px;

                    span{
                        display:inline-block;
                        
                    }

                    svg{
                        display:inline-block;
                        font-size:18px;
                        margin-left: 0.5rem;
                    }

              
                }
            }

            li:last-child{
                margin-right: 3rem;
                margin-left: 1rem;
            }

            
        }

        

        button{
            padding: 0.9rem 2.5rem;
            font-style: normal;
            position:relative;
            font-weight: 700;
            font-size: 16px;
            font-family: 'Inter' !important;
            line-height: 22px;
            cursor:pointer;
            color:#fff; 
            border-radius: 60px;
            border: 2px solid transparent;
            position:relative;
            background: linear-gradient(rgba(217,217,217, 0.01), rgba(217,217,217, 0.01) ) padding-box,
            linear-gradient(71.13deg, #87F9C2 16.31%, #6CB2D9 87.27%) border-box;

      
            :hover{
                transform: scale(0.95) !important;
            }

            span{
                position:relative;
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
                }
            }


            img{
                display:inline-block;
                width:10px;
                position:relative;
                margin-left:0.5rem;
            }
        }
    }
}



@media (max-width: 1100px) and (min-width: 900px) {
    .main-navbar .nav-container ul li{
        margin-right:0.8rem;
        font-size:15px;

        :last-child{
            margin-right:0.8rem;
        }
    }




    .nav-container{
        img{
            width: 190px;
        }
    }

    
}



@media (max-width: 900px) {

        .hide-links{
            display: none;
          }
    
          

    .main-nav-resp{
        // padding-top:1rem;
        margin-top: 0rem !important;
        position:fixed;
        z-index:101;
        width:100%;
        // background:#020613;
        top:0;
    }

    .main-navbar{


        .resp-hide{
            display:none;
        }
        .resp-links{
            padding-top:30px;
            display: block;
            position: fixed;
            bottom:0;
            z-index:10;
            left:0;
            right:0;
            top:75px;
            height:auto;
            background:#090222;
            overflow-y:scroll !important;
            
            

            button{
                border-radius: 60px;
                padding: 1rem 2rem;
                border:0;
                font-style: normal;
                font-weight: 700;
                font-family: 'Inter' !important;
                font-size: 16px;
                line-height: 22px;
                width: 100%;
                margin-top: 3rem;
                margin-bottom:2rem;
                color: #fff !important; 
                border: 2px solid transparent;
                position: relative;
                background: linear-gradient(rgba(217, 217, 217, 0.05), rgba(217, 217, 217, 0.05)) padding-box,
                linear-gradient(90.51deg, #87F9C2 8.05%, #6BB1D9 92.6%) border-box;

                span{
                    position:relative;
                }

                img{
                    display:inline-block;
                    width:10px;
                    position:relative;
                    margin-left:0.5rem;
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

            }

            
        // button:hover{
        //     background: #3669E6;
        //     transform: scale(0.95);
        // }

            ul{
                list-style-type:none;

                .active{
                    display:block !important;
                }

                .resp-dropdown{
                    display:none;

                    li{
                        display: flex;
                        margin-left: 1rem;
                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 30px;
                        margin-top: 1rem;
                        align-items:center;
                        color: #fff !important; 
                        opacity: 0.8;   

                        svg{
                            display: inline-block;
                            margin-left:0.5rem;
                            color: #D1E9FF;
                            color: #fff !important; 
                            font-size: 21px;
                        }
                    }
                }

                li{
                    display: flex;
                    margin-left: 1rem;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 35px;
                    margin-top: 2rem;
                    align-items:center;
                    color: #fff !important; 
                    opacity: 0.8;   

                    svg{
                        display: inline-block;
                        margin-left:0.5rem;
                        color: #D1E9FF;
                        font-size: 21px;
                    }
                }
            }
        }


  
        .nav-container{
                img{
                    width: 190px;
                }
                .hide-links{
                    display: none;
                }


          .resp-nav{
            display:block;

            ul{
                display:block;
            }

            span{
                cursor:pointer;
                display:block;
                svg{
                    font-size:30px;
                }
            }
           
          }
        }
    }





`


export default NavWrapper;