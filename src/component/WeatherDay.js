import React from 'react';
import Table from'react-bootstrap/Table';


 class WeatherDay extends React.Component {
    render() {
        return (
            <Table>
            <tbody>
               <tr>
                   <td style={{color:'blue',border:'solid,black,.5rem'}}>
                       <p>
                           {this.props.date}
                           </p>
                   </td>
                   <td>
                       <p>

                       {this.props.description}
                       </p>
                   </td>
               </tr>
               </tbody>
               </Table>
        )
    }
}

export default WeatherDay

