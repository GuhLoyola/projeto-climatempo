import './styles/App.css';
import SearchForm from './components/search-form/SearchForm';
import MainInfo from './components/main-info/MainInfo';
import { SecundaryInfo } from './components/secundary-info/SecundaryInfo';
import { WeatherProvider } from './contexts/WeatherContext';

function App() {

  return (
    <main className='container'>
      <WeatherProvider>
        <SearchForm />
        <MainInfo />
        <SecundaryInfo />
      </WeatherProvider>
    </main>
  );
}

export default App;
