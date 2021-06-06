import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

function ScrollDown() {
    return (
        <ScrollDownContainer>
            <LineAnimation />
            <p>Scroll Down</p>


        </ScrollDownContainer>
    )
}

export default ScrollDown

const ScrollDownContainer = styled.aside`
  display: flex;
  flex-direction: row;
  position: absolute;
  align-items: center;
  left: 0;
  bottom: 0;
  margin-left: 25px;
  height: 50px;
  overflow: hidden;
  z-index: 300;

  p{
      font-size: 25px;
      font-family: 'Montserrat', sans-serif;
  }
`
const scroll = keyframes`
	0% {
			left: 0;
		}
	100% {
			left: 200%;
		}
`;

const LineAnimation = styled.div`
	width: 40px;
	height: 2px;
	background: #fff;
    transform: rotate(90deg);
    

    &::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #7510F7;
		animation-duration: 1s;
        animation-timing-function: ease-out;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        animation-direction: normal;
        animation-fill-mode: forwards;
        animation-play-state: running;
        animation-name: ${scroll};
		}

`

