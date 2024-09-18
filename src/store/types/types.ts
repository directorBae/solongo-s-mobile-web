export interface CardContent {
  title: string;
  date: string;
  context: string;
}

export type Place = {
  name: string;
  lat: number;
  lng: number;
  address: string;
  category: string;
  time: string;
  call: string;
};

export type Pathfind = {
  dep: Place;
  via: Place[];
  arr: Place;
};

export type Pallete = {
  title: string;
  time: string;
  summary: string;
  places: Place[];
  pathfinds: Pathfind[];
};

export type AgentAnswer = {
  title: string;
  time: string;
  summary: string;
  places: Place[];
  pathfinds: Pathfind[];
};

export interface VMType {
  VMMode:
    | "cash"
    | "chatlogs"
    | "footprint"
    | "language"
    | "profile"
    | "pathfind"
    | "pallete"
    | null;
}
