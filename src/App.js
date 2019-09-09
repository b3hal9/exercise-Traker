import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercise-list.component"
import EditExercises from "./components/edit-exercises.component"
import CreateExercises from "./components/create-exercise.component"
import CreateUsers from "./components/create-user.component"





function App() {
  return (
    <Router>
    <div className="container">
      <Navbar />
      <br/>
      <Route path ="/" exact component={ExercisesList} />
      <Route path ="/edit/:id" component={EditExercises} />
      <Route path ="/create" component={CreateExercises} />
      <Route path ="/user" component={CreateUsers} />
    </div>
    </Router>
  )
}

export default App;
