import rd from 'react-dom';
import Main from './Main';
import CityWeatherReporter from './CityWeatherReporter';
import Spriter from './Spriter';
import {Provider} from 'react-redux';
import gr from './redux.store';


import {BrowserRouter} from 'react-router-dom';
rd.render(<BrowserRouter><Main /></BrowserRouter>,document.getElementById("app"));
rd.render(<CityWeatherReporter />,document.getElementById("openWeather"));
rd.render(<Provider store={gr}><Spriter /></Provider>,document.getElementById('sprites'));