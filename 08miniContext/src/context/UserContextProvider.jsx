import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {

  const [user, setUser] = React.useState(null)

  return (
    <>
      {/*Children have the access to value */}
      <UserContext.Provider value={{user, setUser}}>
        {children}
      </UserContext.Provider>
    </>
  )
}

export default UserContextProvider