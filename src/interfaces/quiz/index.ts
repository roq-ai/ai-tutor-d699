import { ModuleInterface } from 'interfaces/module';
import { GetQueryInterface } from 'interfaces';

export interface QuizInterface {
  id?: string;
  question: string;
  answer: string;
  module_id: string;
  created_at?: any;
  updated_at?: any;

  module?: ModuleInterface;
  _count?: {};
}

export interface QuizGetQueryInterface extends GetQueryInterface {
  id?: string;
  question?: string;
  answer?: string;
  module_id?: string;
}
