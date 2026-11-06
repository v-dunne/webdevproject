import Parse from 'parse';

/**
 * Function to log in a user with the provided credentials.
 * @param user - An object containing the username and password of the user.
 * @returns {Promise<Parse.User>} A promise that resolves to the logged-in user.
 */
export const loginUser = async (user) => {
    const username = user.username || user.email;

    if (!username || !user.password) {
        throw new Error("Username/email and password are required.");
    }

    return Parse.User.logIn(username, user.password);
};

/**
 * Function to create a new user with the provided details.
 * @param newUser - An object containing the username, password, and email of the new user.
 * @returns {Promise<Parse.User>} A promise that resolves to the newly created user.
 */
export const createUser = async (newUser) => {
    if (!newUser.email || !newUser.password) {
        throw new Error("Email and password are required.");
    }

    const user = new Parse.User();

    user.set("username", newUser.username || newUser.email);
    user.set("password", newUser.password);
    user.set("email", newUser.email);
    if (newUser.firstName) user.set("firstName", newUser.firstName);
    if (newUser.lastName) user.set("lastName", newUser.lastName);

    return user.signUp();
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
    return Boolean(getCurrentUser()?.authenticated());
}