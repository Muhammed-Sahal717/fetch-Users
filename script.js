
/* Fetches users from an API

Shows a loading message

Renders user names in a list

Handles errors safely */

const userList = document.getElementById('user-list');
const loadingMessage = document.getElementById('loading-message');
const errorMessage = document.getElementById('error-message');

async function fetchUsers() {
    try {
        loadingMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const users = await response.json();
        renderUserList(users);
        loadingMessage.style.display = 'none';
    } catch (error) {
        console.error('Fetch error:', error);
        errorMessage.style.display = 'block';
        errorMessage.textContent = `Failed to load users. Please try again later. (Error: ${error.message})`;
        loadingMessage.style.display = 'none';
    }
}

function renderUserList(users) {
    userList.innerHTML = '';
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        userList.appendChild(listItem);
    });
}

fetchUsers();