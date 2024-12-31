// Simulating an asynchronous operation (like a database query or API call)
//In JavaScript, Promises and async/await are used for handling asynchronous operations, similar to how Tasks and async/await are used in C#.
//await is used to wait for a Promise (in JavaScript) or a Task (in C#) to complete.


function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 123) {
        resolve({ id: 123, name: "John Doe", email: "john@example.com" });
      } else {
        reject("User not found");
      }
    }, 1000); // Simulating a delay of 1 second
  });
}

// Using the Promise
fetchUserData(123)
  .then(user => {
    console.log("User found:", user);
  })
  .catch(error => {
    console.error("Error:", error);
  });

console.log("This will print before the user data");

async function getUserDetails(userId) {
  try {
    const user = await fetchUserData(userId);
    console.log("User details:", user);
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}

// Using the async function
async function main() {
  try {
    const user = await getUserDetails(123);
    console.log("Processing user:", user.name);
  } catch (error) {
    console.error("Main function error:", error);
  }
}

main();
console.log("This will print before the user details");