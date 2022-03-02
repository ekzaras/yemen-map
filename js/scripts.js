$.getJSON('data/attackrows.json', function(attackRows) { //data from https://yemendataproject.org/
    console.log(attackRows)
    mapboxgl.accessToken = 'pk.eyJ1IjoiZWt6YXJhcyIsImEiOiJjbDA5MzVqbnkwMXR3M2ptbXVxaXB2ZWJzIn0.ClZNiyIzKfIMNPVtoyOx0A'

    var yemenCenter = [47.401285,15.885230]
    var map = new mapboxgl.Map({
      container: 'mapContainer', // HTML container id
      style: 'mapbox://styles/mapbox/dark-v9', // style URL
      center: yemenCenter, // starting position as [lng, lat]
      zoom: 5
    });


   map.on('load', () => {
    map.addSource('yemenregions', {
    type: 'geojson',
    // Use a URL for the value for the `data` property.
    data: './data/yemenregions.geojson'
  });
    // map.getSource('yemenregions').setData({
    //   "type": "FeatureCollection",
    //   "features": [{
    //     "type": "Feature",
    //     "properties": {""},
    //     "geometry": {
    //       "type": "MultiPolygon",
    //       "coordinates": [48.55986023,14.04513836]
    //     }
    //   }]
    // })
    map.addLayer({
      'id': 'yemen-region-fill-area', //administrative regional data from https://geodata.lib.utexas.edu/catalog/stanford-zh558jw1809
      'type': 'fill',
      'source': 'yemenregions',
      'paint': {
        'fill-color': 'white', // blue color fill
        'fill-opacity': 0.5,
      }
    })
    map.addLayer({
      'id': 'yemenregionsline',
      'type': 'line',
      'source': 'yemenregions', // reference the data source
      'paint': {
        'line-color': '#0080ff', // blue color fill
        'line-width': 0.5
      }
    })
  });

})

//     map.addLayer({
//       'id': 'yemen-region-fill-area',
//       'type': 'fill',
//       'source': 'yemenregions'
//       'paint': {
//         'fill-color': '#000', // blue color fill
//         'fill-opacity': 0.5
//       }
//     });
//   });
// })

   // Add a data source containing GeoJSON data.

  // map.addSource("type":"Feature","id":"YEM","properties":{"name":"Yemen"},"geometry":{"type":"Polygon","coordinates":[[[53.108573,16.651051],[52.385206,16.382411],[52.191729,15.938433],[52.168165,15.59742],[51.172515,15.17525],[49.574576,14.708767],[48.679231,14.003202],[48.238947,13.94809],[47.938914,14.007233],[47.354454,13.59222],[46.717076,13.399699],[45.877593,13.347764],[45.62505,13.290946],[45.406459,13.026905],[45.144356,12.953938],[44.989533,12.699587],[44.494576,12.721653],[44.175113,12.58595],[43.482959,12.6368],[43.222871,13.22095],[43.251448,13.767584],[43.087944,14.06263],[42.892245,14.802249],[42.604873,15.213335],[42.805015,15.261963],[42.702438,15.718886],[42.823671,15.911742],[42.779332,16.347891],[43.218375,16.66689],[43.115798,17.08844],[43.380794,17.579987],[43.791519,17.319977],[44.062613,17.410359],[45.216651,17.433329],[45.399999,17.333335],[46.366659,17.233315],[46.749994,17.283338],[47.000005,16.949999],[47.466695,17.116682],[48.183344,18.166669],[49.116672,18.616668],[52.00001,19.000003],[52.782184,17.349742],[53.108573,16.651051]]]}})


   // Add a new layer to visualize the polygon.

   // }
   // });
//    // // Add a black outline around the polygon.
//    map.addLayer({
//    'id': 'outline',
//    'type': 'line',
//    'source': 'yem',
//    'layout': {},
//    'paint': {
//    'line-color': '#000',
//    'line-width': 3
//    }
//    });
//    });
// popups for incidents
// attackRows.forEach(function(attackRow){
//   var popup = new mapboxgl.Popup({offset: 40})
//   .setHTML(`
//   <h3>${attackRow.date}</h3>
//   <p><b>Site:</b> ${attackRow.maincategory}
//   `);
//   new mapboxgl.Marker()
//       .setLngLat([attackRow.longitude, attackRow.latitude]) //right now dont have the longlats...
//       .setPopup(popup)
//       .addTo(map);
// })
//
//
// })
