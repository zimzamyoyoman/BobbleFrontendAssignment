import React from 'react';
import SignupForm from './SignupForm';
import Header from './Header';

function App() {
  return (
    <div>
      {/* Header: Component contains brand logo */}
      <Header /> 
      {/* SignUpForm: Component for sign up form */}
      <SignupForm />
    </div>
  );
}

export default App;
