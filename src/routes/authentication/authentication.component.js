import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import {
  signInWithGooglePopup,
  auth,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default Authentication;
