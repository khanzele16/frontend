export const getMovieRating = (rating: number) => {
  if (rating > 7) {
    return "#3bb33b";
  } else if (rating > 5) {
    return "#777";
  } else {
    return "#ff0000";
  }
};
