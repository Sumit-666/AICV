import React from 'react';

function Profile() {
  const h1Style = {
    position: 'relative',
    top: '40px',
    left: '70px',
    width: '262px',
    height: '47px',
    textAlign: 'left',
    font: 'normal normal 600 33px/32px Poppins',
    letterSpacing: '0px',
    color: '#151515',
    opacity: '1'
  };
  return (
    <div>
      <h1 style={h1Style}>Profile</h1>
    </div>
  );
}

export default Profile;
