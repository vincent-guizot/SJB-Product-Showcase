import React from "react";

const Profile = (props) => {
  const { profile } = props;
  return (
    <>
      <h3>My name is {profile.name}</h3>
      <p>My hobby is {profile.hobby}</p>
    </>
  );
};

export default Profile;
