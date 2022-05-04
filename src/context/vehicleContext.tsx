import { createContext, useContext, useState } from 'react';
import React from 'react';
import { TypesVehicle } from 'services/api.types';

interface IVehicleContextProps {
  currentVehicleType: TypesVehicle;
  setCurrentVehicleType: (value: TypesVehicle) => void;
  teste: string;
  setTeste: (value: string) => void;
}

export const VehicleContext = createContext<IVehicleContextProps>(
  {} as IVehicleContextProps,
);

interface IProviderProps {
  children: React.ReactNode;
}

export const VehicleContextPrivider: React.FC<IProviderProps> = ({
  children,
}: IProviderProps) => {
  const [currentVehicleType, setCurrentVehicleType] = useState<TypesVehicle>(
    TypesVehicle.cars,
  );
  const [teste, setTeste] = useState('');
  return (
    <VehicleContext.Provider
      value={{ currentVehicleType, setCurrentVehicleType, teste, setTeste }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

export const useVehicle = (): IVehicleContextProps => {
  const context = useContext(VehicleContext);

  if (!context) {
    throw new Error('useFiles must be used within FileProvider');
  }

  return context;
};
