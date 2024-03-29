export interface ShowResponse {
  score: number
  show: Show
}

export interface Show {
  id: number
  url: string
  name: string
  type: string
  language: string
  genres: string[]
  status: string
  runtime?: number
  premiered: string
  officialSite?: string
  schedule: Schedule
  rating: Rating
  weight: number
  network?: Network
  webChannel?: WebChannel
  externals: Externals
  image: Image
  summary: string
  updated: number
  _links: Links
}
export interface ShowDetails extends Show {
  _embedded: Embedded
}
export interface Schedule {
  time: string
  days: string[]
}

export interface Rating {
  average?: number
}

export interface Network {
  id: number
  name: string
  country: Country
}

export interface Country {
  name: string
  code: string
  timezone: string
}

export interface WebChannel {
  id: number
  name: string
  country: any
}

export interface Externals {
  tvrage?: number
  thetvdb: number
  imdb?: string
}

export interface Image {
  medium: string
  original: string
}

export interface Links {
  self: Self
  previousepisode: Previousepisode
}

export interface Self {
  href: string
}

export interface Previousepisode {
  href: string
}
export interface Embedded {
  episodes: Episode[]
}

export interface Episode {
  id: number
  url: string
  name: string
  season: number
  number: number
  airdate: string
  airtime: string
  airstamp: string
  runtime: number
  image?: Image
  summary: string
  _links: Links
}
