import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import image from '../images/house.png'

function Intro() {
    return (
        <FullPageSectionWrapper>
            <HeaderWrapper>
                <HeaderText>
                    Hi<br />I'm Kevin Panesar<br />Front End
                    <HeaderTextSpan>
                        <Highlight>
                            Web Developer
                        </Highlight>
                    </HeaderTextSpan>
                </HeaderText>
            </HeaderWrapper>
        </FullPageSectionWrapper>
    )
}

export default Intro


const FullPageSectionWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    max-width:100%;
    background-color: white;
    border-bottom: 4px solid black;
`

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`

const HeaderText = styled.p`
    color: black;
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    font-size: 70px;
    margin-left: 150px;
    line-height: 1.2;
`

const HeaderTextSpan = styled(HeaderText)`
  margin-left: 15px;
  color: black;
  display: inline;
`

const highlight = keyframes`
	0% { background-position: 0 0; }
	100% { background-position: -100% 0;
    color: white; }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Highlight = styled.div`
    display: inline;
	background: linear-gradient(to left, darkblue 50%, white 50%) right;
    background-size: 200%;
	background-position: 0px 0px;
	animation: ${highlight} 0.5s ease-in-out 0.5s 1 forwards;
    padding: 0 10px;
`;