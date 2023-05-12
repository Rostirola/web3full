import React from "react";
import { Stack } from "../Stack/Stack";

const CardPerson = ({cover, avatar, name, office, stacks}) => {
  return (
    <div className="card">
        <img src={cover}  alt="Cover"/>
        <img src={avatar} alt="Avatar" className="avatar" />
        <p className="p1">{name}</p>
        <p className="p2">{office}</p>
        <div className="stack">
          {stacks.map((stack) => {
            return <Stack key={stack} name={stack.Tec}/>;
          })}
        </div>
      </div>
    );
}

export default CardPerson;