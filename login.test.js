const { login } = require('./login');

describe('Login Functionality', () => {
  it('should login successfully with correct credentials', () => {
    expect(login('testuser', 'password')).toBe('Login successful');
  });

  it('should fail login with incorrect username', () => {
    expect(login('wronguser', 'password')).toBe('Login failed');
  });

  it('should fail login with incorrect password', () => {
    expect(login('testuser', 'wrongpass')).toBe('Login failed');
  });

  it('should fail login with empty username', () => {
    expect(login('', 'password')).toBe('Login failed');
  });

  it('should fail login with empty password', () => {
    expect(login('testuser', '')).toBe('Login failed');
  });

  it('should fail login with empty username and password', () => {
    expect(login('', '')).toBe('Login failed');
  });

  it('should handle special characters in username', () => {
     expect(login('user!@#$', 'password')).toBe('Login failed');
  });
  it('should handle special characters in password', () => {
     expect(login('testuser', 'pass!@#$')).toBe('Login failed');
  });
});