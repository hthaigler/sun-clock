import { useSelector } from "react-redux";
import styled from "styled-components";
import { SKY_BLUE } from "../consts/colors";
import { RootState } from "../store";
import { getCycleOpacity, isDaylight } from "../utils";
import { Moon, Sun } from "./Planets";

export function Sky () {
    const weather = useSelector((state: RootState) => state.weather)
    const timezone = useSelector((state: RootState) => state.timezone)
    return (
        <div>
            <TheSky>
                <Sun temp={weather.main.temp} date={new Date(new Date().toLocaleString('en-US', { timeZone: timezone }))}
                    sunrise={weather.sys.sunrise} sunset={weather.sys.sunset}/>
                <Moon temp={weather.main.temp} date={new Date(new Date().toLocaleString('en-US', { timeZone: timezone }))}
                    sunrise={weather.sys.sunrise} sunset={weather.sys.sunset}/>
                <NightSky opacity={1 - getCycleOpacity(new Date(new Date().toLocaleString('en-US', { timeZone: timezone })), weather.sys.sunrise, weather.sys.sunset, true)}
                    active={!isDaylight(new Date(new Date().toLocaleString('en-US', { timeZone: timezone })), weather.sys.sunrise, weather.sys.sunset)}
                />
            </TheSky>
        </div>
    )
}


const TheSky = styled.div`
    background-color: ${SKY_BLUE};
    width: 100vw;
    height: 50vh;
    position: fixed;
    left: 0%;
    top: 0%;
    z-index: -3;
`;

const NightSky = styled(TheSky)<{opacity: number; active: boolean}>`
    background-color: #020608;
    z-index: 0;
    opacity: ${props => props.opacity};
    display: ${props => props.active ? "block" : "none"};
`;