import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useLocation } from "react-router-dom";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import L from "leaflet"

import './profileStyle.css';
import 'leaflet/dist/leaflet.css';

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// icones

const defaultCenter = [38.9072, -77.0369];
const defaultZoom = 8;
const disneyWorldLatLng = [28.3852, -81.5639];
const disneyLandLatLng = [33.8121, -117.9190];

function GetIcon(_iconSize){
  return L.icon({
    iconUrl: require("../../assets/images/icons/markericon.png"),
    iconSize: [_iconSize]
  })
}

function ProfileModal() {
  const mapRef = useRef();
  const { collapseSidebar } = useProSidebar();
    const location = useLocation();

    // get userId
    let userId = location.state.userId;

    //get points
    let description = location.state.description;
    let desc = description.split("S/");
    desc[1]= desc[1].split("W");
    desc[1]= desc[1][0];
  
    // let hora = desc[0].substring(0,2)
    // let min = desc[0].substring(2,4)
    // let seg = desc[0].substring(4,6)
    // desc[0] = (hora + (((min * 60) + seg)/3600)) * -1
    // hora = desc[1].substring(0,2)
    // min = desc[1].substring(2,4)
    // seg = desc[1].substring(4,6)
    // desc[1] = (hora + (((min * 60) + seg)/3600)) 
    // let aux = desc[0]
    // desc[0] = desc[1]
    // desc[1] = aux    
    console.log(desc)
    const position = desc
    // return(
    //     <div class="page" role="document">
    //         <div class="modal-content">
    //             <h1> HELLO {userId} </h1>
    //         </div>                    
    //     </div>
    // )

  /**
   * handleOnFlyTo
   */

  const navigate = useNavigate();
  const goToFormPage = () => {
    navigate('/form');
  }

  return (
    <div className="App">
      <MapContainer ref={mapRef} center={position} zoom={30}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
        <Marker position={position} icon={GetIcon(40)}></Marker>
      </MapContainer>
      <div className="sidebar">
        <Sidebar style={{ height: "100vh" }}>
                <Menu>
                    <MenuItem
                        icon={<MenuOutlinedIcon />}
                        style={{ textAlign: "center" }}
                    >
                        <h2>{userId}</h2>
                    </MenuItem>

                    <MenuItem icon={<ReceiptOutlinedIcon />} onClick = {goToFormPage}>Upload</MenuItem>
                </Menu>
            </Sidebar>
      </div>
    </div>
  );
}

export default ProfileModal;
