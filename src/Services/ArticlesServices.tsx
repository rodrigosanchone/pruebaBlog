import {db, storage} from '../firebaseconfig'
import ReactFirebaseFileUploader from 'react-firebase-file-uploader';
import React from 'react';

/* class ImageUpload extends React.Component {
    state = {
      avatar: '',
      isUploading: false,
      progress: 0,
      avatarURL: ''
    };
   */

export const ArticclesServices =()=>{

    const storage = ReactFirebaseFileUploader.storage();



   

  const  createArticle= async (articles, data)=>{

   
    try{
         const docRef = await
         db.collection(articles)
         .add(data);
         const imageUrl = await uploadImage(data.file);
         return docRef.id;
         
    }catch(error){
        console.error("Error adding document: ", error);
        return null;
    }
  }

  const uploadImage = async (file) => {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    const imageUrl = await fileRef.getDownloadURL();
    return imageUrl;
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const imageUrl = await uploadImage(file);
    console.log('Image URL:', imageUrl);
  };


  const deleteDocument =async (articles,id) => {
    try{
        const docRef = await
        db.collection(articles)
        .doc(id).delete();
        return true
   }catch(error){
       console.error("Error removing: ", error);
       return false;
   }
     
  }

 
  
};





