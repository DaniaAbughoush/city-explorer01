import React from 'react';
// import Table from 'react-bootstrap/Table';


class WeatherDay extends React.Component {
    render() {
        return (

            <tbody>
                <tr>
                    <td style={{ color: 'blue', border: 'solid,black,.5rem' }}>

                        {this.props.date}

                    </td>
                    <td>


                        {this.props.description}

                    </td>
                </tr>
            </tbody>
            
        )
    }
}

export default WeatherDay

