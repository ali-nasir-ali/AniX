export const titleCase = (str) =>
  str
    .split("")
    .map((char, idx) => (idx === 0 ? char.toUpperCase() : char.toLowerCase()))
    .join("");

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getDurationInHours = (duration) => {
  if (duration <= 60) {
    return `${duration} mins`;
  }

  const hours = Math.floor(duration / 60);
  const mins = duration - hours * 60;

  if (!mins) {
    return `${hours} ${hours > 1 ? "hours" : "hour"}`;
  }

  return `${hours} ${hours > 1 ? "hours" : "hour"}, ${mins} ${
    mins > 1 ? "mins" : "min"
  }`;
};

export const fetchFromScraper = (body) => {
  fetch(process.env.REACT_APP_SCRAPER, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

export const getFormat = (episodes) => {
  return episodes > 1 ? "TV" : "Movie";
};

// hover right side to the card
// for the items at the last column in a grid
// is there any better way to do this ???
export const rightHover = [
  5,
  10,
  15,
  20,
  25,
  30,
  35,
  40,
  45,
  50,
  55,
  60,
  65,
  70,
  75,
  80,
  85,
  90,
  95,
  100,
];
