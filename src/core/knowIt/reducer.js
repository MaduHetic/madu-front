import { ActionType, getType } from "typesafe-actions";
import produce from "immer";
import { Actions } from "./actions";

const initialState: KnowItState = {
  data: [],
  errors: [],
  isLoading: false,
};

export type KnowItAction = ActionType<typeof Actions.getKnowIt>;

export const knowItReducer = (state = initialState, action: KnowItAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case getType(Actions.getKnowIt.request):
        draft.isLoading = action.payload;
        break;
      case getType(Actions.getKnowIt.success):
        draft.isLoading = false;
        draft.data = action.payload;
        draft.errors = [];
        break;
      case getType(Actions.getKnowIt.failure):
        draft.isLoading = action.payload;
        break;
      case getType(Actions.addKnowIt.request):
        draft.isLoading = true;
        break;
      case getType(Actions.addKnowIt.success):
        draft.isLoading = false;
        // draft.data = action.payload;
        // draft.errors = [];
        break;
      case getType(Actions.addKnowIt.failure):
        draft.isLoading = true;
        break;
      case getType(Actions.deleteKnowIt.request):
        draft.isLoading = true;
        break;
      case getType(Actions.deleteKnowIt.success):
        draft.isLoading = true;
        break;
      case getType(Actions.deleteKnowIt.failure):
        draft.isLoading = true;
        break;  
      default:
        return state;
    }
  });
};
