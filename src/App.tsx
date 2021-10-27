import axios from 'axios';
import { useEffect } from 'react';
import { updateWeather, WeatherData } from './state/weather';
import { Sky } from './components/Sky';
import { useDispatch } from 'react-redux';
import { Water } from './components/Water';
import styled from 'styled-components';
import { TimezoneSelector } from './components/TimeSelector';

function App () {

  const dispatch = useDispatch()

  useEffect(() => {
    async function getWeather() {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Alpharetta&appid=be2c8b47db11b9e2a67c020b9065d4eb&units=imperial`)

      const data = response.data as WeatherData
      dispatch(updateWeather(data))
    }

    getWeather()
  });

  return (
    <div className="App">
      <Water/>
      <Sky/>
      <TimezoneWrapper>
        <TimezoneSelector></TimezoneSelector>
      </TimezoneWrapper>
    </div>
  )
}

export default App;

const TimezoneWrapper = styled.div`
  position: fixed;
  bottom: 0px;
`