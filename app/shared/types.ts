export interface Movie {
  id: string;
  name: string;
  description: string;
  year: number;
  ageRating: number;
  videos: {
    trailers: Array<{
      url: string;
    }>;
  };
  genres: Array<{
    name: string;
  }>;
  rating: {
    kp: number;
  };
  logo: {
    url: string;
  };
  poster: {
    url: string;
  };
  backdrop: {
    url: string;
  };
}
