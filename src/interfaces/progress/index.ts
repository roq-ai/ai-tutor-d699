import { UserInterface } from 'interfaces/user';
import { ModuleInterface } from 'interfaces/module';
import { GetQueryInterface } from 'interfaces';

export interface ProgressInterface {
  id?: string;
  user_id: string;
  module_id: string;
  status: string;
  score?: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  module?: ModuleInterface;
  _count?: {};
}

export interface ProgressGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  module_id?: string;
  status?: string;
}
