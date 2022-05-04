import axios from 'axios';

import { TypesVehicle } from './api.types';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL?.toString() || '',
});

export const getReferences = async () => {
  return await api.get('references').then((res) => res.data);
};

export const getBrands = async (vehicleType: TypesVehicle) => {
  return await api.get(`${vehicleType}/brands`).then((res) => res.data);
};

interface IModelProps {
  vehicleType: TypesVehicle;
  codeBrand: number;
}

export const getModels = async ({ vehicleType, codeBrand }: IModelProps) => {
  return await api
    .get(`${vehicleType}/brands/${codeBrand}/models`)
    .then((res) => res.data);
};

export interface IYearsModelProps {
  vehicleType: TypesVehicle;
  codeBrand: number;
  codeModel: number;
}

export const getYearModels = async ({
  vehicleType,
  codeBrand,
  codeModel,
}: IYearsModelProps) => {
  return await api
    .get(`${vehicleType}/brands/${codeBrand}/models/${codeModel}/years`)
    .then((res) => res.data);
};

interface IFipeInfoProps extends IYearsModelProps {
  codeYearModel: string;
}

export const getFipeInfo = async ({
  vehicleType,
  codeBrand,
  codeModel,
  codeYearModel,
}: IFipeInfoProps) => {
  return await api
    .get(`${vehicleType}/brands/${codeBrand}/models/${codeModel}/years/${codeYearModel}`)
    .then((res) => res.data);
};
