import Weather from './weather';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App bg-gradient-to-r from-indigo-600 via-slate-900 to-emerald-600 h-screen ">
      <Header/>
      <p className='text-slate-100 font-light  p-1'>Current Weather and forecasts </p>
      <Weather/>
    </div>
  );
}

export default App;
