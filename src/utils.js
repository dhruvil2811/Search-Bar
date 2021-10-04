const URL = "https://jsonplaceholder.typicode.com/users";
const url_delete = "https://jsonplaceholder.typicode.com/posts/";
export async function getAllContacts() {
  try {
    const data = await fetch(`${URL}`);
    return await data.json();
  } catch (err) {
    return console.error(err);
  }
}

export async function deleteContacts(id) {
  try {
    const data = await fetch(`${url_delete}${id}`, {
      method: "DELETE",
    });
    return await data.json();
  } catch (err) {
    return console.error(err);
  }
}
