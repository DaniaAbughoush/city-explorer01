import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data:'',
      show:false,
      searchQuery:''

    };
  }


  getcity=async(event)=>{
    event.preventDefault();
    try{

      const url=`https://us1.locationiq.com/v1/search.php?key=pk.8202a69aece41c46ea236eb49f1ed96b&q=${this.state.searchQuery}&format=json`;
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
  }



  render(){
    return (
      <div>
        <Form onSubmit={this.getcity}>

          <input type='text' onChange={this.updateSearchQuery}/>
          <Button type='submit'>Explore!</Button>
        </Form>
        {this.state.error?<h1>{this.state.error}</h1>:''}
        {/* <img alt='nn' src={`https://maps.locationiq.com/v3/staticmap?key=pk.8202a69aece41c46ea236eb49f1ed96b&q&center=${this.state.data.lon},${this.state.data.lat}&zoom=7.5`}/> */}
        {this.state.data.lat!== undefined ?
          <>
            <p>{this.state.data.display_name}</p>
            <h5>{this.state.data.lon},{this.state.data.lat}</h5>
            <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.data.lat},${this.state.data.lon}&zoom=10&size=500x500`} alt='' /></>:''}
      </div>
    );
  }
}
export default App;
