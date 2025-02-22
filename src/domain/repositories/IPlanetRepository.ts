import { Planet } from '../models/Planet';

export interface IPlanetRepository {
  fetchPlanets(): Promise<Planet[]>;
}