import React from 'react'
import styled from 'styled-components'
import aboutMeImage from '../images/aboutme.jpeg'
import githubImg from '../images/github.png'
import linkedin from '../images/linkedin.png'
import email from '../images/email.png'
import Fade from 'react-reveal/Fade';
import { keyframes } from 'styled-components'

function AboutMe() {
    return (
        <FullPageSectionWrapper>
            <HeaderWrapper>
                <Fade bottom>
                    <HeaderTitle>
                        About Me
                </HeaderTitle>
                </Fade>
                <Fade delay={500} bottom>
                <HeaderText>
                        <br /> I am a Vancouver based front end developer currently working on building my portfolio by building projects, so I can showcase my passion for design and front-end web development.<br /><br /> My previous work experience is available on Linkedin. Outside of work I enjoy working on cars, and traveling. I am fluent in <UnderLine>HTML, CSS, JavaScript, React, Redux and styled components.</UnderLine> Please do not hesitate to contact me.
                 
                    <SocialMediaIconsWrapper>
                        <Fade delay={800} bottom>
                            
                            <li>
                                <a href="https://github.com/kevinpanesar">
                                    <GithubLogo title="Check out my code!" src={githubImg} />
                                </a>
                            </li>
                        </Fade>
                        <Fade delay={1200} bottom>
                            <li>
                                <a href="https://linkedin.com/in/kevin-panesar">
                                    <LinkedinLogo title="Lets connect on Linkedin!" src={linkedin} />
                                </a>
                            </li>
                        </Fade>
                        <Fade delay={1500} bottom>
                            <li>
                                <a href="mailto: kevin_panesar@hotmail.com">
                                    <EmailLogo src={email} />
                                </a>
                            </li>
                        </Fade>
                    </SocialMediaIconsWrapper>
                </HeaderText>
                </Fade>
            </HeaderWrapper>
            <Fade delay={1800} bottom>
                <AboutMeImg src={aboutMeImage} />
            </Fade>

        </FullPageSectionWrapper>
    )
}

export default AboutMe

const FullPageSectionWrapper = styled.div`
    width: 100vw;
    height: 80vh;
    max-width:100%;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;


   @media (max-width: 768px) {
         height: 50vh;
  }
  
  @media (max-width: 610px) {
    flex-direction: column;
    height: 100vh;
  }

`

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;



`

const HeaderTitle = styled.p`
    color: ${({ theme }) => theme.text};
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    font-size: 90px;
    margin-left: 150px;
    line-height: 1.2;

      @media (max-width: 2100px) {
        font-size: 70px;
  }

   @media (max-width: 1255px) {
        font-size: 50px;
  }

  @media (max-width: 1080px) {
        margin-left: 120px;
        font-size: 45px;
  }

  @media (max-width: 770px) {
        margin-left: 50px;
  }

  @media (max-width: 610px) {
        text-align: center;
        margin-left: 0px;
  }

`


const SocialMediaIconsWrapper = styled.div`
display: flex;
list-style: none;
margin-top: 15px;

a{
    margin-right: 15px;
}

   @media (max-width: 610px) {
        justify-content: center
  }

`


const HeaderText = styled.p`
    color: black;
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    font-size: 27px;
    margin-left: 150px;
    line-height: 1.4;

@media (max-width: 2100px) {
      font-size: 20px;
  }

   @media (max-width: 1255px) {
        font-size: 17px;
  }

   @media (max-width: 1080px) {
        margin-left: 120px;
         font-size: 15px;
         width: 400px;
  }

    @media (max-width: 770px) {
        margin-left: 50px;
        width: 70%;
  }

     @media (max-width: 610px) {
        margin: 0 auto;
        width: 80%;
  }
`
const AboutMeImg = styled.img`
    width: 37%;
    border: 10px solid #7510F7;
    padding: 15px;


   @media (max-width: 770px) {
       width: 150px;
       margin-right: 15px;
 }

   @media (max-width: 610px) {
        margin: 0 auto;
  }
`

const UnderLine = styled.span`
border-bottom: 3px solid #7510F7;
`
const GithubLogo = styled.img`
width: 70px;
cursor: pointer;
transition: all .2s ease-in-out;
border-radius: 50%;
&:hover{
    transform: scale(1.1);
}

 @media (max-width: 2100px) {
      width: 50px;
  }
`

const LinkedinLogo = styled(GithubLogo)``;

const EmailLogo = styled(GithubLogo)``;
