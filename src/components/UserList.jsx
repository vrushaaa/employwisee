import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserCard from './UserCard';

function UserList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, [page]);

  // Fetch users from Reqres API
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch (err) {
      setError('Failed to fetch users.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  // Filter users based on search input
  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl">Users</h2>
        <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
          Logout
        </button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search users by name..."
          className="w-full p-2 border rounded"
        />
      </div>
      {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
      {filteredUsers.length === 0 && !error && (
        <p className="text-gray-500 mb-4">No users found.</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} setUsers={setUsers} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 rounded mr-2 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-300 rounded ml-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default UserList;