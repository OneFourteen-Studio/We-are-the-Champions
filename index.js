import { initalizeApp } from 'firebase/app'
import { getDatabase, ref} from 'firebase/database'

const appSettings = {
    databaseURL: 'https://we-are-the-champions-1978a-default-rtdb.firebaseio.com/'
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementListInDB = ref(database, 'endorsementList')
const userInput = document.getElementById('user-input')
const publishBtn = document.getElementById('publish-btn')
const ulEL = document.getElementById('endorsement-list')



function renderEndorsement() {
    
}
publishBtn.addEventListener('click', renderEndorsement)