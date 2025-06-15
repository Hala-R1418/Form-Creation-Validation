// Step 1: Define the async function
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Step 3: Select the data container element
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Step 4: Fetch the data from the API using async/await
        const response = await fetch(apiUrl);
        
        // Check if the response status is ok (200)
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        
        // Convert the response to JSON
        const users = await response.json();
        
        // Step 5: Clear the existing content (loading message)
        dataContainer.innerHTML = '';
        
        // Step 6: Create a user list
        const userList = document.createElement('ul');
        
        // Step 7: Loop through each user and create a list item for their name
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the user's name as the list item's content
            userList.appendChild(listItem);   // Append the <li> to the <ul>
        });
        
        // Append the user list to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 8: Error handling if the fetch operation fails
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Step 9: Invoke the fetchUserData function when the DOM is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);