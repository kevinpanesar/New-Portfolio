import {React,useEffect} from 'react'
import ProgressBar from './ProgressBar';
import styled from 'styled-components'
import JavaScript from '../images/JavaScript-logo.png'
import Bootstrap from '../images/bootstrap.png'
import CSS from '../images/css.png'
import Git from '../images/gitLogo.png'
import HTML from '../images/html.png'
import ReactImg from '../images/react.png'
import Sass from '../images/sassLogo.png'
import Redux from '../images/redux.png'
import Styled from '../images/styled.png'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


function Skills({ theme }) {



    return (
        <FullPageSectionWrapper id="Skills">
            <TitleAndProgessBarWrapper>
                <Slide left>
                    <HeaderText>
                        Skills & Experience
                     </HeaderText>
                </Slide>
                <Slide left>
                    <SkillLevelWrapper>
                        <SkillItemWrapper>
                            <p>React</p>
                            <ProgressBar skillLevel={80} backgroundColor={'#ff2253'} />
                        </SkillItemWrapper>
                        <SkillItemWrapper>
                            <p>Redux</p>
                            <ProgressBar skillLevel={60} backgroundColor={'#08fdd8'} />
                        </SkillItemWrapper>
                        <SkillItemWrapper>
                            <p>CSS</p>
                            <ProgressBar skillLevel={80} backgroundColor={'#d26cd5'} />
                        </SkillItemWrapper>
                        <SkillItemWrapper>
                            <p>JavaScript</p>
                            <ProgressBar skillLevel={90} backgroundColor={'#7510F7'} />
                        </SkillItemWrapper>
                    </SkillLevelWrapper>
                </Slide>
            </TitleAndProgessBarWrapper>

            <SkillNamesWrapper>
                <Fade delay={500} bottom>
                    <SkillName >
                        <SkillImg src={JavaScript} />
                        <p>JavaScript</p>
                    </SkillName >
                </Fade>
                <Fade delay={700} bottom>
                    <SkillName >
                        <SkillImg src={HTML} />
                        <p>HTML5</p>
                    </SkillName >
                </Fade>
                <Fade delay={900} bottom>

                    <SkillName >
                        <SkillImg src={CSS} />
                        <p>CSS3</p>
                    </SkillName >
                </Fade>
                <Fade delay={1100} bottom>
                    <SkillName >
                        <SkillImg src={ReactImg} />
                        <p>React</p>
                    </SkillName >
                </Fade>
                <Fade delay={1300} bottom>
                    <SkillName >
                        <SkillImg src={Sass} />
                        <p>SASS</p>
                    </SkillName >
                </Fade>
                <Fade delay={1500} bottom>
                    <SkillName >
                        <SkillImg src={Bootstrap} />
                        <p>Bootstrap</p>
                    </SkillName >
                </Fade>
                <Fade delay={1700} bottom>
                    <SkillName >
                        <SkillImg src={Git} />
                        <p>Git</p>
                    </SkillName >
                </Fade>
                <Fade delay={1900} bottom>
                    <SkillName >
                        <SkillImg src={Redux} />
                        <p>Redux</p>
                    </SkillName >
                </Fade>
                <Fade delay={2100} bottom>
                    <SkillName >
                        <SkillImg src={Styled} />
                        <p>Styled Components</p>
                    </SkillName >
                </Fade>
            </SkillNamesWrapper>
        </FullPageSectionWrapper>
    )
}

export default Skills

const FullPageSectionWrapper = styled.div`
    width: 100vw;
    max-width:100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media (max-width: 2100px) {
  }
    
`

const HeaderText = styled.p`
     color: black;
    font-family: 'Roboto', sans-serif;
    text-align: left;
    font-size: 90px;
    line-height: 1.2;

        @media (max-width: 2100px) {
         font-size: 70px;
  }

   @media (max-width: 1255px) {
        font-size: 55px;
  }

    @media (max-width: 1080px) {
        font-size: 45px;
  }

     @media (max-width: 608px) {
        width: 70%;
        margin: 0 auto;
        font-size: 40px;
    }
    `

const SkillLevelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 80%;
    overflow: hidden;

    @media (max-width: 1000px) {
        height: 250px;
    }

     @media (max-width: 768px) {
        width: 100%;
    }

     @media (max-width: 608px) {
        width: 70%;
        margin: 0 auto;
    }
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

    @media (max-width: 2100px) {
        p{
        font-size: 20px;
    }
  }


       @media (max-width: 1080px) {
           height: 250px;
        p{
        font-size: 16px;
    }
    }
`
const TitleAndProgessBarWrapper = styled.div`
    display:  flex;
    flex-direction: column;
    margin-left: 150px;
    justify-content: space-evenly;
    height: 600px;


    @media (max-width: 1255px) {
        height: 450px;
  }

  @media (max-width: 1080px) {
    margin-left: 120px;
    height: 400px;

  }

    @media (max-width: 768px) {
    margin: 0 auto;

  }
`
const SkillNamesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
`

const SkillName = styled.div`
    width: 150px;
    height: 140px;
    background-color: #7510F7;
    padding: 20px;
    border-radius: 20px;
    margin: 20px;
    p{
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: white;
        margin-top: 10px;
    }
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width: 2100px) {
        width: 160px;
        height: 120px;

    p{
        font-size: 20px;
    }
    }

    @media (max-width: 1255px) {
        width: 120px;
        height: 90px;

    p{
        font-size: 14px;
    }
    }

    @media (max-width: 950px) {
        width: 80px;
        height: 70px;

    p{
        font-size: 13px;
    }
    }

    
`

const SkillImg = styled.img`
    height: 100px;
    @media (max-width: 2100px) {
        height: 80px;
    }
      @media (max-width: 1255px) {
        height: 65px;
  }

   @media (max-width: 950px) {
        height: 50px;
    }

`