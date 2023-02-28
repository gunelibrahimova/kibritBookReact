import React, { useEffect, useState } from 'react'
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import './Auth.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../api/config';
import Swal from 'sweetalert2';
import { signInUser, signUpUser } from '../../redux/Reducer/authSlice';

const Auth = () => {

  const [value, setValue] = useState('1');
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [fullName, setFullName] = useState("");
  const [emaill, setEmaill] = useState("");
  const [passwordd, setPasswordd] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const registerHandle = () => {
    console.log(emaill, passwordd,fullName );
    dispatch(signUpUser({fullName,emaill, passwordd}))
  }

  const loginHandle = () => {
    console.log(email, password );
    dispatch(signInUser({email, password}))
  }


  return (
    <div id='authPages'>
      <div className="">
        <div className="loginBox">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Giriş" value="1" className='giris' />
                  <Tab label={"Qeydiyyat"} value="2" className='giris' />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="inputBox">
                  <p>E-poçt</p>
                  <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="inputBox marginBottom">
                  <p>Şifrəniz</p>
                  <input type="password" onChange={(e) => setPassword(e.target.value)}/>

                </div>
                <div className="buttonBox">
                  <button onClick={loginHandle}>Giriş</button>
                </div>

              </TabPanel>
              <TabPanel value="2">
                <div className="inputBox">
                  <p>Ad</p>
                  <input type="text" onChange={(e) => setFullName(e.target.value)}/>
                </div>
                <div className="inputBox">
                  <p>E-poçt ünvanı</p>
                  <input type="text" onChange={(e) => setEmaill(e.target.value)}/>
                </div>
                <div className="inputBox">
                  <p>Şifrə</p>
                  <input type="password" onChange={(e) => setPasswordd(e.target.value)}/>
                </div>
                <div className="buttonBoxx">
                  <button onClick={registerHandle}>Qeydiyyatdan keç</button>
                </div>
              </TabPanel>
            </TabContext>
          </Box>
        </div>
        <div className="col-lg-6"></div>
      </div>


    </div>
  )
}

export default Auth