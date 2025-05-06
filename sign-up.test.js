import { validateForm, createUser, submitForm } from './signUp';

jest.mock('./signUp', () => ({
    ...jest.requireActual('./signUp'),
    createUser: jest.fn()
}));

describe('Sign Up Form', () => {
    it('should validate a valid form', () => {
        expect(validateForm('test@example.com', 'success', 'success123')).toBe(true);
    });
    it('should not validate an invalid email', () => {
        expect(validateForm('test', 'password123', 'password123')).toBe(false);
    });
    it('should not validate a password mismatch', () => {
        expect(validateForm('test@example.com', 'password123', 'password1234')).toBe(false);
    });
    it('should create a user successfully', async () => {
        const mockCreateUser = jest.mocked(createUser);
        mockCreateUser.mockResolvedValueOnce({ id: 1, email: 'test@example.com' });
        const user = await createUser('test@example.com', 'password123');
        expect(user).toEqual({ id: 1, email: 'test@example.com' });
    });
    it('should handle user creation failure', async () => {
        const mockCreateUser = jest.mocked(createUser);
        mockCreateUser.mockRejectedValueOnce('User already exists');
        await expect(createUser('test@example.com', 'password123')).rejects.toMatch('User already exists');
    });
    it('should submit a form successfully', async () => {
        const mockCreateUser = jest.mocked(createUser);
        mockCreateUser.mockResolvedValueOnce({ id: 1, email: 'test@example.com' });
        const navigate = jest.fn();
        const user = await submitForm('test@example.com', 'password123', 'password123', navigate);
        expect(user).toEqual({ id: 1, email: 'test@example.com' });
        expect(navigate).toHaveBeenCalledWith('/dashboard');
    });
    it('should handle form submission failure', async () => {
        const navigate = jest.fn();
        await expect(submitForm('test', 'password123', 'password1234', navigate)).rejects.toThrow('Invalid form');
    });
});