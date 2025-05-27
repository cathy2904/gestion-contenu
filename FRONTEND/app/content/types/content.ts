export interface Content {
  _id: string;
  title: string;
  content: string;
  style: string;
  length: string;
  provider: string;
  createdAt: string;
  updatedAt: string;
}

export type ContentFormData = {
  title: string;
  style: string;
  length: string;
  provider: string;
  content: string;
};

export type GenerateContentData = {
  texte: string;
  style: string;
  length: string;
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
  