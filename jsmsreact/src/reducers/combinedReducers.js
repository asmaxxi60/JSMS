import { combineReducers } from "redux";
import {reducerState, reducerName, reducerDesignation, reducergetEmpID, reducergetInvoiceId} from "./auth";

const reducres = combineReducers({
    userAccess: reducerState,
    userName: reducerName,
    userDesignation: reducerDesignation,
    EmpID: reducergetEmpID,
    InvoiceId: reducergetInvoiceId
})

export default reducres