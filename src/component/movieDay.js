import React from 'react';
import Card from 'react-bootstrap/Card';
class MovieDay extends React.Component {
    render() {
        return (
            <div>
                  <Card style={{ width: '18rem' }}>
  <Card.Img style={{ width: '10rem' }} variant="top" src={`https://image.tmdb.org/t/p/original/${this.props.poster}`} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    <p>{this.props.overview} <br/>{this.props.vote_count}<br></br>{this.props.release_date}</p>
    </Card.Text>   
  </Card.Body>
</Card>
     
            </div>
                
                
            
        )
        }
    }

    export default MovieDay
