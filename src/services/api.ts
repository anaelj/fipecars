import axios from 'axios';

import { VehicleTypes } from './api.types';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL?.toString() || '',
});

export const getReferences = async () => {
  return await api.get('references').then((res) => res.data);
};

export const getBrands = async (vehicleType: VehicleTypes) => {
  return await api.get(`${vehicleType}/brands`).then((res) => res.data);
};

interface IModelProps {
  vehicleType: VehicleTypes;
  codeBrand: number;
}

export const getModels = async ({ vehicleType, codeBrand }: IModelProps) => {
  return await api
    .get(`${vehicleType}/brands/${codeBrand}/models`)
    .then((res) => res.data);
};

export interface IYearsModelProps {
  vehicleType: VehicleTypes;
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
  codeYear: string;
}

export const getFipeInfo = async ({
  vehicleType,
  codeBrand,
  codeModel,
  codeYear,
}: IFipeInfoProps) => {
  return await api
    .get(`${vehicleType}/brands/${codeBrand}/models/${codeModel}/years/${codeYear}`)
    .then((res) => res.data);
};
