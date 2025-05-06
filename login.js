function login(username, password) {
    if (username === 'testuser' && password === 'password') {
      return 'Login successful';
    } else {
      return 'Login failed';
    }
  }
  module.exports = { login };