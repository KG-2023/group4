"use clients";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const API_Key = "AIzaSyBmSzzqDIrG3iLBTGs7tyZC4sVq4VJrWJY";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

const GoogleMapComponent = () => {
  return (
    <div className="w-full h-[400px]">
      <LoadScript googleMapsApiKey={API_Key}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;
