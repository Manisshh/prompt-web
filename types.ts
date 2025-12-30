
export enum Page {
  HOME = 'home',
  ABOUT = 'about',
  PRIVACY = 'privacy',
  DISCLAIMER = 'disclaimer'
}

export interface EnhancementOptions {
  addRole: boolean;
  addStructure: boolean;
  addConstraints: boolean;
  targetTone: string;
}
