export interface MovieData {
  count: number;
  next: null;
  previous: null;
  results: Movie[];
}
export interface Movie {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters?: People[] | null;
  planets?: Planet[] | null;
  starships?: string[] | null;
  vehicles?: string[] | null;
  species?: string[] | null;
  created: string;
  edited: string;
  url: string;
}

export interface Planet {
  climate: string;
  diameter: string;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents?: string[] | null;
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}
export interface People {
  birth_year: string;
  eye_color: string;
  films?: string[] | null;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species?: string[] | null;
  starships?: string[] | null;
  url: string;
  vehicles?: string[] | null;
}
export interface Starships {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  films?: string[] | null;
  pilots?: null[] | null;
  starship_class: string;
  url: string;
}
export interface Veichles {
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots?: null[] | null;
  films?: string[] | null;
  url: string;
  vehicle_class: string;
}

export interface Species {
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: string;
  designation: string;
  edited: string;
  eye_colors: string;
  hair_colors: string;
  homeworld: string;
  language: string;
  name: string;
  people?: string[] | null;
  films?: string[] | null;
  skin_colors: string;
  url: string;
}
