export default ({
  signIn: () => `/auth/login`, // POST
  signUp: () => `/user`, // POST
  signOut: () => `/auth/sign_out`,
  getProfile: () => `/profile`, // GET
  registerCompany: () => `/company`, // POST
  getCompany: (id) => `/company/one/id?=${id}`, // GET
  updateCompany: (id) => `company/id?=${id}`, // PUT
  deleteCompany: (id) => `company/id?=${id}`, // DELETE
  getAllCompanies: () => `/company`, // GET
  registerPoi: () => `/poi`, // POST
  getPoi: (id) => `/poi/one/id?=${id}`, // GET
  updatePoi: (id) => `poi/id?=${id}`, // PUT
  deletePoi: (id) => `poi/id?=${id}`, // DELETE
  getAllPoi: () => `/poi`, // GET
  getTag: (id) => `/tags/one/${id}`, // GET
  createTag: (id) => `tags`, // POST
  deleteTag: (id) => `tags/${id}`, // DELETE
  getTags: () => `/tags`, // GET
});