import React from 'react'
import styled from 'styled-components'
import aboutMeImage from '../images/aboutme.jpeg'
import githubImg from '../images/github.png'
import linkedin from '../images/linkedin.png'
import email from '../images/email.png'
import ScrollDown from './ScrollDown';

function AboutMe() {
    return (
        <FullPageSectionWrapper>
            <HeaderWrapper>
                <HeaderTitle>
                    About Me
                </HeaderTitle>
                <HeaderText>
                    <br /> I am a Vancouver based front end developer currently working on building my portfolio by building projects, so I can showcase my passion for design and front-end web development.<br /><br /> My previous work experience is available on Linkedin. Outside of work I enjoy working on cars, and traveling. I am fluent in <UnderLine>HTML, CSS, JavaScript, React, Redux and styled components</UnderLine>. Please do not hesitate to contact me.
                    <SocialMediaIconsWrapper>
                        <li>
                            <a href="https://github.com/kevinpanesar">
                                <GithubLogo title="Check out my code!" src={githubImg} />
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/in/kevin-panesar">
                                <LinkedinLogo title="Lets connect on Linkedin!" src={linkedin} />
                            </a>
                        </li>
                        <li>
                            <a href="mailto: kevin_panesar@hotmail.com">
                                <EmailLogo src={email} />
                            </a>
                        </li>
                    </SocialMediaIconsWrapper>
                </HeaderText>
            </HeaderWrapper>
            <AboutMeImg src={aboutMeImage} />
        </FullPageSectionWrapper>
    )
}

export default AboutMe

const FullPageSectionWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    max-width:100%;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40vw;
    height: 100vh;
`

const HeaderTitle = styled.p`
    color: ${({ theme }) => theme.text};
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    font-size: 90px;
    margin-left: 150px;
    line-height: 1.2;
`

const SocialMediaIconsWrapper = styled.div`
display: flex;
list-style: none;
margin-top: 15px;

a{
    margin-right: 15px;
}
`


const HeaderText = styled.p`
    color: black;
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    font-size: 27px;
    margin-left: 150px;
    line-height: 1.4;
`
const AboutMeImg = styled.img`
    height: 600px;
    margin-right: 300px;
    border: 10px solid #7510F7;
    padding: 15px;
`

const UnderLine = styled.span`
border-bottom: 3px solid #7510F7;
`
const GithubLogo = styled.img`
width: 70px;
cursor: pointer;
transition: all .2s ease-in-out;

&:hover{
    transform: scale(1.1);
}
`

const LinkedinLogo = styled(GithubLogo)``;

const EmailLogo = styled(GithubLogo)``;
