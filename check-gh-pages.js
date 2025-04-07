// Simple script to check if the GitHub Pages site is accessible
import https from 'https';

const url = 'https://tripcoders.github.io/travelsecrets/';

https.get(url, (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', res.headers);

  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response length:', data.length);
    console.log('First 200 characters:', data.substring(0, 200));
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
