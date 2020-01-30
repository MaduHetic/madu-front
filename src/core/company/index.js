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
  return () => {
    dispatch(Actions.getCompany.request());
    dispatch(Events.getCompany());
  };
}

function useUpdateCompany() {
  const dispatch = useDispatch();
  return () => {
    dispatch(Actions.updateCompany.request());
    dispatch(Events.updateCompany());
  };
}

function useDeleteCompany() {
  const dispatch = useDispatch();
  return () => {
    dispatch(Actions.deleteCompany.request());
    dispatch(Events.deleteCompany());
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