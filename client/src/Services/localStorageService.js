const services = {
  saveUserData(email, _id) {
    const data = { user: { email, _id } };
    localStorage.setItem('user', JSON.stringify(data));
  },
  getUserData() {
    let user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
  
}
export default services;
