import React from 'react';

class Weather extends React.Component {
  render() {
    return (
      this.props.weatherInfo.map(value => {
        return(

          <div>

            <p>{value.date}</p>
            <p>{value.description}</p>
          </div>
        );
      }
      )
    );
  }
}

export default Weather;
