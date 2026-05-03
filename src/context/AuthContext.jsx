import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../services/firebaseAuth';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName,
          email: currentUser.email,
          picture: currentUser.photoURL
        });
      } else {
        setUser(null);
        setAccessToken(null); // Clear token on logout
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
