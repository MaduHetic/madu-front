import { createSelector } from "reselect";

export const company = (state) => state.company;
export const isLoading = (state) => company(state).isLoading;
export const allCompanies = (state) => company(state).companies;
export const filteredByType = (state) => company(state).filteredByType

export const getAllCompaniesType = createSelector(
    [allCompanies],
    companies => Array.from(new Set(companies.map(company => company.type)))
);

// export const filterAllCompanies = createSelector(
//     [allCompanies],
//     companies => companies.filter(company => company.type === filteredByType)
// )