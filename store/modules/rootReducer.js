import { combineReducers } from 'redux'
import category from './admin/category/reducer'
import search from './admin/shared/search/reducer'

import auth from './auth/reducer'

export default combineReducers({
  auth,
  category,
  search
})