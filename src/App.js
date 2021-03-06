// import third party library
import React, { useState } from 'react';
import {Redirect, Route} from 'react-router-dom';

// import Chip from '@material-ui/core/Chip';
import Chip from '@material-ui/core/Chip';

// import user defined js file
import './App.css';
//import Home from './Home';
import Add from './Add';
import TestUserData from './dataset/TestUserData';
import getStartDate from './CoreAlgorithm';
import Login from './components/Login';
import Home from './Home';



// function App() {
//   const [currentUser, setCurrentUser] = useState(false);

//   return(
//     <>
//       <Route path={"/"}>
//         <Nav />
//       </Route>

//       <Route exact path={"/"}
//        render={(props) => 
//          currentUser ? 
//          <MyHome currentUser={currentUser} />
//          :
//          <Login setCurrentUser={setCurrentUser} {...props} />
//         }
//        />
//     </>
   
//   )
// }




 class App extends React.Component{
   constructor(props) {
     super(props);
     this.handleChangeState = this.handleChangeState.bind(this);
    
//     // // currentPage: Home, Add,
//     // currentDate: new Date()
//     // userData: {
//     //   "Date()":{
//     //     "Blood": 0,
//     //     "Pain": 0,
//     //     ...
//     //   }
//     //   menstrualDuration: 30,
//     //   periodDuration: 5,
//     //   prediction: {
//     //     "Date()": 0, 1
//     //   }
//     // }
    
    this.state = {"currentPage": "Home",
                  "currentDate": new Date(),
                  "userData": JSON.parse(JSON.stringify(TestUserData)),
                  "totalDuration": 30,
                  "periodDuration": 5,
                  "startDate": null
                 };
    const startDate = getStartDate(this.state);
    this.state["startDate"] = startDate;

  
  }



  
   handleChangeState(state) {
     state["startDate"] = getStartDate(state);
     this.setState(state);
   }
 
 

  render() {
    let state = this.state;
    if (state["currentPage"] === "Home") {
      return (
        <Home handleChangeState={this.handleChangeState} state={state}/>
      )
    } else if (state["currentPage"] === "Add") {
      return (
        <Add handleChangeState={this.handleChangeState}  state={state}/>
      )
    } else if (state['currentPage'] === "Login") {
      return (
        <Login handleChangeState={this.handleChangeState}  state={state}/>
      )
    }
    else {
      console.log(state);
      return (
        <Chip
          label="Error! See console for detail"
          color="secondary"
        />
      )
    }
  }
}

export default App;
