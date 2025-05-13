export class CreateContentDto {
  readonly title: string;
  readonly body: string;
  readonly style?: string;
  readonly length?: number;
  readonly provider?: string;
}