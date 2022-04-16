import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
//import { updateState,updateName, updateDesignation, downgradeDesignation,downgradeState,downgradeName } from "../actions/auth";
  //const sucess = JSON.parse(localStorage.getItem("success"));
  const username = localStorage.getItem("username");
  const designation = localStorage.getItem("designation");
 // console.log(localStorage.getItem("username"))
  //console.log(user);
  ///const [user, setuser] = useState({});


const initialState = {
  isloggedIn: false,
  name : "",
  designation : ""
}

//let counterSlice = createSlice(initialState,{ updateState,updateName, updateDesignation, downgradeDesignation,downgradeState,downgradeName })

// let counterSlice = createSlice({
//   name: 'isValiduser', initialState : initialState, reducers :{
//     updateState(value): function (state,action ) {
//       //console.log(state.isloggedIn)
//       state.isloggedIn = true;
//       //console.log(state.isloggedIn)
//     },
//     updateName: function (state,action) {
//      // console.log(state.name)
//         state.name = username;
//        //console.log(state.name)
//     },
//     updateDesignation: function(state,action) { 
//         state.designation = designation;
//     },
//     downgradeState: function(state,action) { 
//         state.designation = false;
//     },
//     downgradeName: function(state,action) { 
//         state.designation = ""
//     },
//     downgradeDesignation: function(state,action) { 
//         state.designation = ""
//     }


//   }
// })


// export  const {updateState,updateName,updateDesignation, downgradeState, downgradeName, downgradeDesignation} = counterSlice.actions;
// export default counterSlice.reducer