import { useMemo } from 'react';

function UsersList({ users, startingLetter }) {
  console.log(startingLetter);
  console.log('component rerenders')

  const filteredUsers = useMemo(()=>{
    // console.log('recompute')
    if(!startingLetter) return users
    return users.filter(({name})=> {return name[0]=== startingLetter})
  },[startingLetter])

  return (
    <ul>
      {filteredUsers.map((user)=>{
        return (
          <li key={user.id}>{user.name}</li>
        )
      })}
    </ul>
  );
}

export default UsersList;