import { createSlice } from "@reduxjs/toolkit";
//import isvalideReducers from "../features/createSliceFeatures"
import { useState } from "react";

const initialState = null;

const reducerState = (state = initialState, action) => {
  if (action.type === 'LOGINVALIDATION')
    return state = action.payload;
  else if (action.type === 'downgradeState')
    return state = action.payload;
  else
    return state;
}

const reducerName = (state = initialState, action) => {
  if (action.type === 'name')
    return state = action.payload;
  else if (action.type === 'downgradeName')
    return state = action.payload;
  else
    return state;;
}

const reducerDesignation = (state = initialState, action) => {
  if (action.type === 'designation')
    return state = action.payload;
  else if (action.type === 'downgradeDesignation')
    return state = action.payload;
  else
    return state;;
}

const reducergetEmpID = (state = 0, action) => {
  if (action.type === 'getEmpId')
    return state = action.payload;
  else
    return state;
}

const reducergetInvoiceId = (state = 0, action) => {
  if (action.type === 'getInvoiceId')
    return state = action.payload;
  else
    return state;
}


export { reducerState, reducerName, reducerDesignation, reducergetEmpID, reducergetInvoiceId };