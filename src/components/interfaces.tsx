// {
//     "title": "Beyond Earth",
//     "thumbnail": {
//       "trending": {
//         "small": "./assets/thumbnails/beyond-earth/trending/small.jpg",
//         "large": "./assets/thumbnails/beyond-earth/trending/large.jpg"
//       },
//       "regular": {
//         "small": "./assets/thumbnails/beyond-earth/regular/small.jpg",
//         "medium": "./assets/thumbnails/beyond-earth/regular/medium.jpg",
//         "large": "./assets/thumbnails/beyond-earth/regular/large.jpg"
//       }
//     },
//     "year": 2019,
//     "category": "Movie",
//     "rating": "PG",
//     "isBookmarked": false,
//     "isTrending": true
// }

interface TrendImages {
  small: string;
  large: string;
}

interface RegularImages {
  small: string;
  medium: string;
  large: string;
}

interface Thumbnail {
  trending?: TrendImages;
  regular: RegularImages;
}

export interface MediaInfo {
  title: string;
  thumbnail: Thumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}
