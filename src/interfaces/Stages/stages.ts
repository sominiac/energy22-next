export interface IStage {
  id: string;
  text: string;
}

export interface IStageProps extends Partial<IStage> {
  number: number;
}
