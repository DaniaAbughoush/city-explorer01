import React, { Component } from 'react';
import WeatherDay from '../component/WeatherDay'
import Table from 'react-bootstrap/Table';

export class WeatherData extends Component {
    render() {
        return (
            <>
            <Table style={{borderColor:'blueviolet',borderBlockStyle:'solid'}}>
            <thead>       
    <tr>
        <th>Day</th>
        <th>descreption</th>
    </tr>
    </thead>          
    {this.props.weatherInfo.map((data, index) => {
        
        return (
            
            <WeatherDay date={data.date} description={data.description}/> 
            
            
            )
            
        })}
       </Table>
       </>
        )
    }
}

export default WeatherData
