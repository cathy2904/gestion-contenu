import { Injectable } from '@nestjs/common';
import { GenerateContentDto } from '../content/dto/generate-content.dto';
import { AIResponse } from './interfaces/ai-response.interface';
import axios from 'axios';
import configuration from '../config/configuration';

@Injectable()
export class AiServiceService {
  async generate(dto: GenerateContentDto): Promise<string> {
    const prompt = `Write a ${dto.style || 'neutral'} article titled "${dto.title}" with ${dto.length || 300} words.`;

    if (dto.provider === 'openai') {
      const res = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'gpt-4',
          prompt,
          max_tokens: dto.length || 300,
        },
        {
          headers: { Authorization: `Bearer ${configuration().openaiApiKey}` },
        },
      );
      return res.data.choices[0].text.trim();
    }

    if (dto.provider === 'deepseek') {
      const res = await axios.post(
        'https://api.deepseek.com/generate',
        { prompt },
        {
          headers: { Authorization: `Bearer ${configuration().deepseekApiKey}` },
        },
      );
      return res.data.text.trim();
    }

    if (dto.provider === 'claude') {
      const res = await axios.post(
        'https://api.anthropic.com/v1/complete',
        {
          prompt: `\n\nHuman: ${prompt}\n\nAssistant:`,
          model: 'claude-2',
          max_tokens_to_sample: dto.length || 300,
        },
        {
          headers: {
            'x-api-key': configuration().claudeApiKey,
            'Content-Type': 'application/json',
          },
        },
      );
      return res.data.completion.trim();
    }

    throw new Error('Unsupported provider');
  }
}



// import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { AIResponse } from './interfaces/ai-response.interface';
// import axios from 'axios';
// import OpenAI from 'openai';
// import { ConfigService } from '@nestjs/config';

// @Injectable()
// export class AiServiceService {
//     private openaiClient: OpenAI;

//   constructor(private configService: ConfigService) {
//     this.openaiClient = new OpenAI({
//       apiKey: this.configService.get<string>('ai.openai.apiKey'),
//     });
//   }

//   async generateContent(
//     prompt: string,
//     textStyle: string,
//     textLength: number,
//     provider: string,
//   ): Promise<AIResponse> {
//     const enhancedPrompt = `
//       Génère du contenu sur le sujet suivant: "${prompt}".
//       Style d'écriture: ${textStyle}.
//       Longueur approximative souhaitée: ${textLength} mots.
//     `;

//     switch (provider.toLowerCase()) {
//       case 'openai':
//         return this.generateWithOpenAI(enhancedPrompt);
//       case 'deepseek':
//         return this.generateWithDeepseek(enhancedPrompt);
//       case 'claude':
//         return this.generateWithClaude(enhancedPrompt);
//       default:
//         throw new HttpException(
//           'Fournisseur d\'IA non pris en charge',
//           HttpStatus.BAD_REQUEST,
//         );
//     }
//   }

//   private async generateWithOpenAI(prompt: string): Promise<AIResponse> {
//     try {
//       const response = await this.openaiClient.chat.completions.create({
//         model: 'gpt-4',
//         messages: [{ role: 'user', content: prompt }],
//         temperature: 0.7,
//       });

//       return {
//         content: response.choices[0]?.message?.content || '',
//         provider: 'openai',
//         metadata: {
//           model: 'gpt-4',
//           usage: response.usage,
//         },
//       };
//     } catch (error) {
//       throw new HttpException(
//         `Erreur OpenAI: ${error.message}`,
//         HttpStatus.INTERNAL_SERVER_ERROR,
//       );
//     }
//   }

//   private async generateWithDeepseek(prompt: string): Promise<AIResponse> {
//     try {
//       const apiKey = this.configService.get<string>('ai.deepseek.apiKey');
//       const response = await axios.post(
//         'https://api.deepseek.com/v1/chat/completions',
//         {
//           model: 'deepseek-chat',
//           messages: [{ role: 'user', content: prompt }],
//           temperature: 0.7,
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${apiKey}`,
//           },
//         },
//       );

//       return {
//         content: response.data.choices[0]?.message?.content || '',
//         provider: 'deepseek',
//         metadata: {
//           model: 'deepseek-chat',
//           usage: response.data.usage,
//         },
//       };
//     } catch (error) {
//       throw new HttpException(
//         `Erreur DeepSeek: ${error.message}`,
//         HttpStatus.INTERNAL_SERVER_ERROR,
//       );
//     }
//   }

//   private async generateWithClaude(prompt: string): Promise<AIResponse> {
//     try {
//       const apiKey = this.configService.get<string>('ai.claude.apiKey');
//       const response = await axios.post(
//         'https://api.anthropic.com/v1/messages',
//         {
//           model: 'claude-3-sonnet-20240229',
//           messages: [{ role: 'user', content: prompt }],
//           max_tokens: 1024,
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'x-api-key': apiKey,
//             'anthropic-version': '2023-06-01',
//           },
//         },
//       );

//       return {
//         content: response.data.content[0]?.text || '',
//         provider: 'claude',
//         metadata: {
//           model: 'claude-3-sonnet',
//         },
//       };
//     } catch (error) {
//       throw new HttpException(
//         `Erreur Claude: ${error.message}`,
//         HttpStatus.INTERNAL_SERVER_ERROR,
//       );
//     }
//   }
// }
