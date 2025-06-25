export class CreateContentDto {
  readonly title: string;
  readonly content: string;
  readonly style?: string;
  readonly length?: string;
  readonly provider?: string;
  readonly platform?: string;
  readonly media?: string;
  readonly user?: string;
}