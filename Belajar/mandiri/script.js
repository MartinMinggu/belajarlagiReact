console.log('test')

const api = 'https://jsonplaceholder.typicode.com/posts';

fetch(api)
    .then(response => response.json())
    .then(json => console.log(json))


fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));