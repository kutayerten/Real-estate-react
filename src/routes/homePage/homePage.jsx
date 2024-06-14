import SearchBar from '../../components/searchBar/searchBar';
import './homePage.scss';

export default function HomePage() {
  return (
    <div className='homePage'>
        <div className="textContainer">
            <div className="wrapper">
                <h1 className="title">Find Your Dream Home</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem facere cupiditate saepe voluptate, accusantium perspiciatis quae debitis eos deserunt! Debitis laborum doloribus architecto consectetur delectus cum error adipisci est!</p>
                <SearchBar />
                <div className="boxes">
                    <div className="box">
                        <h1>25+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className="box">
                        <h1>300</h1>
                        <h2>Award Gained</h2>
                    </div>
                    <div className="box">
                        <h1>2000+</h1>
                        <h2>Property Ready</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}
