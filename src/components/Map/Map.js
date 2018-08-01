import React, { Component } from 'react';
import './Map.css'
import NaverMap from 'react-naver-map'

class EventInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      if(typeof this.props.markers[0] === "undefined"){

      }
      else{
        console.log('map!---------',this.props.markers[0].lat);
      }

         const markerList = this.props.markers.map(
            ({text, lat, lng}) => (
                <NaverMap.Marker
                    // key={0}
                    // id={0} // unique marker id: required
                    lat={lat}
                    lng={lng}
                    // onClick={({id, event}) => {...}}  // id: given id, event: PointerEvent
                    // icon={{
                    //     url: markerPng,
                    //     size:{width:24,height:32},
                    //     scaledSize:{width:24,height:32},
                    //     anchor: {x:12, y:32}
                    // }}
                    // shape={{coords: [0,12, 12,0, 24,12, 12,32, 0,12], type: 'poly'}}  // click mask shape
                />
            )
        );
// 본관 lat:36.370517, lng : 127.361345
// initialPosition={{lat:36.369160, lng:127.362735}}
// initialBounds={{   // When you provide initialBounds, it will ignores initialPosition and initialZoom
//     south:36.3634766, west:127.3549002,
//     north:36.3764522, east:127.3704088
// }}

        return (
            <main className = "Map-template">
              <NaverMap
                  clientId = '5egEYGrThQZ6HQ_AR4H5'
                  style = {{width:'100%', height:'100%'}}
                  initialPosition={{lat:36.372396, lng:127.360379}}
                   initialZoom={10}
                   // initialBounds={{   // When you provide initialBounds, it will ignores initialPosition and initialZoom
                   //     south:36.363822, west:127.354244,
                   //     north:36.3764522, east:127.3704088}}
                  >
                  {/* // onInit={(map, naver) => {...}}  // map: naver map object, naver: window.naver object
                  // onBoundChange={(bounds) => {...}}  // bounds: naver.maps.LatLngBounds
                  // onMapClick={(event) => {...}}  // event: PointerEvent */}

                  {markerList}
              </NaverMap>
            </main>
        );
    }
}

export default EventInfo;
