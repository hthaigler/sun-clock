import React from 'react';
import styled, { keyframes } from 'styled-components';
import { MOON_WHITE, WATER_BLUE, SUN_YELLOW } from '../consts/colors';
import {getSunYPos, getMoonYPos, getCycleOpacity, isDaylight} from '../utils';

export class Sun extends React.Component<{
    temp: number,
    date: Date,
    sunrise: number,
    sunset: number
},{
    height: number,
    color: string
}> {
    render() {
        return (
            <Wrapper>
                <SunCircle y={getSunYPos(this.props.date, this.props.sunrise, this.props.sunset)}
                    active={isDaylight(this.props.date, this.props.sunrise, this.props.sunset)}/>
            </Wrapper> )
    }
}

export class SunReflection extends React.Component<{
    temp: number,
    date: Date,
    sunrise: number,
    sunset: number
},{
    height: number,
    color: string
}> {
    render() {
        return (
            <ReflectionWrapper>
                <SunReflectionCircle y={getMoonYPos(this.props.date, this.props.sunrise, this.props.sunset)}
                    opacity={getCycleOpacity(this.props.date, this.props.sunrise, this.props.sunset, false)}>
                        <Waves/>
                </SunReflectionCircle>
            </ReflectionWrapper> )
    }
}

export class Moon extends React.Component<{
    temp: number,
    date: Date,
    sunrise: number,
    sunset: number
},{
    height: number,
    color: string
}> {
    render() {
        return (
            <Wrapper>
                <MoonCircle y={getMoonYPos(this.props.date, this.props.sunrise, this.props.sunset)}
                    active={!isDaylight(this.props.date, this.props.sunrise, this.props.sunset)}/>
            </Wrapper>
        )
    }
}

export class MoonReflection extends React.Component<{
    temp: number,
    date: Date,
    sunrise: number,
    sunset: number
},{
    height: number,
    color: string
}> {
    render() {
        return (
            <ReflectionWrapper>
                <MoonReflectionCircle y={getSunYPos(this.props.date, this.props.sunrise, this.props.sunset)}
                    opacity={getCycleOpacity(this.props.date, this.props.sunrise, this.props.sunset, true)}>
                        <Waves/>
                </MoonReflectionCircle>
            </ReflectionWrapper>
        )
    }
}

const Wrapper = styled.div`
    position: relative;
    left: 0px;
    top: 0px;
    z-index: 50;
`
const ReflectionWrapper = styled.div`
    position: relative;
    left: 0px;
    top: 0px;
    z-index: 50;
    mix-blend-mode: screen;
`
const Planet = styled.div<{y: string; active: boolean}>`
    width: 10vh;
    height: 10vh;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, ${props => props.y});
    display: ${props => props.active ? "block" : "none"};
    border-radius: 100%;
`

const SunCircle = styled(Planet)`
    background-color: #fca400;
    box-shadow: 0px 0px 5px 5px ${SUN_YELLOW};
`;

const MoonCircle = styled(Planet)`
    background-color: ${MOON_WHITE};
    box-shadow: 0px 0px 5px 5px ${MOON_WHITE};
`;

const ReflectionCircle = styled.div<{y: string; opacity: number}>`
    width: 15vh;
    height: 7vh;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, ${props => props.y}) translateY(-100%);
    border-radius: 100%;
    opacity: ${props => props.opacity};
`;

const SunReflectionCircle = styled(ReflectionCircle)`
    background-color: #fca400;
    box-shadow: 0px 0px 5px 5px #fca400;
`;

const MoonReflectionCircle = styled(ReflectionCircle)`
    background-color: ${MOON_WHITE};
    box-shadow: 0px 0px 10px 20px ${MOON_WHITE};
`;


const WavesAnimation = keyframes`
  0%{background-position:0% 0%}
  100%{background-position:0% 100%}
`;

const Waves = styled.div`
  background: linear-gradient(180deg, #000000ee, #00000066, #000000ee, #00000066, #000000ee, #00000066, #000000);
  background-size: 100% 40%;

  width: 200%;
  height: 250%;
  position: relative;
  left: -50%;
  top: -50%;
  z-index: -1;

  opacity: 1;

  border-radius: 100%;

  animation-name: ${WavesAnimation};
  animation-duration: 15s;
  animation-direction: normal;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`