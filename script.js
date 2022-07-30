
const getUsers = () => fetch('https://reqres.in/api/users')
  .then(users => users.json())
  .catch(error => console.trace(error));

const addUser = () => fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        first_name: 'Halsey',
        last_name: 'Frangipane',
        avatar: 'https://media1.popsugar-assets.com/files/thumbor/xmjDR2E8UsV56rX0o6wbWc8xn_8/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2016/04/09/112/n/1922153/5402c265_edit_img_cover_file_15741499_1460251081_GettyImages-520044938/i/Halsey-Hair-Makeup-2016-MTV-Movie-Awards.jpg',
        email: 'halsey@reqres.com'
    })
})
.then(users => {
    return users.json();
}).then(data => {
    console.log('data', data);
    return data;
})
.catch(error => console.trace(error));


window.onload = async function () {
    const users = await getUsers();
    console.log(users);
    users.data.forEach(user => {
        document.getElementById('userContainer').innerHTML += `
        <div class="gridItem zoom">
        <img src="${user.avatar}"/>
        <p class="names">${user.first_name} ${user.last_name}</p>
        <p class="email">${user.email}</p>
        </div>
        `;
    });
}
