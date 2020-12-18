import React from 'react'
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import {Descriptions} from 'antd';
import Geocode from 'react-geocode';
Geocode.setApiKey("AIzaSyBl6YqMcNbYV6vR-kFmzdDMuMxIE_NoiUw");


class MapContainer extends React.Component {
  state = {
    address :'',
    city:'',
    area:'',
    state:'',
    zoom:15,
    height:400,
    mapPosition:{
      lat:0,
      lng:0,
    },
    markerPosition:{
      lat:0,
      lng:0
    }
  }
  getCity = (addressArray) => {
        let city = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
                city = addressArray[i].long_name;
                return city;
            }
        }
    };

    getArea = (addressArray) => {
        let area = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0]) {
                for (let j = 0; j < addressArray[i].types.length; j++) {
                    if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
                        area = addressArray[i].long_name;
                        return area;
                    }
                }
            }
        }
    };

    getState = (addressArray) => {
        let state = '';
        for (let i = 0; i < addressArray.length; i++) {
            for (let i = 0; i < addressArray.length; i++) {
                if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
                    state = addressArray[i].long_name;
                    return state;
                }
            }
        }
    };
  onMarkerDragEnd = (event) =>{
    let newLat = event.latLng.lat();
    let newLng = event.latLng.lng();
    Geocode.fromLatLng(newLat, newLng).then(response =>{
      console.log('response', response);
       const address = response.results[0].formatted_address,
            addressArray = response.results[0].address_components,
            city = this.getCity(addressArray),
            area = this.getArea(addressArray),
            state = this.getState(addressArray);
            this.setState({
               address : (address) ? address : '',
                city:(city) ? city : '',
                area:(area) ? area : '',
                state:(state) ? state : '',
                mapPosition:{
                  lat:newLat,
                  lng:newLng,
                },
                markerPosition:{
                  lat:newLat,
                  lng:newLng,
                }
            })
    });
    
  }
   render(){
     const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng}}
      >
        <Marker
          draggable={true}
          onDragEnd={this.onMarkerDragEnd}
          position={{  lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng}}
        >
          <InfoWindow>
            <h1>hello</h1>
          </InfoWindow>
        </Marker>
      </GoogleMap>
  ));
     return(
       <>
       <h1>Google Map Basic</h1>
      <Descriptions bordered>
     <Descriptions.Item label="City">{this.state.city}</Descriptions.Item>
        <Descriptions.Item label="Area">{this.state.area}</Descriptions.Item>
        <Descriptions.Item label="State">{this.state.state}</Descriptions.Item>
        <Descriptions.Item label="Address">{this.state.address}</Descriptions.Item>
      </Descriptions>



      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBl6YqMcNbYV6vR-kFmzdDMuMxIE_NoiUw&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      </>
     )
   }
}
export default MapContainer;