import styled from "styled-components";


const PartnerWrapper = styled.section`
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
    margin-bottom: 3.5rem !important;

}

.ant-col{
    text-align:center;
}

.partners_logo{
    opacity:0.5;
    cursor: pointer;
}

.partners_logo:hover{
    opacity:1;
}

.elrond{
    height:46px;
    width: 153px;
}

.polygon{
    height: 38px;
    width: 173px;
}

.flare{
    height: 53px;
    width: 96px;
}

.near{
    height: 60px;
    width: 154px;
}

.bumper{
    height: 24px;
    width: 186px;
}

.net-trading{
    height: 66px;
    width:166px;
}

.supra-oracles{
    height: 77px;
    width: 192px;
}

.shyft{
    height: 49px;
    width:121px;
}

.firo{
    height: 50px;
    width: 116px;
}

.sentinel{
    height: 45px;
    width: 200px;
}

@media screen and (min-width: 992px) and (max-width: 1199px) {}


@media screen and (min-width: 768px)and (max-width: 991px) {}



@media screen and (min-width: 451px)and (max-width: 767px) {
    h4{
        font-size: 21px;
        
    }
}


@media screen and (max-width: 451px) {
    h4{
        font-size: 21px;
        
    }

    .elrond{
        height:36.8px;
        width: 122.4px;
    }
    
    .polygon{
        height: 30.4px;
        width: 138.4px;
    }
    
    .flare{
        height: 42.4px;
        width: 76.8px;
    }
    
    .near{
        height: 48px;
        width: 123.2px;
    }
    
    .bumper{
        height: 19.2px;
        width: 148.8px;
    }
    
    .net-trading{
        height: 52.8px;
        width:132.8px;
    }
    
    .supra-oracles{
        height: 61.6px;
        width: 153.6px;
    }
    
    .shyft{
        height: 39.2px;
        width:96.8px;
    }
    
    .firo{
        height: 40px;
        width: 92.8px;
    }
    
    .sentinel{
        height: 36px;
        width: 160px;
    }
}

@media screen and (max-width: 375px) {
    h4{
        font-size: 21px;
        
    }
    
    .elrond{
        height:32.2px;
        width: 107.1px;
    }
    
    .polygon{
        height: 26.6px;
        width: 121.1px;
    }
    
    .flare{
        height: 37.1px;
        width: 67.2px;
    }
    
    .near{
        height: 42px;
        width: 107.8px;
    }
    
    .bumper{
        height: 16.8px;
        width: 130.2px;
    }
    
    .net-trading{
        height: 46.2px;
        width:116.2px;
    }
    
    .supra-oracles{
        height: 53.9px;
        width: 134.4px;
    }
    
    .shyft{
        height: 34.3px;
        width: 84.7px;
    }
    
    .firo{
        height: 35px;
        width: 81.2px;
    }
    
    .sentinel{
        height: 31.5px;
        width: 140px;
    }
}
`


export default PartnerWrapper