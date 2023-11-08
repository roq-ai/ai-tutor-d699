import { ModuleInterface } from 'interfaces/module';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ContentInterface {
  id?: string;
  title: string;
  type: string;
  description?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  module?: ModuleInterface[];
  user?: UserInterface;
  _count?: {
    module?: number;
  };
}

export interface ContentGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  type?: string;
  description?: string;
  user_id?: string;
}
