const URL = "https://jsonplaceholder.typicode.com/users";

exports.getAllContacts = () => {
  return fetch(`${URL}`)
    .then((data) => data.json())
    .catch((err) => console.error(err));
};
