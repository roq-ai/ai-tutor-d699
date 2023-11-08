import { ProgressInterface } from 'interfaces/progress';
import { QuizInterface } from 'interfaces/quiz';
import { ContentInterface } from 'interfaces/content';
import { GetQueryInterface } from 'interfaces';

export interface ModuleInterface {
  id?: string;
  name: string;
  description?: string;
  content_id: string;
  created_at?: any;
  updated_at?: any;
  progress?: ProgressInterface[];
  quiz?: QuizInterface[];
  content?: ContentInterface;
  _count?: {
    progress?: number;
    quiz?: number;
  };
}

export interface ModuleGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  content_id?: string;
}
