import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns';

class Movie extends React.Component {
    render() {
        return (
            this.props.movieInfo.map((data, index) => {
                return (<div key={index}>
                    <Card style={{ width: '18rem' }}>
  <Card.Img style={{ width: '10rem' }} variant="top" src={`https://image.tmdb.org/t/p/original/${data.poster}`} />
  <Card.Body>
    <Card.Title>{data.title}</Card.Title>
    <Card.Text>
    <p>{data.overview} <br/>{data.vote_count}<br></br>{data.release_date}</p>
    </Card.Text>   
  </Card.Body>
</Card>
                  {/* <p>{data.title}</p> */}
                  {/* <p>{data.poster}</p> */}
                  {/* <p>{data.overview}</p> */}
                  {/* <p>{data.vote_count}</p> */}
                  {/* <p>{data.release_date}</p>                */}
                </div>)
            })
                    
        )
    }
}

export default Movie