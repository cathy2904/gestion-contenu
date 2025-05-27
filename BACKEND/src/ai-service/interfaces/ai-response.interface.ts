export interface AiResponse {
  content: string;
}

export interface AiGenerateParams {
  provider: string;
  prompt: string;
  style?: string;
  length?: string;
}
// export interface AIResponse {
//     content: string;
//     provider: string;
//     metadata?: any;
//   }
  