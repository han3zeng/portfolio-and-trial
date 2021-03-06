import config from '../../config/config';

const apiDev = 'http://localhost:8080';
const apiProduct = 'https://url-shortener-back.appspot.com';
const apiOrigin = config.nodeEnvIsProd ? apiProduct : apiDev;

const createOriginalUrl = async () => {
  const elem = document.getElementById('originalUrl');
  const originalUrl = elem.value;
  const postData = async (obj) => {
    const response = await fetch(`${apiOrigin}/api/shorturl/new`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(obj)
    });
    const data = await response.json();
    return data;
  };
  const data = await postData({ originalUrl });
  console.log(data);
};

export default createOriginalUrl;
