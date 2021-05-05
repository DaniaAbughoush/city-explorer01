import React from 'react';

class Map extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.display_name}</p>
        <h5>{this.props.lon},{this.props.lat}</h5>
        <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.props.lat},${this.props.lon}&zoom=10&size=500x500`} alt='' />
        {/* <img alt='nn' src={`https://maps.locationiq.com/v3/staticmap?key=pk.8202a69aece41c46ea236eb49f1ed96b&q&center=${this.state.data.lon},${this.state.data.lat}&zoom=7.5`}/> */}
      </div>
    );
  }
}
export default Map;
