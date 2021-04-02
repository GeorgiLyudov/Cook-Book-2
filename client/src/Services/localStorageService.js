const services = {
  saveUserData(data) {
    const { user: { email, uid } } = data;
    localStorage.setItem('user', JSON.stringify({ email, uid }));
  },
  getUserData() {
    let user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
  
}
export default services;
