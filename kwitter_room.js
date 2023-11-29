var firebaseConfig = {
      apiKey: "AIzaSyCA2U8L0kmFvqUXXwhM3pPIe_qt_5xCYow",
      authDomain: "class94-facetube.firebaseapp.com",
      databaseURL: "https://class94-facetube-default-rtdb.firebaseio.com",
      projectId: "class94-facetube",
      storageBucket: "class94-facetube.appspot.com",
      messagingSenderId: "986524540176",
      appId: "1:986524540176:web:b8cf67de12b8e9729b1995"
    };
    






    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function getData(){
      firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     
      
      });});}
getData();
