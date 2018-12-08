let apiUrl
const apiUrls = {
  production: 'https://arcane-woodland-92648.herokuapp.com/:4741',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'https://arcane-woodland-92648.herokuapp.com/') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
