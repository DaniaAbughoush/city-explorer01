import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
// import CardColumns from 'react-bootstrap/CardColumns';
import MovieDay from '../component/movieDay';

class Movie extends React.Component {
    render() {
        return (
            this.props.movieInfo.map((data, index) => {
                return (<div key={index}>
  <MovieDay title={data.title} poster={data.poster} overview={data.overview} vote_count={data.vote_count} release_date={data.release_date} />
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
