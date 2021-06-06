import React from 'react'
import styled from 'styled-components'
import ShopifyImg from '../images/shopifyScreenshot.png'


function Projects() {
    return (
        <FullPageSectionWrapper>
            <HeaderText>
                Projects
            </HeaderText>
            <ProjectWrapper>
                <ProjectCard side={'right'} left={'auto'}>
                    <CardImg src={ShopifyImg}/>
                    <TextWrapper>
                        <CardHeader>Shopify Internship Project</CardHeader>
                        <CardText>A project made for my application for Shopify's fall batch of interns. Each applicant was required to make the same project. This project was completed under a tight deadline of 4 days. This website is constructed with React, Javascript, CSS, and hosted on Netlify. The application is completely responsive for each screen type, and was tested on different browsers and screens using CrossBrowserTesting. Within 4 days I designed, implemented, hosted, and tested this application.</CardText>
                        <WebsiteButton>Visit Site</WebsiteButton>
                    </TextWrapper>

                </ProjectCard>
                <ProjectCard side={'right'} right={'auto'}>

                </ProjectCard>
                <ProjectCard side={'right'} left={'auto'}>

                </ProjectCard>
                <ProjectCard side={'right'} right={'auto'}>

                </ProjectCard>
                <ProjectCard side={'right'} left={'auto'}>

                </ProjectCard>

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
    `
const ProjectWrapper = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-top: 100px;
        width: 70%;
        margin: 0 auto;
    `

const ProjectCard = styled.div`
    width: 55%;
    background-color: #7510F7;
    height: 400px;
    float: right;
    margin-left: ${props=>props.left};
    margin-right: ${props => props.right};
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const CardImg = styled.img`
    width: 420px;
    height: 250px;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 45%;
`
const CardHeader = styled.p`
    color: white;
    font-size: 32px;
    margin-bottom: 20px;
`

const CardText = styled.p`
    text-align: left;
    color: white;
    font-size: 18px;
    line-height: 1.2;
`
const WebsiteButton = styled.button`
    background-color: #00edc9;
    color: white;
    display: inline-block;
    padding: 0.5em 1.4em;
    margin-top: 15px;
    border-radius: 3px;
    box-sizing: border-box;
    text-decoration: none;
    font-weight: 600;
    text-align: center;
    transition: all 0.2s;
    border:none;
    font-size: 17px;

    &:hover{
        background-color: #00debc;
        cursor: pointer;
}
`