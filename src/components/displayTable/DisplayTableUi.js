fetch("http://localhost:5000/products")
  .then((response) => {
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new TypeError("Oops, we haven't got JSON!");
    }
    return response.json();
  })
  .then(() => {
    console.log("No JSON received.")
  })
  .catch((error) => console.error(error));


