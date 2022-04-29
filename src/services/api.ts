import axios from 'axios';

import { vehicleTypes } from './api.types';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL?.toString() || '',
});

export const getReferences = async () => {
  return await api.get('references').then((res) => res.data);
};

export const getBrands = async (carType: vehicleTypes) => {
  return await api.get(`${carType}/brands`).then((res) => res.data);
};

interface IModelProps {
  carType: vehicleTypes;
  brandCode: number;
}

export const getModels = async ({ carType, brandCode }: IModelProps) => {
  return await api.get(`${carType}/brands/${brandCode}/models`).then((res) => res.data);
};

export interface IYearsModelProps {
  carType: vehicleTypes;
  codeBrand: number;
  codeModel: number;
}

export const getYearModels = async ({
  carType,
  codeBrand,
  codeModel,
}: IYearsModelProps) => {
  return await api
    .get(`${carType}/brands/${codeBrand}/models/${codeModel}/years`)
    .then((res) => res.data);
};

interface IFipeInfoProps extends IYearsModelProps {
  idYear: string;
}

export const getFipeInfo = async ({
  carType,
  idBrand,
  idModel,
  idYear,
}: IFipeInfoProps) => {
  return await api
    .get(`${carType}/brands/${idBrand}/models/${idModel}/years/${idYear}`)
    .then((res) => res.data);
};
