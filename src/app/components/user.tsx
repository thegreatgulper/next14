import React from 'react';
import { Users } from "../../types/types"

interface UserProps {
  users: Users[] | null;
}
// test this component

const User: React.FC<UserProps> = ({users}) => {

  return (
    <>
      {users && users.length > 0 && users.map((user: Users) => {
        return (
          <div data-testid="all-users" key={user.id} className="flex flex-col basis-1/3 m-0.5 items-left border border-black p-4 my-0.5">
            <h3>Name: {user.name}</h3>
            <p>username:{user.username}</p>
            <p>email: {user.email}</p>
            <div>
              <h3>Address</h3>
              <p>street:{user.address?.street}</p>
              <p>suite:{user.address?.suite}</p>
              <p>city: {user.address?.city}</p>
              <p>zipcode: {user.address?.zipcode}</p>
              <p>{user.address?.geo.lat}</p>
              <p>{user.address?.geo.lng}</p>
            </div>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <div>
              <h3>Company</h3>
              <p>company.name: {user.company?.name}</p>
            </div>
          </div>
        )
      })}
    </>
  );
};

export default User;