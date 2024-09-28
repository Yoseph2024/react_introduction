import React from 'react';
import Child from './Child';

class Parent extends React.Component {
  // Mounting Phase or First React Phase
  constructor() {
    super();
    this.state = {
      name: 'Joe',
      address: "Bangalore, Karnataka",
      course: "React",
      age: 30
    };
  }

  // Updating Phase or Second Phase of React ------- render
  render() {
    const { name, course, age, address } = this.state;

    return (
      <>
        <Child course={course} />
        <h3>Name: {name}</h3>
        <h3>Course: {course}</h3>
        <h3>Appge: {age}</h3>
        <h3>Address: {address}</h3>       
       
      </>
    );
  }
}

// Unmounting Phase -- third phase 
export default Parent;
