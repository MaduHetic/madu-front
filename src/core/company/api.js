import { client } from "../../helpers/api";
import apiRoutes from "../../helpers/apiRoutes";

function registerCompany(data) {
  return client.request({
    method: "post",
    url: apiRoutes.registerCompany(),
    data: {
      name: data.name,
      type: data.type,
      adresse: data.adresse,
      nbuser: data.nbuser,
      contractLength: data.contractLength,
      emailDomaine: data.emailDomaine,
    }
  });
}

function getCompany() {
  return client.request({
    method: "get",
    url: apiRoutes.getCompany()
  });
}

function updateCompany(data, id) {
  return client.request({
    method: "put",
    url: apiRoutes.getProfile(id),
    data: {
      name: data.name,
      type: data.type,
      adresse: data.adresse,
      nbuser: data.nbuser,
      contractLength: data.contractLength,
      emailDomaine: data.emailDomaine,
    }
  });
}

function deleteCompany(id) {
  return client.request({
    method: "delete",
    url: apiRoutes.deleteCompany(id)
  })
}

function getAllCompanies() {
  return client.request({
    method: "get",
    url: apiRoutes.getAllCompanies()
  })
}

export const Api = {
  registerCompany,
  getCompany,
  updateCompany,
  deleteCompany,
  getAllCompanies,
};