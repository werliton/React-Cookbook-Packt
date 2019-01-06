import firebase from 'firebase'
import { fbconfig } from '../../config/firebase';


firebase.initializeApp(fbconfig.app)

export default firebase.database().ref(fbconfig.ref)