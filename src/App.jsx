// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Login from './components/Login';
import UserList from './components/UserList';
import EditUser from './components/EditUser';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/" />;
};

// Component to handle redirects from 404
const RedirectHandler = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath && redirectPath !== location.pathname) {
      sessionStorage.removeItem('redirectPath');
      window.history.replaceState(null, '', redirectPath);
    }
  }, [location]);
  return children;
};

function App() {
  return (
    <Router basename="/employwisee"> {/* Match your base path */}
      <RedirectHandler>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/users"
              element={
                <ProtectedRoute>
                  <UserList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit/:id"
              element={
                <ProtectedRoute>
                  <EditUser />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </RedirectHandler>
    </Router>
  );
}

export default App;