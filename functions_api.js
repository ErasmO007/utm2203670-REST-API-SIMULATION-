// Array to store users
const users = [];

// Function to format responses and validate scenarios
function formatResponse(code, body, msg) {
  return { code, body, msg };
}

// Function to add a new user
function addUser(newUser) {
  users.push(newUser);
  return formatResponse(201, { newUser, users }, "User added successfully.");
}

const user1 = { username: "beto_campos", name: "Beto Campos" };
const addUserResult = addUser(user1);
console.log("Add User:", addUserResult);

const user2 = { username: "erasmo_diaz", name: "Erasmo Diaz" };
const addUserResult2 = addUser(user2);
console.log("Add User:", addUserResult2);

const user3 = { username: "jacob_escareño", name: "Jacob Escareño" };
const addUserResult3 = addUser(user3);
console.log("Add User:", addUserResult3);

const user4 = { username: "carlos_galindo", name: "Carlos Galindo" };
const addUserResult4 = addUser(user4);
console.log("Add User:", addUserResult4);

// Function to remove a user by index
function removeUserByIndex(index) {
  if (index >= 0 && index < users.length) {
    const deletedUser = users.splice(index, 1)[0];
    return formatResponse(200, { deletedUser, users }, "User deleted successfully.");
  }
  return formatResponse(404, null, "Invalid user index.");
}

// Function to remove the last user
function removeLastUser() {
  if (users.length > 0) {
    const deletedUser = users.pop();
    return formatResponse(200, { deletedUser, users }, "Last user deleted successfully.");
  }
  return formatResponse(404, null, "No users to delete.");
}
const removeLastUserResult = removeLastUser();
console.log("Remove Last User:", removeLastUserResult);

// Function to remove the first user
function removeFirstUser() {
  if (users.length > 0) {
    const deletedUser = users.shift();
    return formatResponse(200, { deletedUser, users }, "First user deleted successfully.");
  }
  return formatResponse(404, null, "No users to delete.");
}
const removeFirstUserResult = removeFirstUser();
console.log("Remove First User:", removeFirstUserResult);

// Function to update a user by index
function updateUserByIndex(index, newValue) {
  if (index >= 0 && index < users.length) {
    users[index] = newValue;
    return formatResponse(200, { updatedUser: newValue, users }, "User updated successfully.");
  }
  return formatResponse(404, null, "Invalid user index.");
}

const updateUserResult = updateUserByIndex(0, { username: "sofia_campos", name: "Sofia Campos" });
console.log("Update User by Index:", updateUserResult);

// Function to get all users
function getUsers() {
  return formatResponse(200, users, "List of users obtained.");
}
const getUsersResult = getUsers();
console.log("Get All Users:", getUsersResult);

// Function to get the number of users
function getUsersSize() {
  return formatResponse(200, users.length, "Number of users obtained.");
}
const getUsersSizeResult = getUsersSize();
console.log("Get Users Size:", getUsersSizeResult);

// Function to get a user by username
function getUser(username) {
  for (const user of users) {
    if (user.username === username) {
      return formatResponse(200, user, "User found.");
    }
  }
  return formatResponse(404, null, "User not found.");
}
const getUserResult = getUser("sofia_campos");
console.log("Get User by Username:", getUserResult);
