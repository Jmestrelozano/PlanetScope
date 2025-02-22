import { IPlanetRepository } from "../../domain/repositories/IPlanetRepository";
import { Planet } from "../../domain/models/Planet";

export class PlanetApi implements IPlanetRepository {
  private BASE_URL = 'https://api.le-systeme-solaire.net/rest/bodies?data=id,englishName,meanRadius,gravity,density,mass,massValue,massExponent,vol,volValue,volExponent,avgTemp,semimajorAxis&page=1&filter[]=isPlanet,eq,true';

  async fetchPlanets(): Promise<Planet[]> {
    const response = await fetch(this.BASE_URL);
    const data = await response.json();
    return data.bodies.map((body: any) => ({
      ...body,
      image: 'https://via.placeholder.com/150',
    }));
  }
}