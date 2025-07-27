import React from 'react';

// Import all components
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      {/* Task 1: Welcome Message */}
      <WelcomeMessage />

      {/* Task 2: Header, Main Content, Footer */}
      <Header />
      <MainContent />
      <Footer />

      {/* Task 3: User Profile using props */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
    </div>
  );
}

export default App;