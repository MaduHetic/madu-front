import { userReducer } from '../core/user/reducer';
import { companyReducer } from '../core/user/company';

export interface State {
  user: userReducer;
  company: companyReducer;
}