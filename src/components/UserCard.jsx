// src/components/UserCard.jsx
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserCard({ user, setUsers }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`https://reqres.in/api/users/${user.id}`);
      setUsers((prev) => prev.filter((u) => u.id !== user.id));
    } catch (err) {
      alert('Failed to delete user.');
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="w-24 h-24 rounded-full mx-auto" />
      <h3 className="text-xl text-center mt-2">{user.first_name} {user.last_name}</h3>
      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={() => navigate(`/edit/${user.id}`)}
          className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
        >
          Edit
        </button>
        <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserCard;