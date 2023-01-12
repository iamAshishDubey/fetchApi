let section = document.querySelector("section");

fetch("https://api.github.com/users")
  .then((response) => {
    //console.log(response.json());   --> give promise(object type) type data and store in the form of array.
    response
      .json() // it print the data from api.  //  Use the fetch() method to return a promise that resolves into a Response object. To get the actual data, you call one of the methods of the Response object e.g., text() or json().
      .then((data) => {
        data.map((value) => {
          let { login, avatar_url, html_url } = value;
          section.innerHTML += ` 
        <div> 
        <h2> ${login} </h2>
        <img src=${avatar_url} alt=${login} width="200px">
        <a href=${html_url} target="_blank"> Go to GitHub Profile </a>
        </div>
         `;
        });
      })
      .catch((err) => console.log(err));
  })
  .catch((error) => console.log(error))
  .finally(() => {
    console.log("server is responding");
  });
