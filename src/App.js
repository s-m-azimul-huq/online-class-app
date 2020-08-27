import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import fakeData from './fakeData/fakeData';
import Course from './Components/Course/Course';
import { useState } from 'react';
import Cart from './Components/Cart/Cart';

function App() {
  const totalFakeData = fakeData;
  const [courses, setCourse] = useState(totalFakeData);
  const [cart,setCart] = useState([]);

  const handleAddCourse = (course) =>{
    const newCart =[...cart, course];
    setCart(newCart);
   }

  return (
    <div className="App">
      <header>
      <Header></Header>
      </header>
      <div className="row">
      <div className="col-md-9 bg-light">
          {
            courses.map(course => <Course course={course} key={course.code}  handleAddCourse={handleAddCourse}></Course>
            )
          }
        </div>
        <div className="col-md-3 border-left">    
          <Cart cart={cart} ></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
