import React from "react";
import Loader from "./Loader";
import "../styles/users.css";

const Users = ({ users }) => {
  return (
    <ul className="Users">
      {users &&
        users.map((user) => (
          <a
            key={user.id}
            rel="noreferrer"
            target="_blank"
            href={`https://github.com/${user.login}`}
          >
            <li className="User" key={user.id}>
              <img alt={`${user.login}'s avatar`} src={user.avatar_url} />
              <p className="Username">
                <span className="asperand">@</span>
                {user.login}
              </p>
            </li>
          </a>
        ))}

      {!users && (
        <li className="Empty-message">
          <Loader />
        </li>
      )}

      {users && users.length === 0 && (
        <li className="Empty-message">Oops.. user not found</li>
      )}
    </ul>
  );
};

export default Users;
