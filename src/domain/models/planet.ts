export interface Planet {
  id: string;
  englishName: string;
  meanRadius: number;
  semimajorAxis: number;
  mass: Mass;
  vol: Vol;
  density: number;
  gravity: number;
  avgTemp: number;
}

export interface Mass {
  massValue: number;
  massExponent: number;
}

export interface Vol {
  volValue: number;
  volExponent: number;
}