import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setTimezone } from '../state/time';
import { RootState } from '../store';

interface Timezone {
    title: string,
    id: string
}

const timezoneList = [
    {
        title: "New York",
        id: "America/New_York"
    },
    {
        title: "Los Angeles",
        id: "America/Los_Angeles"
    },
    {
        title: "China",
        id: "Asia/Shanghai"
    }
] as Timezone[]

export function TimezoneSelector() {
    const currentTimezone = useSelector((state: RootState) => state.time.timezone)
    const dispatch = useDispatch()

    const handleClick = (tz: string) => {
        return () => {dispatch(setTimezone(tz))}
    }
    return (
    <Timezones>
        {
            timezoneList.map((tz) => {
                return <TimezoneOption selected={currentTimezone === tz.id}
                            onClick={handleClick(tz.id)}
                        > {tz.title} </TimezoneOption>
            })
        }
    </Timezones>
    )
}


const Timezones = styled.div`

`
const TimezoneOption = styled.div<{selected: boolean}>`
    color: white;
    cursor: pointer;
    padding: .25rem .5rem;
    margin: .25rem .5rem;
    ${props => {
        if (props.selected) {
            return`
                color: black;
                background-color: white;
            `
        }
    }}
`