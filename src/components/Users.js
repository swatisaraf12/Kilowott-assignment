import classes from "./Users.module.css";

const Users = (props) => {
  return (
    <li className={classes.user}>
      <div>
        <h3>{props.id}</h3>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.username}>{props.username}</div>
      </div>
    </li>
  );
};

export default Users;
