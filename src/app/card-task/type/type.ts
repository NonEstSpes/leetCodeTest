export interface Tasks {
  id: number;
  title: string;
  description: string;
  languages: IDropdown[],
  example: string;
}

export interface IDropdown {
  name: string;
  code: string;
}
