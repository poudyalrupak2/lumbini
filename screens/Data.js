// myUsers.map(item => {
//   const container = {};

//   container[item.name] = item.likes;
//   container.age = item.name.length * 10;

//   return container;
// })
// const inventoryDatas =
//   fetch('http://202.45.146.174/Lumbini/api/Inventory')
//     .then(response => response.json())
//     .then(responseJsonFromServer => {
//       this.setState({
//         isLoading: false,
//         dataSource: responseJsonFromServer,
//       });
//     })
//     .catch(error => {
//       console.error(error);
//     });
  

// export const locations =inventoryDatas.map(item => {
//       const container = {};
    
//       container.title = item.title;
//       container.latitude= item.latitude;
//       container.longitude= item.longitude;
//       container.markerImage= 'https://i.ibb.co/2PwKJWc/UA-Studios-2.png';
//       container.weight= 13;
    
//       return container;
//     });

  export const locations = [
 {
    title: 'Lumbini',
    latitude: 27.473614,
    longitude: 83.275678,
    markerImage: 'https://i.ibb.co/2PwKJWc/UA-Studios-2.png',
    weight: 13,
  },
  {
    title: 'Lumbini',
    latitude: 27.478827, 
    longitude:83.276419,
    markerImage: 'https://i.ibb.co/2PwKJWc/UA-Studios-2.png',
    weight: 13,
  },
  {
    title: 'Lumbini',
    latitude: 27.487357, 
    longitude: 83.272291,
    markerImage: 'https://i.ibb.co/2PwKJWc/UA-Studios-2.png',
    weight: 13,
  },
  {
    title: 'Lumbini',
    latitude: 27.486232, 
    longitude: 83.277461,
    markerImage: 'https://i.ibb.co/2PwKJWc/UA-Studios-2.png',
    weight: 13,
  },
  {
    title: 'Lumbini',
    latitude: 27.463976, 
    longitude: 83.269157,
    markerImage: 'https://i.ibb.co/2PwKJWc/UA-Studios-2.png',
    weight: 13,
  },
  {
    title: 'Lumbini',
    latitude: 27.504675, 
    longitude:83.282067,
    markerImage: 'https://i.ibb.co/2PwKJWc/UA-Studios-2.png',
    weight: 13,
  },
  {
    title: 'Lumbini',
    latitude: 27.494402, 
    longitude: 83.281449,
    markerImage: 'https://i.ibb.co/2PwKJWc/UA-Studios-2.png',
    weight: 13
  },
];

// export const newArray= locations.map(item => {
//     const container = {};
  
//     container.title = item.title;
//     container.note= item.title;
  
//     return container;
//   })



// 27.473614, 83.275678;
// 27.478827, 83.276419;
// 27.487357, 83.272291;
// 27.486232, 83.277461;
// 27.463976, 83.269157;
// 27.504675, 83.282067;
// 27.494402, 83.281449;
