import React from 'react';
import axios from 'axios';
import Forms from './component/Form';
import Map from './component/Map';
import Weather from './component/Weather';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data:'',
      show:false,
      searchQuery:'',
      weatherData:'',

    };
  }


  getcity=async(event)=>{
    event.preventDefault();
    try{

      const url=`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_MAP_KEY}&q=${this.state.searchQuery}&format=json`;
      const req=await axios.get(url);
      this.setState({
        data:req.data[0],
        show:true

      });
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
    this.getWeather();
  }

  getWeather=async()=>{

    const epressWeatherUrl=`http://localhost:3030/weather`;
    const reqExpress=await axios.get(epressWeatherUrl);
    console.log(reqExpress.data);
    this.setState({
      weatherData:reqExpress.data,
      // show:true,
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
          <Weather weatherInfo={this.state.weatherData}/>

        </>
        }
        {/* :''} */}
      </div>
    );
  }
}
export default App;
