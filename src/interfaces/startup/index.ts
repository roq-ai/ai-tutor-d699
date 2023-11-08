import { GetQueryInterface } from 'interfaces';

export interface StartupInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;

  _count?: {};
}

export interface StartupGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  tenant_id?: string;
}
