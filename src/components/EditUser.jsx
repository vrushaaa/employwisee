import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ first_name: '', last_name: '', email: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        setUser(response.data.data);
      } catch (err) {
        setError('Failed to fetch user data.');
      }
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Custom validation
    if (user.first_name.length < 2) {
      setError('First name must be at least 2 characters long');
      return;
    }
    if (user.last_name.length < 2) {
      setError('Last name must be at least 2 characters long');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(user.email)) {
      setError('Please enter a valid email address (e.g., user@domain.com)');
      return;
    }
    try {
      await axios.put(`https://reqres.in/api/users/${id}`, user);
      navigate('/users');
    } catch (err) {
      setError('Failed to update user.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4 text-center">Edit User</h2>
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
        <input
          type="text"
          value={user.first_name}
          onChange={(e) => setUser({ ...user, first_name: e.target.value })}
          placeholder="First Name"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="text"
          value={user.last_name}
          onChange={(e) => setUser({ ...user, last_name: e.target.value })}
          placeholder="Last Name"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Update
        </button>
        <button
          type="button"
          onClick={() => navigate('/users')}
          className="w-full mt-2 bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditUser;