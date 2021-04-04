const services = {
  saveUserData(email, favourites) {
    const data = { user: { email, favourites } };
    localStorage.setItem('user', JSON.stringify(data));
  },
  getUserData() {
    let user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
  
}
export default services;
