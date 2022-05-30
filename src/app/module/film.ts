export class Film {
  title: string;
  episode_id?: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;

  constructor(
    paramTitle: string,
    paramOpening: string,
    paramDirector: string,
    paramProducer: string,
    paramRelease: string,
    paramChar: string[],
    paramPlanets: string[],
    paramStars: string[],
    paramVehicles: string[],
    paramSpecies: string[],
    paramCreated: string,
    paramEdited: string,
    paramUrl: string,
  ) {
    this.title = paramTitle;
    this.opening_crawl = paramOpening;
    this.director = paramDirector;
    this.producer = paramProducer;
    this.release_date = paramRelease;
    this.characters = paramChar;
    this.planets = paramPlanets;
    this.starships = paramStars;
    this.vehicles = paramVehicles;
    this.species = paramSpecies;
    this.created = paramCreated;
    this.edited = paramEdited;
    this.url = paramUrl;

  }
}
