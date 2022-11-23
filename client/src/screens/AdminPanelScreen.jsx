import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Users from '../components/User';
import Admin from '../components/Admin';


const AdminPanelScreen = () => {
  const [User, setUser] = useState('');


  const setting = async () => {
    setUser((await axios.post('http://localhost:5001/api/auth/getUser',{}, {
    headers: {
       'authToken': localStorage.getItem('authTocken')
    }
  })).data)
  }
  




  useEffect(() => {
    setting();
  }, );
 

  return (
    <>
      {
     <Users User={User}/> 
   }
    </>
  )
}

export default AdminPanelScreen
