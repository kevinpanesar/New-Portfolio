import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import Net from 'vanta/dist/vanta.net.min'
import { store } from '../app/store'
import ScrollDown from './ScrollDown';
import Slide from 'react-reveal/Slide';
function Intro() {

    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(Net({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x3462ff,
                backgroundColor: 0xffffff,
                points: 20.00
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }


    }, [vantaEffect])

    return (
        <FullPageSectionWrapper ref={myRef}>
            <Overlay />
            <HeaderWrapper>
                <Slide>
                    <TitleWrapper>
                          <HeaderText>
                        Hi,<WavingHand src="https://img.icons8.com/nolan/64/hand.png" /><br />I'm Kevin Panesar<br />Front End

                    <HeaderTextSpan>
                            <Highlight>
                                Web Developer
                        </Highlight>
                        </HeaderTextSpan>
                    </HeaderText>
                    </TitleWrapper>
                  
                </Slide>
            </HeaderWrapper>
            <ScrollDown />
        </FullPageSectionWrapper>
    )
}

export default Intro


const FullPageSectionWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    max-width:100%;
    background-color: white;
    overflow: hidden;

  @media (max-width: 768px) {
    height: 100vh;
  }


`

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`

const HeaderText = styled.p`
     color: ${({ theme }) => theme.text};
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    font-size: 90px;
    margin-left: 150px;
    line-height: 1.2;
    background-color: white;
    display:inline-block;

    @media (max-width: 2100px) {
      font-size: 70px;
  }

   @media (max-width: 1500px) {
      font-size: 60px;
  }

     @media (max-width: 1255px) {
      font-size: 50px;
  }

    @media (max-width: 1080px) {
        font-size: 45px;
        margin-left: 120px;
  }


    @media (max-width: 768px) {
        font-size: 40px;
        background-color: white;
        margin-left: 0px;
        
  }

  

`

const TitleWrapper = styled.div`
    width: 100%;
    display: flex;


    @media (max-width: 768px) {
        background-color: white;
        justify-content: center;

  }

`

const HeaderTextSpan = styled(HeaderText)`
  margin-left: 15px;
  color: ${({ theme }) => theme.text};
  display: inline;
`
const wave = keyframes`
    0% {
        transform-origin: bottom center;
        transform: rotate(-30deg);
    }

    100%{
        transform: rotate(30deg);
        transform-origin: bottom center;
    }
`

const WavingHand = styled.img`
animation: ${wave} 1s linear 0s infinite alternate;
padding-left: 10px;
position: relative;
vertical-align: auto;
width: 80px;

  @media (max-width: 2100px) {
    width: 60px;
  }
`

const highlight = keyframes`
	0% { background-position: 0 0; }
	100% { background-position: -100% 0;
            color: white; }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Highlight = styled.div`
    display: inline;
	background: linear-gradient(to left, #7510F7 50%, white 50%) right;
    background-size: 200%;
	background-position: 0px 0px;
	animation: ${highlight} 1s ease-in-out 1s 1 forwards;
    padding: 0 10px;
    @media (max-width: 610px) {
        background-color: white;
        justify-content: center;
        display: block;

  }
`;

const Overlay = styled.div`
  position: fixed; /* Sit on top of the page content */
  display: none; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.); /* Black background with opacity */
  z-index: 1500; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
`

