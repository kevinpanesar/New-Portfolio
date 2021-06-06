import React from 'react'
import ProgressBar from './ProgressBar';
import styled from 'styled-components'
import JavaScript from '../images/JavaScript-logo.png'
import Bootstrap from '../images/bootstrap.png'
import CSS from '../images/css.png'
import Git from '../images/gitLogo.png'
import HTML from '../images/html.png'
import ReactImg from '../images/react.png'
import Sass from '../images/sassLogo.png'
import Redux from '../images/Redux.png'
import Styled from '../images/styled.png'

function Skills({ theme }) {
    return (
        <FullPageSectionWrapper>
            <TitleAndProgessBarWrapper>
                <HeaderText>
                    Skills & Experience
            </HeaderText>
                <SkillLevelWrapper>
                    <SkillItemWrapper>
                        <p>React</p>
                        <ProgressBar skillLevel={80} backgroundColor={'#ff2253'} />
                    </SkillItemWrapper>
                    <SkillItemWrapper>
                        <p>Redux</p>
                        <ProgressBar skillLevel={60} backgroundColor={'#08fdd8'}/>
                    </SkillItemWrapper>
                    <SkillItemWrapper>
                        <p>CSS</p>
                        <ProgressBar skillLevel={80} backgroundColor={'#d26cd5'}/>
                    </SkillItemWrapper>
                    <SkillItemWrapper>
                        <p>JavaScript</p>
                        <ProgressBar skillLevel={90} backgroundColor={'#7510F7'}/>
                    </SkillItemWrapper>
                </SkillLevelWrapper>
            </TitleAndProgessBarWrapper>
            <SkillNamesWrapper>
                <SkillName >
                    <SkillImg src={JavaScript} />
                    <p>JavaScript</p>
                </SkillName >
                <SkillName >
                    <SkillImg src={HTML} />
                    <p>HTML5</p>
                </SkillName >
                <SkillName >
                    <SkillImg src={CSS} />
                    <p>CSS3</p>
                </SkillName >
                <SkillName >
                    <SkillImg src={ReactImg} />
                    <p>React</p>
                </SkillName >
                <SkillName >
                    <SkillImg src={Sass} />
                    <p>SASS</p>
                </SkillName >
                <SkillName >
                    <SkillImg src={Bootstrap} />
                    <p>Bootstrap</p>
                </SkillName >
                <SkillName >
                    <SkillImg src={Git} />
                    <p>Git</p>
                </SkillName >
                <SkillName >
                    <SkillImg src={Redux} />
                    <p>Redux</p>
                </SkillName >
                <SkillName >
                    <SkillImg src={Styled} />
                    <p>Styled Components</p>
                </SkillName >
            </SkillNamesWrapper>
        </FullPageSectionWrapper>
    )
}

export default Skills

const FullPageSectionWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    max-width:100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
`

const HeaderText = styled.p`
     color: black;
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    font-size: 90px;
    line-height: 1.2;
    `

const SkillLevelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 80%;
    overflow: hidden;
`
const SkillItemWrapper = styled.div`
    display: block;
    text-align: left;
    p{
        margin-top: 25px;
        margin-bottom: 5px;
        font-family: 'Montserrat', sans-serif;
        font-size: 25px;
    }
`
const TitleAndProgessBarWrapper = styled.div`
    display:  flex;
    flex-direction: column;
    margin-left: 150px;
    justify-content: space-between;
    height: 600px;
`
const SkillNamesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

const SkillName = styled.div`
    width: 200px;
    background-color: #7510F7;
    padding: 20px;
    border-radius: 20px;
    p{
        font-family: 'Montserrat', sans-serif;
        font-size: 25px;
        font-weight: 600;
        color: white;
        margin-top: 10px;
    }
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const SkillImg = styled.img`
    height: 120px;

`