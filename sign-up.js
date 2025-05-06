export const validateForm = (email, password, confirmPassword) => {
    if (!email) return false;
    if (!password) return false;
    if (password !== confirmPassword) return false;
    // Add more validation logic here
    return true;
};

export const createUser = async (email, password) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'test@example.com') {
                reject('User already exists');
            } else {
                resolve({ id: 1, email });
            }
        }, 100);
    });
};

export const submitForm = async (email, password, confirmPassword, navigate) => {
    if (!validateForm(email, password, confirmPassword)) {
        throw new Error('Invalid form');
    }
    try {
        const user = await createUser(email, password);
        navigate('/dashboard');
        return user;
    } catch (error) {
        throw error
    }
};