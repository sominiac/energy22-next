export interface Question {
  id: string;
  title: string;
  description: string;
  isActive: boolean;
}

export interface IQuestionProps extends Question {
  handlerQuestionClick: (question: Question) => void;
}
