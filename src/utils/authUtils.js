import { auth, googleProvider } from '../config/firebase';
import Cookies from 'js-cookie';

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
      const expirationTime = new Date(Date.now() + 3600 * 1000); // Set expiration time to 1 hour from now

      Cookies.set('sessionId', sessionId, { expires: expirationTime });
      Cookies.set('idToken', idToken, { expires: expirationTime });
      Cookies.set('expirationTime', expirationTime.toISOString(), { expires: expirationTime });
      Cookies.set('account', JSON.stringify(account), { expires: expirationTime });

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
  const expirationTime = new Date(Cookies.get('expirationTime'));

  if (Date.now() > expirationTime.getTime()) {
    console.log("Session expired");
    Cookies.remove('sessionId');
    Cookies.remove('idToken');
    Cookies.remove('expirationTime');
    Cookies.remove('account');
    return false;
  } else {
    console.log("Session is still valid");
    return true;
  }
};

export { signInWithGoogle, checkSession };
