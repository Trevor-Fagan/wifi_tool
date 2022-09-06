import React from 'react'
import DraggableItem from '../DraggableItem/DraggableItem';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div id='sidebar_container'>
        <div id='sidebar_customize'>
          <h2>Customize</h2>
        </div>

        <div id="sidebar_options">
          <p>Access Point Radius: <input id="number_selector" type="number" placeholder='10'></input></p>
          <p>Show WiFi Coverage <input id="wifi_checkbox" type='checkbox'></input></p>
        </div>

        <div id='sidebar_items'>
          <h3>Assets</h3>
          <DraggableItem />
          <DraggableItem />
          <DraggableItem />
        </div>
    </div>
  )
}

export default Sidebar