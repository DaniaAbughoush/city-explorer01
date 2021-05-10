import React from 'react';
import axios from 'axios';
import Forms from './component/Form';
import Map from './component/Map';
import WeatherData from './component/Weather';
import Movie from './component/Movie';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns'

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data:'',
      show:false,
      searchQuery:'',
      weatherData:[],
      movieData:[],

    };
  }


  getcity=async(event)=>{
    event.preventDefault();
    try{
    const url=`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_MAP_KEY}&q=${this.state.searchQuery}&format=json`;
    const req=await axios.get(url);
    // console.log(url);
    this.setState({
      data:req.data[0],
      show:true

    });
    this.getWeather();
    console.log(this.getWeather())
    }
    catch(err){
      this.setState({error: `${err.message}: ${err.response.data.error}`});
    }
 
  }
  updateSearchQuery=(event)=>{
    event.preventDefault();
    this.setState({
      searchQuery:event.target.value
    });
    // this.getWeather();
    this.getMovie()
    console.log(this.getMovie())
  }

  getWeather=async()=>{
    
    const expressWeatherUrl=`${process.env.REACT_APP_CLIENT_SERVER}/weather?lat=${this.state.data.lat}&lon=${this.state.data.lon}`;
    //   console.log(this.state.data);
    const reqExpress=await axios.get(expressWeatherUrl);
    console.log(expressWeatherUrl);
    this.setState({
      weatherData:reqExpress.data
      // show:true,
    });
    console.log(this.state.weatherData);
    //   console.log(this.state.weatherData);

  };

  getMovie=async()=>{
    const expressMovieURL=`${process.env.REACT_APP_CLIENT_SERVER}/movie?query=${this.state.searchQuery}&limit=8`
    console.log(expressMovieURL);
    const reqMovie=await axios.get(expressMovieURL);
    this.setState({
      movieData:reqMovie.data
    });
    
  }
  
  render(){
    return (
      <div>
        <Forms getcity={this.getcity} updateSearchQuery={this.updateSearchQuery}
        />


        {this.state.error?<h1>{this.state.error}</h1>:''}
        {/* {this.state.data.lat!== undefined ? */}
        {this.state.show &&
        <>
          <Map display_name={this.state.data.display_name}
            lon={this.state.data.lon} lat={this.state.data.lat}
          />
          <WeatherData weatherInfo={this.state.weatherData}/>
          <CardColumns>
          <Movie movieInfo={this.state.movieData}/>

          </CardColumns>

        </>
        }
        {/* :''} */}
      </div>
    );
  }
}
export default App;
