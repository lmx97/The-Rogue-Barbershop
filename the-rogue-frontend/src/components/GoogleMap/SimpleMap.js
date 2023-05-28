import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import GoogleMapReact from 'google-map-react';
// import 'google-map-react/dist/index.css'

import LOCATION_CENTER from '../../const/location_center';
import Marker from './Marker';
// import { MdLocationOn } from "react-icons/md";
// import Marker from './components/Marker';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

const SimpleMap = () => {
  const [places, setPlaces] = useState([]);

  const fetchPlaces = async () => {
    fetch('places.json')
      .then((response) => response.json())
      .then((data) => setPlaces(data.results));
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  if (!places || places.length === 0) {
    return null;
  }

  return (
    <Wrapper>
      <GoogleMapReact defaultZoom={15} defaultCenter={LOCATION_CENTER}>
        {places.map((place) => (
          <Marker
            key={place.id}
            text={place.name}
            lat={place.geometry.location.lat}
            lng={place.geometry.location.lng}
          />
        ))}
      </GoogleMapReact>
    </Wrapper>
  );
};

export default SimpleMap;


/*
import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 1.54,
      lng: 103.63
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBRRnYGogQbjYVmC4M3lX_2sQC5rILUR0I" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={1.5424774967946429}
          lng={103.63361407671213}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
*/
/*
const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {lat: 1.54, lng: 103.63},
    zoom: 11
  };

  render() {
    return (
       <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent 
          lat={1.5424774967946429} 
          lng={103.63361407671213} 
          text={'Kreyser Avrora'} 
        />
      </GoogleMapReact>
    );
  }
}

export default SimpleMap;
*/