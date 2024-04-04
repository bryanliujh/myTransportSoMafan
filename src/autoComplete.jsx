import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function AutoCompleteSearchInput() {
  const onMouseEnter = async () => {};
  return (
    <Stack spacing={2} sx={{ flex: 1 }}>
      <Autocomplete
        sx={{
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: "0px",
          },
        }}
        style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "white",
          marginRight: 16,
          marginLeft: 0,
          flexGrow: 1,
          marginTop: 8,
          marginBottom: 8,
        }}
        freeSolo
        id="SearchAutoComplete"
        disableClearable
        options={searchAutoCompleteDB}
        onMouseEnter={onMouseEnter}
        renderInput={(params) => (
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Stack>
  );
}

const searchAutoCompleteDB = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Godfather: Part II",
  "The Dark Knight",
  "12 Angry Men",
  "Schindler's List",
  "Pulp Fiction",
  "The Lord of the Rings: The Return of the King",
  "The Good, the Bad and the Ugly",
  "Fight Club",
  "The Lord of the Rings: The Fellowship of the Ring",
  "Star Wars: Episode V - The Empire Strikes Back",
  "Forrest Gump",
  "Inception",
  "The Lord of the Rings: The Two Towers",
  "One Flew Over the Cuckoo's Nest",
  "Goodfellas",
  "The Matrix",
  "Seven Samurai",
  "Star Wars: Episode IV - A New Hope",
  "City of God",
  "Se7en",
  "The Silence of the Lambs",
  "It's a Wonderful Life",
  "Life Is Beautiful",
  "The Usual Suspects",
  "Léon: The Professional",
  "Spirited Away",
  "Saving Private Ryan",
  "Once Upon a Time in the West",
  "American History X",
  "Interstellar",
  "Casablanca",
  "City Lights",
  "Psycho",
  "The Green Mile",
  "The Intouchables",
  "Modern Times",
  "Raiders of the Lost Ark",
  "Rear Window",
  "The Pianist",
  "The Departed",
  "Terminator 2: Judgment Day",
  "Back to the Future",
  "Whiplash",
  "Gladiator",
  "Memento",
  "The Prestige",
  "The Lion King",
  "Apocalypse Now",
  "Alien",
  "Sunset Boulevard",
  "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
  "The Great Dictator",
  "Cinema Paradiso",
  "The Lives of Others",
  "Grave of the Fireflies",
  "Paths of Glory",
  "Django Unchained",
  "The Shining",
  "WALL·E",
  "American Beauty",
  "The Dark Knight Rises",
  "Princess Mononoke",
  "Aliens",
  "Oldboy",
  "Once Upon a Time in America",
  "Witness for the Prosecution",
  "Das Boot",
  "Citizen Kane",
  "North by Northwest",
  "Vertigo",
  "Star Wars: Episode VI - Return of the Jedi",
  "Reservoir Dogs",
  "Braveheart",
  "M",
  "Requiem for a Dream",
  "Amélie",
  "A Clockwork Orange",
  "Like Stars on Earth",
  "Taxi Driver",
  "Lawrence of Arabia",
  "Double Indemnity",
  "Eternal Sunshine of the Spotless Mind",
  "Amadeus",
  "To Kill a Mockingbird",
  "Toy Story 3",
  "Logan",
  "Full Metal Jacket",
  "Dangal",
  "The Sting",
  "2001: A Space Odyssey",
  "Singin' in the Rain",
  "Toy Story",
  "Bicycle Thieves",
  "The Kid",
  "Inglourious Basterds",
  "Snatch",
  "3 Idiots",
  "Monty Python and the Holy Grail",
];