export const refreshUsers = (res) => {
    return{
      type: 'REFRESH-USERS',
      payload: res
    }
  }

  export const userDetails = (response) => {
      return{
        type: 'USER-DETAILS',
        payload: response
      }
    }
