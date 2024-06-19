import { useEffect, useState } from "react"

const User = () => {
  const [users, setUsers] = useState({});
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/`, {method: "get"})
    .then(response => response.json())
    .then(res => setUsers(res))
    .catch(err => console.log(err))

  }, [])

  return (
    <div>
      {
        !users.length && <p>Loading...</p>
      }
      {users.length && 
        <ul>
          {
            users.map((user, index) => {
              return (<li key={index}>{user?.name}</li>);
            })
          }
        </ul>
      }
    </div>
  )
}

export default User
