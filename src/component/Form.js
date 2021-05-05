import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




export class Forms extends React.Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.getcity}>

          <input type='text' onChange={this.props.updateSearchQuery}/>
          <Button type='submit'>Explore!</Button>
        </Form>
      </div>
    );
  }
}

export default Forms;
