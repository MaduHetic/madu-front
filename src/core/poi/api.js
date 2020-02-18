import { client } from "../../helpers/api";
import apiRoutes from "../../helpers/apiRoutes";

function registerPoi(data) {
  return client.request({
    method: "post",
    url: apiRoutes.registerPoi(),
    data: {
      name: data.name,
      address: data.address,
      city: data.city,
      lat: data.lat.toString(),
      long: data.lng.toString(),
      postalCode: data.postCode,
      description: data.description,
      greenScore: data.greenScore,
      tags: data.tags,
      type: data.type,
      price: data.price,
    }
  });
}

function getPoi() {
  return client.request({
    method: "get",
    url: apiRoutes.getPoi()
  });
}

function updatePoi(data, id) {
  return client.request({
    method: "put",
    url: apiRoutes.getProfile(id),
    data: {
      name: data.name,
      address: data.address,
      city: data.city,
      lat: data.lat.toString(),
      long: data.lng.toString(),
      postalCode: data.postCode,
      description: data.description,
      greenScore: data.greenScore,
      tags: data.tags,
      type: data.type,
      price: data.price,
    }
  });
}

function deletePoi(id) {
  return client.request({
    method: "delete",
    url: apiRoutes.deletePoi(id)
  })
}

function getAllPoi() {
  return client.request({
    method: "get",
    url: apiRoutes.getAllPoi()
  })
}

export const Api = {
  registerPoi,
  getPoi,
  updatePoi,
  deletePoi,
  getAllPoi,
};