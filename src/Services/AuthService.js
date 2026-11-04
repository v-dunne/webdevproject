import Parse from 'parse';

/**
 * Function to log in a user with the provided credentials.
 * @param user - An object containing the username and password of the user.
 * @returns {Promise<Parse.User>} A promise that resolves to the logged-in user.
 */
export const loginUser = async (user) => {
    return await Parse.User.logIn(user.username, user.password);
};

/**
 * Function to create a new user with the provided details.
 * @param newUser - An object containing the username, password, and email of the new user.
 * @returns {Promise<Parse.User>} A promise that resolves to the newly created user.
 */
export const createUser = async (newUser) => {
    const user = new Parse.User();

    user.set("username", newUser.username || newUser.email);
    user.set("password", newUser.password);
    user.set("email", newUser.email);

    console.log("user: ", user);

    return user.signUp().then((result)=>{
        return result;
    }).catch((error) => {
        alert(`Error: ${error.message}`)
    })
};

/**
 * A function to log out the current user.
 * @returns {Promise<void>} A promise that resolves when the user is logged out.
 */
export const logoutUser = async () => {
    return await Parse.User.logOut();
};

/**
 * A function to get the current logged-in user.
 * @returns {Parse.User|null} The current logged-in user, or null if no user is logged in.
 */
export const getCurrentUser = () => {
    return Parse.User.current();
};

/**
 * Check user authentication status
 * @returns {boolean} - Returns true if the user is authenticated, false otherwise.
 */
export const checkUserAuth = () => {
    return getCurrentUser()?.authenticated();
}