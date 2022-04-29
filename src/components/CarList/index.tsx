import React from 'react';

interface ICar {
  id: number;
  model: string;
}

interface ICarList {
  cars: ICar[];
}

export const CarList = ({ cars }: ICarList) => {
  return (
    <div>
      {cars.map((car) => (
        <div key={car.id}>{car.model}</div>
      ))}
    </div>
  );
};
