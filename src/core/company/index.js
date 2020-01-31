import { useDispatch, useSelector } from "react-redux";
import { rootSagas } from "./sagas";
import { Events, Actions } from "./actions";
import { companyReducer } from "./reducer";
import { allCompanies, isLoading } from "./selectors";

function useRegisterCompany() {
  const dispatch = useDispatch();
  return (data) => {
    dispatch(Actions.registerCompany.request(true));
    dispatch(Events.registerCompany(data));
  };
}

function useGetCompany() {
  const dispatch = useDispatch();
  return (id) => {
    dispatch(Events.getCompany(id));
    dispatch(Actions.getCompany.request());
  };
}

function useUpdateCompany() {
  const dispatch = useDispatch();
  return (data) => {
    dispatch(Events.updateCompany(data));
    dispatch(Actions.updateCompany.request());
  };
}

function useDeleteCompany() {
  const dispatch = useDispatch();
  return (id) => {
    dispatch(Events.deleteCompany(id));
    dispatch(Actions.deleteCompany.request());
  };
}

function useGetAllCompanies() {
  const dispatch = useDispatch();
  return () => {
    dispatch(Actions.getAllCompanies.request());
    dispatch(Events.getAllCompanies());
  };
}

function useIsLoading() {
  return useSelector(isLoading);
}

function useAllCompanies() {
  return useSelector(allCompanies);
}


export const Company = {
  registerCompany: useRegisterCompany,
  getCompany: useGetCompany,
  updateCompany: useUpdateCompany,
  deleteCompany: useDeleteCompany,
  getAllCompanies: useGetAllCompanies,
  allCompanies: useAllCompanies,
  isLoading: useIsLoading,
  sagas: rootSagas,
  reducer: companyReducer
};