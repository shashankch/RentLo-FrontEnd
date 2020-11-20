const API_ROOT = 'http://localhost:8000/api/v1';
export const APIUrls = {
  login: () => `${API_ROOT}/user/login`,
  signup: () => `${API_ROOT}/user/register`,
  fetchPosts: () => `${API_ROOT}/asset`,
  searchPosts: () => `${API_ROOT}/asset/search`,
  applyPosts: (user = 'dfdd', asset = 'dfd') =>
    `${API_ROOT}/asset/apply/${user}/${asset}`,
  getAssets: (id) => `${API_ROOT}/asset/assetbyuser/${id}`,
};
