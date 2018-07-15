export const refreshUsers = (res) => {
    return{
      type: 'REFRESH-USERS',
      payload: res
    }
  }