const UserCard = ({ user }) => {
    return (
      <div className="card">
        <h3>{user.name}</h3>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Profession:</strong> {user.profession}</p>
      </div>
    );
  };
  
  export default UserCard;