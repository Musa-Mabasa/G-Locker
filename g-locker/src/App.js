import { SkeletonTheme } from 'react-loading-skeleton';
import './App.css';
import Main from './components/Main';
import SideBar from './components/SideBar'

function App() {
  return (
    <div className='App'>
      <SkeletonTheme baseColor="#0d171f" highlightColor="#555555">
        <SideBar/>
        <Main/>
     </SkeletonTheme>
    </div>
  );
}

export default App;
