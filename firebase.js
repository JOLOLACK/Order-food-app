import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getDatabase, ref, set , onValue} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js"; // Import set
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js";
function reloadPage(){
    location.reload()
}
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdI7si0zwxtru__PYwUVGD7WYrR9GEmnk",
  authDomain: "productsamuweb.firebaseapp.com",
  databaseURL: "https://productsamuweb-default-rtdb.firebaseio.com",
  projectId: "productsamuweb",
  storageBucket: "productsamuweb.appspot.com",
  messagingSenderId: "969952328083",
  appId: "1:969952328083:web:d1ec2eb90e8872d9b39066"
};

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)
const storage = getStorage(app);

const reference = ref(db, 'dataBase/')


function addData(referencePath, data){
    const dataReference = ref(db, `${referencePath}`)
    set(dataReference, data)
        .then(() => {
            console.log('bruh')
            reloadPage()
        })
        .catch((error) => {
            console.log('no bruh')
            alert('Unsuccessful: ' + error.message);
        });


}

function deleteImage(imagePath) {
    // Create a reference to the file to delete
    const imageRef = storageRef(storage, imagePath);

    
    deleteObject(imageRef).then(() => {
        console.log("File deleted successfully");
        reloadPage();  
    }).catch((error) => {
        console.error("Error deleting file:", error);
    });
}


function retrieveData() {
    return new Promise((resolve, reject) => {
        onValue(reference, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                resolve(data);
            } else {
                reject('No data available');
            }
        });
    });
}   


function uploadImage(file) {
    // Create a reference to the image in Firebase Storage
    const storageReference = storageRef(storage, 'images/' + file.name);

    // Return a promise that resolves with the download URL
    return uploadBytes(storageReference, file)
        .then((snapshot) => {
            console.log('Image uploaded successfully:', snapshot);

            // Get the download URL for the uploaded image
            return getDownloadURL(snapshot.ref);
        })
        .then((downloadURL) => {
            console.log('Download URL:', downloadURL);
            return downloadURL;  // Return the download URL so it can be used elsewhere
        })
        .catch((error) => {
            console.error('Error uploading image:', error);
            throw error;  // Propagate the error so it can be handled outside the function
        });
}


function saveImageUrlToDatabase(downloadURL) {
    const ImgReference = ref(db, 'images/');
    
    // Save the image URL in the Realtime Database
    set(reference, {

        imageUrl: downloadURL
    })
    .then(() => {
        alert('Image URL added to database successfully');
    })
    .catch((error) => {
        console.error('Error adding URL to database:', error);
    });
}

/*
document.getElementById('imageInput').addEventListener('change', (event) => {
    const file = event.target.files[0];
    uploadImage(file);  // Call the function to upload the image
});
*/

// Call the function
export {uploadImage, retrieveData,addData, deleteImage}


