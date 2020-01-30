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
});