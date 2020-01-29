export default ({
  signIn: () => `/auth/sign_in`,
  signUp: () => `/auth?anonymous_id=`,
  signOut: () => `/auth/sign_out`,
});