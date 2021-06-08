import React from 'react'
import styled from 'styled-components'
import ShopifyImg from '../images/Shopify.png'
import RealEstate from '../images/realestate.png'
import AppointmentImg from '../images/appointment.png'
import Calc from '../images/calc.png'
import Top from '../images/topadvice.png'
import Weather from '../images/weather.png'
import Fade from 'react-reveal/Fade';


function Projects() {
    return (
        <FullPageSectionWrapper>
            <HeaderText>
                Projects
            </HeaderText>
            <ProjectWrapper>
                <Fade left>
                    <ProjectCard side={'right'} left={'auto'}>
                        <ImgWrapper>
                            <CardImg src={ShopifyImg} width={'300px'} width2100={'260px'} width1500={'230px'} width1200={'200px'} />
                        </ImgWrapper>
                        <TextWrapper>
                            <CardHeader>Shopify Internship Project</CardHeader>
                            <CardText>A project made for my application for Shopify's fall batch of interns. Each applicant was required to make the same project. This project was completed under a tight deadline of 4 days. This website is constructed with React, Javascript, CSS, and hosted on Netlify. The application is completely responsive for each screen type, and was tested on different browsers and screens using CrossBrowserTesting.</CardText>
                            <WebsiteButton href="https://sharp-northcutt-2d3fab.netlify.app/">Visit Site</WebsiteButton>
                        </TextWrapper>
                    </ProjectCard>
                </Fade>
                <Fade right>
                    <ProjectCard side={'right'} right={'auto'}>
                        <ImgWrapper>
                            <CardImg src={RealEstate} width={'330px'} width2100={'290px'} width1500={'260px'} width1200={'220px'}/>
                        </ImgWrapper>
                        <TextWrapper>
                            <CardHeader>Real Estate Project</CardHeader>
                            <CardText>A project made with React, Javascript, Sass, Bootstrap and APIs. Purpose of this application is to search for properties for sale in the USA. The application contains an autocomplete feature on the first page. Once the user clicks an auto suggestion, using react router the user will be redirected to the next page with the listings.</CardText>
                            <WebsiteButton href="https://nifty-darwin-3f3d8f.netlify.app/">Visit Site</WebsiteButton>
                        </TextWrapper>
                    </ProjectCard>
                </Fade>
                <Fade left>
                    <ProjectCard side={'right'} left={'auto'}>
                        <ImgWrapper>
                            <CardImg src={AppointmentImg} width={'220px'} width2100={'180px'} width1500={'150px'} width1500={'150px'}/>
                        </ImgWrapper>
                        <TextWrapper>
                            <CardHeader>Appointments Application</CardHeader>
                            <CardText>This website is constructed with React, Javascript, CSS, and hosted on Netlify. A simple application for the user to create a list of contacts, and add appointments according to the contact.</CardText>
                            <WebsiteButton href="https://appointments-kevin.netlify.app/">Visit Site</WebsiteButton>
                        </TextWrapper>
                    </ProjectCard>
                </Fade>
                <Fade right>
                    <ProjectCard side={'right'} right={'auto'}>
                        <ImgWrapper>
                            <CardImg src={Calc} width={'130px'} width2100={'110px'} width1500={'90px'} width1000={'50px'}/>
                        </ImgWrapper>
                        <TextWrapper>
                            <CardHeader>Monthly Budget Calculator</CardHeader>
                            <CardText>A simple application made with Javascript, Html, and css. Uses dom manipulation to make changes in application. Currently working on rebuilding this application using react, redux, and typescript.</CardText>
                            <WebsiteButton href="https://kevinpanesar.com/Portfolio/BudgetingWebsite/index.html">Visit Site</WebsiteButton>
                        </TextWrapper>
                    </ProjectCard>
                </Fade>
                <Fade left>
                    <ProjectCard side={'right'} left={'auto'}>
                        <ImgWrapper>
                            <CardImg src={Top} width={'230px'} width2100={'210px'} width1500={'180px'} />
                        </ImgWrapper>
                        <TextWrapper>
                            <CardHeader>TopAdvice</CardHeader>
                            <CardText>A simple static website made with Wordpress for a local business, that has forms for lead generation. Also incorperated a mortgage calculator widget. Designed and and implemented this website, as well as designed and helped implement the company logo.</CardText>
                            <WebsiteButton href="https://topadvice4u.com/">Visit Site</WebsiteButton>
                        </TextWrapper>
                    </ProjectCard>
                </Fade>
                <Fade right>
                    <ProjectCard side={'right'} right={'auto'}>
                        <ImgWrapper>
                            <CardImg src={Weather} width={'200px'} width2100={'170px'} width1500={'140px'} />
                        </ImgWrapper>
                        <TextWrapper>
                            <CardHeader>Weather Application</CardHeader>
                            <CardText>A project made Javascript, HTML, and CSS, which uses an API to get the current weather data for the city the user has searched, and the weather for the next 7 days.</CardText>
                            <WebsiteButton href="https://kevinpanesar.com/Portfolio/Weather/index.html">Visit Site</WebsiteButton>
                        </TextWrapper>
                    </ProjectCard>
                </Fade>
            </ProjectWrapper>
        </FullPageSectionWrapper>
    )
}

export default Projects

const FullPageSectionWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    max-width:100%;
    background-color: white;
`

const HeaderText = styled.p`
     color: black;
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    font-size: 90px;
    line-height: 1.2;
    margin-left: 150px;
    margin-top: 150px;
     @media (max-width: 2100px) {
         font-size: 70px;
  }

   @media (max-width: 1255px) {
        margin-top: 100px;
        font-size: 55px;
  }

     @media (max-width: 768px) {
         text-align: center;
        margin-left: 0px;
        margin-top: 60px;
  }
    `
const ProjectWrapper = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-top: 100px;
        width: 70%;
        margin: 70px auto;
          @media (max-width: 2100px) {
         width: 90%;
  }
    `

const ProjectCard = styled.div`
    width: 55%;
    background-color: #7510F7;
    height: 400px;
    margin-left: ${props => props.left};
    margin-right: ${props => props.right};
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


      @media (max-width: 2100px) {
        width: 53%;
        height: 350px;
  }

  @media (max-width: 1519px) {
      width: 65%;
      height: 300px;
  }

    @media (max-width: 1519px) {
      width: 75%;
      height: 300px;
  }

   @media (max-width: 768px) {
         width: 95%;
          margin-left: auto;
    margin-right: auto;
  }

    @media (max-width: 650px) {
        height: auto;
        flex-direction: column;
         padding-bottom: 25px;
          padding-top: 20px;
  }
`

const CardImg = styled.img`
    width: ${props => props.width};
    padding:45px;
    @media (max-width: 2100px) {
        width: ${props => props.width2100};
  }

   @media (max-width: 1519px) {
        width: ${props => props.width1500};
  }

   @media (max-width: 1200px) {
        width: ${props=>props.width1200};
  }
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 45%;
    height: 80%;

    @media (max-width: 2100px) {
        width: 55%;
        height: 70%;
  }

      @media (max-width: 650px) {
        width: 90%;
        justify-content: center;
        height: 50%;
  }

`
const CardHeader = styled.p`
    color: white;
    font-size: 32px;
    margin-bottom: 20px;
    @media (max-width: 1519px) {
        font-size: 25px;
  }
   @media (max-width: 900px) {
        margin-bottom: 15px;
  }

      @media (max-width: 650px) {
          padding-top: 20px;
          text-align: center ;
          width: 100%;
  }
`

const CardText = styled.p`
    text-align: left;
    color: white;
    font-size: 18px;
    line-height: 1.2;
     @media (max-width: 2100px) {
        font-size: 16px;
  }

  @media (max-width: 1519px) {
        font-size: 14x;
  }
`
const WebsiteButton = styled.a`
    background-color: #ff2253;
    color: white;
    display: inline-block;
    padding: 0.7em 1.4em;
    margin-top: 15px;
    border-radius: 3px;
    box-sizing: border-box;
    text-decoration: none;
    font-weight: 600;
    text-align: center;
    transition: all 0.2s;
    border:none;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;

    &:hover{
        background-color: #d3002f;
        cursor: pointer;
}
@media (max-width: 2100px) {
        padding: 0.5em 1.2em;
}
 @media (max-width: 1519px) {
         padding: 0.3em 0.7em;
  }

`
const ImgWrapper = styled.div`
    width: 400px;
    height: 250px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;


     @media (max-width: 2100px) {
        width: 300px;
        height: 200px;
  }


  @media (max-width: 1519px) {
      width: 270px;
        height: 170px;
  }

   @media (max-width: 1519px) {
        width: 37%;
  }

       @media (max-width: 650px) {
        width: 90%;
  }
`