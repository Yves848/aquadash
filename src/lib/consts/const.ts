export enum Dow {
  Dimanche,
  Lundi,
  Mardi,
  Mercredi,
  Jeudi,
  Vendredi,
  Samedi
}

export enum ModeEclairage {
  Jour,
  Nuit
}

export interface planningEntry {
  start : string,
  end : string
}