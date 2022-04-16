
const updateState = (userLoginValidation) => {
  return (dispatch) => {
    dispatch({
      type: "LOGINVALIDATION",
      payload: userLoginValidation
    })
  }
}
const updateName = (name) => {
  return (dispatch) => {
    dispatch({
      type: "name",
      payload: name
    })
  }
}

const updateDesignation = (designation) => {
  return (dispatch) => {
    dispatch({
      type: "designation",
      payload: designation
    })
  }
}

const downgradeState = (value) => {
  return (dispatch) => {
    dispatch({
      type: "downgradeState",
      payload: value
    })
  }
}

const downgradeName = (value) => {
  return (dispatch) => {
    dispatch({
      type: "downgradeName",
      payload: value
    })
  }
}

const downgradeDesignation = (value) => {
  return (dispatch) => {
    dispatch({
      type: "downgradeDesignation",
      payload: value
    })
  }
}

const getEmpId = (value) => {
  return (dispatch) => {
    dispatch({
      type: "getEmpId",
      payload: value
    })
  }
}

const getInvoiceId = (value) => {
  return (dispatch) => {
    dispatch({
      type: "getInvoiceId",
      payload: value
    })
  }
}



export {updateState,updateName, updateDesignation, downgradeDesignation,downgradeState,downgradeName,getEmpId, getInvoiceId} 