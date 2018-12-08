let apiUrl
const apiUrls = {
  production: 'https://arcane-woodland-92648.herokuapp.com/:4741',
  development: `${apiUrl}`
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
