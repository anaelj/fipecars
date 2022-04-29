import React from 'react';

interface IProps {
  id: number;
  model: string;
}

export const Car = ({ id, model }: IProps) => {
  return <div>Car {model} </div>;
};
