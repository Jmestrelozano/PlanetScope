import { API_BASE_URL } from '../config/apiConfig';
import { getPlanetQueryString } from '../config/queryConfig';
import { IPlanetRepository } from "../../domain/repositories/IPlanetRepository";
import { Planet } from "../../domain/models/Planet";

export class PlanetApi implements IPlanetRepository {
  private BASE_URL = `${API_BASE_URL}${getPlanetQueryString()}`;

  async fetchPlanets(): Promise<Planet[]> {
    const response = await fetch(this.BASE_URL);
    const data = await response.json();
    return data.bodies.map((body: any) => ({
      ...body,
      image: 'https://via.placeholder.com/150',
    }));
  }
}