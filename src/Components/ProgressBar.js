import React from "react";
import styled from 'styled-components';
import { keyframes } from 'styled-components'

const testData = [
    { bgcolor: "#6a1b9a", completed: 60 },
    { bgcolor: "#00695c", completed: 30 },
    { bgcolor: "#ef6c00", completed: 53 },
];

const ProgressBar = (props) => {

    console.log(props);

    return (
        <ProgressContainer>
            <FillerStyles skillLevel={props.skillLevel} backgroundColor={props.backgroundColor}>
            </FillerStyles>
        </ProgressContainer>
    );
};

export default ProgressBar;

const ProgressContainer = styled.div`
    height: 10px;
    width: 100%;
    background-color: lightgray;
    border-radius: 50px;
`;

const width = (y) => {
   return keyframes`
    0% {
      width: 0%;;
    }
    100% {
      width: ${y}%;
    }
    `
}

const FillerStyles = styled.div`
    height: 10px;
    background-color: ${props => props.backgroundColor};
    animation: ${props=>width(props.skillLevel)} 1s ease-in-out 5s 1 forwards;
`;

