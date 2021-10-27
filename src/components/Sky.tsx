import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store";
import { isDaylight } from "../utils";
import { Moon, Sun } from "./Planets";

export function Sky () {
    const weather = useSelector((state: RootState) => state.weather)
    const timestate = useSelector((state: RootState) => state.time)
    return (
        <div>
            <TheSky>
                <Sun temp={weather.main.temp} date={timestate.time}
                    sunrise={weather.sys.sunrise} sunset={weather.sys.sunset}/>
                <Moon temp={weather.main.temp} date={timestate.time}
                    sunrise={weather.sys.sunrise} sunset={weather.sys.sunset}/>
                <NightSky active={!isDaylight(timestate.time, weather.sys.sunrise, weather.sys.sunset)}
                />
            </TheSky>
        </div>
    )
}


const TheSky = styled.div`
    width: 100vw;
    height: 50vh;
    position: relative;
    overflow: hidden;
`;

const NightSky = styled(TheSky)<{active: boolean}>`
    background-color: #020608;
    z-index: -2;
    display: ${props => props.active ? "block" : "none"};
`;