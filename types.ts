
export interface Option {
  text: string;
  score: number;
}

export interface Question {
  id: number;
  category: string;
  text: string;
  options: Option[];
}
