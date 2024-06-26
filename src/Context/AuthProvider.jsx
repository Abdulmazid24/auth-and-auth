import { createContext } from 'react';
import PropTypes from 'prop-types';

export const AuthConstext = createContext(null);

const AuthProvider = ({ children }) => {
  const authInfo = { name: 'react.dev-Hooks-use-useContex' };
  return (
    <AuthConstext.Provider value={authInfo}>{children}</AuthConstext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
