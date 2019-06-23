import React from "react";

const Card = ({ user }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${user.id}?set=set4`} alt="Officer" />
      <p>id:{user.id}</p>
      <h1>Name:{user.name}</h1>
      <h5>age:{user.age}</h5>
      <h5>Email:{user.email}</h5>
    </div>
  );
};
export default Card;
