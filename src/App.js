import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {ORIGINALS_URL, ACTION_URL, TOP_RATED_URL, COMEDY_URL, ANIMATION_URL} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost  title='Netflix Originals' url = {ORIGINALS_URL} slidesPerView='5'/>
      <RowPost  title='Top Rated' isSmall url={TOP_RATED_URL} slidesPerView='7'/>
      <RowPost  title='Action' isSmall url={ACTION_URL} slidesPerView='7'/>
      <RowPost  title='Comedy' isSmall url={COMEDY_URL} slidesPerView='7'/>
      <RowPost  title='Animation' isSmall url={ANIMATION_URL} slidesPerView='7'/>
    </div>
  );
}

export default App;
