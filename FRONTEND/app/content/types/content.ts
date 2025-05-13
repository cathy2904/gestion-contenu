export interface Content {
  _id: string;
  title: string;
  texte: string;
  style: string;
  length: number;
  provider: string;
  createdAt: string;
  updatedAt: string;
}

export type ContentFormData = {
  title: string;
  style: string;
  length: number;
  provider: string;
  texte: string;
};

export type GenerateContentData = {
  texte: string;
  style: string;
  length: number;
  provider: string;
};

// export interface Content {
//     _id: string;
//     title: string;
//     body: string;
//     style?: string;
//     length?: number;
//     provider?: string;
//     createdAt: string;
//   }
  