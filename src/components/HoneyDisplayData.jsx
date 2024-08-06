import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export const HoneyDisplayData = [
  {
    id: '1',
    name: 'Coorg',
    image: 'https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    extraImages: [
     'https://images.pexels.com/photos/1065753/pexels-photo-1065753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/13691356/pexels-photo-13691356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/13828620/pexels-photo-13828620.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    videos: [
     'https://videos.pexels.com/video-files/4260171/4260171-sd_640_360_30fps.mp4','https://videos.pexels.com/video-files/2355570/2355570-sd_640_360_24fps.mp4'
    ],
    schedule: [
      { day: 1, description: 'Arrival, Local Sightseeing, Jagatsukh' },
      { day: 2, description: 'Visit Solang Valley, Old Manali, Rohtang La' },
      { day: 3, description: 'Friendship Peak, Beas River, River Rafting' },
      { day: 4, description: 'Van Vihar National Park, Mall Road Market, Departure' },
    ],
    Rating: (
      <>
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarHalfIcon sx={{ color: 'gold' }} />
        <StarBorderIcon sx={{ color: 'gold' }} />
      </>
    ),
    price: 10000
  },
  {
    id: '2',
    name: 'Ooty',
    image: 'https://images.pexels.com/photos/4946444/pexels-photo-4946444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    extraImages: [
      'https://media.istockphoto.com/id/537064629/photo/tea-plantations-around-the-emerald-lake-in-ooty.jpg?b=1&s=612x612&w=0&k=20&c=VMSkDXm5FQpgpJ-gxWXGWNOQ9O_NRuyvjEsYh6zNm50=',
      'https://media.istockphoto.com/id/172880618/photo/railway-station-in-ooty.jpg?b=1&s=612x612&w=0&k=20&c=BNxzMFo_qdCypQtWJICTQJel6pq8_xk6XQXhjNaFVUs=',
      'https://media.istockphoto.com/id/1335876450/photo/29th-mar-2016-ootty-tamil-nadu-india-ooty-boat-house-entry-point-with-tourists-waiting-for-a.jpg?b=1&s=612x612&w=0&k=20&c=cCzQ4g1OZFb__N4ylBgGfy3HSMteKxlKwbrFdtjPETI=',
      
      
    ],
    videos: [
      'https://videos.pexels.com/video-files/4231734/4231734-sd_640_360_24fps.mp4','https://videos.pexels.com/video-files/5955965/5955965-sd_640_360_30fps.mp4'
    ],
    Rating: (
      <>
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarBorderIcon sx={{ color: 'gold' }} />
      </>
    ), schedule: [
      { day: 1, description: 'Arrival , Local Sightseeing, Pine Forest, Vattakanal Waterfalls ' },
      { day: 2, description: 'Silent Valley View Point, Kukkal Caves, Solar Physical Observatory' },
      { day: 3, description: 'Dolphin Nose, Pillar Rocks, Guna Cave' },
      { day: 4, description: 'Poombarai Village View, Kodaikanal Lake, Departure' },
    ],
    price: 67000
  },
  {
    id: '3',
    name: 'Bali',
    image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=600',
    extraImages: [
      'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2707708/pexels-photo-2707708.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/5374152/pexels-photo-5374152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
     
    ],
    videos: [
      'https://videos.pexels.com/video-files/5049371/5049371-sd_640_360_24fps.mp4','https://videos.pexels.com/video-files/1898435/1898435-sd_640_360_25fps.mp4'
    ], schedule: [
      { day: 1, description: 'Arrival , Local Sightseeing, Chapora Fort' },
      { day: 2, description: 'Baga Beach, Scuba Diving, Cruise, ' },
      { day: 3, description: 'Fontainhas and Sao Tome,Anjuna Flea Market, Nightclub' },
      { day: 4, description: 'Colva Beach, Basilica of Bom Jesus, Departure' },
    ],
    Rating: (
      <>
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarHalfIcon sx={{ color: 'gold' }} />
        <StarBorderIcon sx={{ color: 'gold' }} />
      </>
    ),
    price: 55000
  },
  {
    id: '4',
    name: 'Delhi',
    image: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    extraImages: [
      'https://images.pexels.com/photos/2989625/pexels-photo-2989625.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1542620/pexels-photo-1542620.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    videos: [
      'https://videos.pexels.com/video-files/3616039/3616039-sd_640_360_30fps.mp4',
      'https://videos.pexels.com/video-files/6161098/6161098-sd_640_360_30fps.mp4',

    ],
    Rating: (
      <>
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarHalfIcon sx={{ color: 'gold' }} />
        <StarBorderIcon sx={{ color: 'gold' }} />
      </>
    ), schedule: [
      { day: 1, description: 'Arrival, Varkala Cliff, Darjeeling Cafe' },
      { day: 2, description: 'Varkala Beach, Mangrove Forest Kayaking, Ponnumthuruthu Island' },
      { day: 3, description: 'Anjengo Fort, Kappil Lake, Varkala Lighthouse' },
      { day: 4, description: 'Jatayu Earth Center, Trekking, Archery, Departure' },
    ],
    price: 55000
  },
  {
    id: '5',
    name: 'Rome',
    image: 'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    extraImages: [
      'https://images.pexels.com/photos/227517/pexels-photo-227517.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/1797158/pexels-photo-1797158.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/753639/pexels-photo-753639.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    videos: [
      'https://videos.pexels.com/video-files/5912505/5912505-sd_640_360_30fps.mp4','https://videos.pexels.com/video-files/5913395/5913395-sd_640_360_30fps.mp4'
    ], schedule: [
      { day: 1, description: 'Arrival , Check-in, Local Sightseeing, Moulin Rouge'  },
      { day: 2, description: 'Place De La Concorde, Parc Asterix' },
      { day: 3, description: 'Disneyland, Eiffel Tower, ' },
      { day: 4, description: 'Paris Zoological Park, Latin Quarter' },
      { day: 5, description: 'Arc De Triomphe, Aquaboulevard Paris, Departure' },
    ],
    Rating: (
      <>
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarHalfIcon sx={{ color: 'gold' }} />
        <StarBorderIcon sx={{ color: 'gold' }} />
      </>
    ),
    price: 55000
  },
  {
    id: '6',
    name: 'US',
    image: 'https://images.pexels.com/photos/2908031/pexels-photo-2908031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    extraImages: [
      'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/37646/new-york-skyline-new-york-city-city-37646.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/722014/pexels-photo-722014.jpeg?auto=compress&cs=tinysrgb&w=600'
      
    ], schedule: [
      { day: 1, description: 'Arrival, Check-in, Local Sightseeing, Dubai Museum' },
      { day: 2, description: 'Burj Khalifa,Dubai Frame,Dubai Mall' },
      { day: 3, description: 'Burj Al Arab,,Marina Dhow Cruise' },  
      { day: 4, description: 'Atlantis Aquaventure Waterpark,Ferrari World Yas Island, ', },
      { day: 5, description: 'Dessert Safari,Camel Ride,Belly Dance Show ' },
      { day: 6, description: 'Ski Dubai,The Dubai Fountain, Departure' },
    ],
    videos: [
      'https://videos.pexels.com/video-files/11960647/11960647-sd_640_360_24fps.mp4',
      'https://videos.pexels.com/video-files/3578881/3578881-sd_640_360_30fps.mp4'
    ],
    Rating: (
      <>
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarRateIcon sx={{ color: 'gold' }} />
        <StarHalfIcon sx={{ color: 'gold' }} />
        <StarBorderIcon sx={{ color: 'gold' }} />
      </>
    ),
    price: 55000
  }
];

