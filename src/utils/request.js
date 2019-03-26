export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

export function makeReqOptions(params) {
  const options = {
    method: 'GET',
    headers: {
      Accept: '*/*',
    },
  };

  
  options.headers['Content-Type'] = 'application/json';

  if (params.apiKey) {
    options.headers['Authorization'] = 'Bearer' + localStorage.getItem('fresco_talk.api_key');
  }


  if (params.method) {
    options.method = params.method;
  }

  if ((params.method === 'POST' || params.method === 'PUT') && params.data) {
    if (options.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      const searchParams = Object.keys(params.data).map((key) => (
        `${encodeURIComponent(key)}=${encodeURIComponent(params.data[key])}`
      )).join('&');
      options.body = searchParams;
    } else if (options.headers['Content-Type'] === 'application/json') {
      options.body = JSON.stringify(params.data);
    } else {
      // this is to handle multipart-formdata and other such content types
      options.body = params.data;
      // options.mode = 'no-cors';
    }
  } else if ((options.method === 'GET' || params.method === 'DELETE') && params.data) {
    options.queryParams = params.data;
  }
  // TODO: remove this condition after checking if things are breaking.
  if (params.payload) {
    options.queryParams = params.payload;
  }
  console.log('options', options);
  return options;
}