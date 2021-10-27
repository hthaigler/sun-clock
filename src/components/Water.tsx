import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store";
import { getCycleOpacity, isDaylight } from "../utils";
import { MoonReflection, SunReflection } from "./Planets";

export function Water () {
    const weather = useSelector((state: RootState) => state.weather)
    const timestate = useSelector((state: RootState) => state.time)
    return (
        <div>
            <TheWater>
                <SunReflection temp={weather.main.temp} date={timestate.time}
                    sunrise={weather.sys.sunrise} sunset={weather.sys.sunset}/>
                <MoonReflection temp={weather.main.temp} date={timestate.time}
                    sunrise={weather.sys.sunrise} sunset={weather.sys.sunset}/>
                <NightWater opacity={1 - getCycleOpacity(timestate.time, weather.sys.sunrise, weather.sys.sunset, true)}
                    active={!isDaylight(timestate.time, weather.sys.sunrise, weather.sys.sunset)}
                />
            </TheWater>
        </div>
    )
}


const TheWater = styled.div`
    background-color: black;
    border-top: .5px solid white;
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