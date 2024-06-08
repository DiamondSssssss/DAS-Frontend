import { auth, googleProvider } from '../config/firebase';

const signInWithGoogle = async () => {
  try {
    const result = await auth.signInWithPopup(googleProvider);
    const user = result.user;
    const idToken = await user.getIdToken();

    const response = await fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${idToken}`
      }
    });

    if (response.ok) {
      const data = await response.json();
      const sessionId = data.sessionId;
      const account = data.account;
      const expirationTime = Date.now() + 3600 * 1000; // Set expiration time to 1 hour from now

      localStorage.setItem('sessionId', sessionId);
      localStorage.setItem('idToken', idToken);
      localStorage.setItem('expirationTime', expirationTime.toString());

      console.log("Successfully authenticated");
      console.log("Account details:", account);
    } else {
      console.error("Authentication failed");
    }
  } catch (error) {
    console.error("Error during Google Sign-In: ", error);
  }
};

const checkSession = () => {
  const expirationTime = parseInt(localStorage.getItem('expirationTime'), 10);

  if (Date.now() > expirationTime) {
    console.log("Session expired");
    localStorage.removeItem('sessionId');
    localStorage.removeItem('idToken');
    localStorage.removeItem('expirationTime');
    return false;
  } else {
    console.log("Session is still valid");
    return true;
  }
};

export { signInWithGoogle, checkSession };
