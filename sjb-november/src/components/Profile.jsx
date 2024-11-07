import React from 'react'

function Profile(props) {
    const {name, hobby} = props.profile
  return (
    <div>
        <h3>My name is {name}</h3>
        <p>My Hobby is {hobby}</p>
    </div>
  )
}

export default Profile