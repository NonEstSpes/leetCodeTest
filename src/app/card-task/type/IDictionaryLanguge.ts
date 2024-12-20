export interface Tasks {
  id: number;
  title: string;
  description: string;
  languages: IDropdown[],
  example: string;
  memory_limit: number,
  time_limit: number,
  isSolved: boolean;
}

export interface IDropdown {
  name: string;
  code: string;
}

export enum RunStatus {
  OK = 'OK',
  NA = 'NA',
}

interface IDictionaryLanguage {
  [key: string]: string;
}

export const LanguageForApi = {
  c: 'C',
  c_pp: 'CPP17',
  csharp: 'CSHARP',
  python: 'PYTHON3',
  typescript: 'TYPESCRIPT'
}

export interface Request {
  result: {
    run_status: {
      status: string | RunStatus;
      output?: string;
      status_detail?: string;
      time_used?: number;
      memory_used?: number;
    };
    compile_status: string;
  },
  status_update_url: string;
  request_status: {
    code: string;
    message: string;
  }
}
