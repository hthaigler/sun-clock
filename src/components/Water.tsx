import { useSelector } from "react-redux";
import styled from "styled-components";
import { WATER_BLUE } from "../consts/colors";
import { RootState } from "../store";
import { getCycleOpacity, isDaylight } from "../utils";
import { MoonReflection, SunReflection } from "./Planets";

export function Water () {
    const weather = useSelector((state: RootState) => state.weather)
    const timezone = useSelector((state: RootState) => state.timezone)
    return (
        <div>
            <TheWater>
                <SunReflection temp={weather.main.temp} date={new Date(new Date().toLocaleString('en-US', { timeZone: timezone }))}
                    sunrise={weather.sys.sunrise} sunset={weather.sys.sunset}/>
                <MoonReflection temp={weather.main.temp} date={new Date(new Date().toLocaleString('en-US', { timeZone: timezone }))}
                    sunrise={weather.sys.sunrise} sunset={weather.sys.sunset}/>
                <NightWater opacity={1 - getCycleOpacity(new Date(new Date().toLocaleString('en-US', { timeZone: timezone })), weather.sys.sunrise, weather.sys.sunset, true)}
                    active={!isDaylight(new Date(new Date().toLocaleString('en-US', { timeZone: timezone })), weather.sys.sunrise, weather.sys.sunset)}
                />
            </TheWater>
        </div>
    )
}


const TheWater = styled.div`
    background-color: ${WATER_BLUE};
    width: 100vw;
    height: 50vh;
    position: fixed;
    left: 0%;
    top: 50%;
    overflow: hidden;
`;

const NightWater = styled(TheWater)<{opacity: number; active: boolean}>`
    background-color: #020608;
    opacity: ${props => props.opacity};
    display: ${props => props.active ? "block" : "none"};
`;