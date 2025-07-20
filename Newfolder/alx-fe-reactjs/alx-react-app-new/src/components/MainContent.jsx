import React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#e6f2ff' }}>
      <UserProfile name="Jane Doe" age={28} bio="Loves traveling and photography." />
      <UserProfile name="John Smith" age={34} bio="Enjoys hiking and coding." />
    </main>
  );
}

export default MainContent;