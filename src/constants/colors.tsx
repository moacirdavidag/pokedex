export const colors = {
    uranianblue: "#a8e0ffff",
    lapislazuli: "#33658aff",
    charcoal: "#2f4858ff",
    hunyadiyellow: "#f6ae2dff",
    orangepantone: "#f26419ff",
    mint: "#62A87C",
    lightgreen: "#7EE081"
}

type PokemonTypeColors = {
    [key: string]: {
        primary: string;
        secondary: string;
    };
};

const pokemonTypeColors : PokemonTypeColors = {
    normal: {
        primary: "#A8A878",
        secondary: "#8A8A5C",
    },
    fire: {
        primary: "#F08030",
        secondary: "#D04020",
    },
    water: {
        primary: "#6890F0",
        secondary: "#386CE8",
    },
    electric: {
        primary: "#F8D030",
        secondary: "#E0A818",
    },
    grass: {
        primary: "#78C850",
        secondary: "#4E8234",
    },
    ice: {
        primary: "#98D8D8",
        secondary: "#68A090",
    },
    fighting: {
        primary: "#C03028",
        secondary: "#7D1F1A",
    },
    poison: {
        primary: "#A040A0",
        secondary: "#682A68",
    },
    ground: {
        primary: "#E0C068",
        secondary: "#927D44",
    },
    flying: {
        primary: "#A890F0",
        secondary: "#6D5E9C",
    },
    psychic: {
        primary: "#F85888",
        secondary: "#A13959",
    },
    bug: {
        primary: "#A8B820",
        secondary: "#808E24",
    },
    rock: {
        primary: "#B8A038",
        secondary: "#786824",
    },
    ghost: {
        primary: "#705898",
        secondary: "#493963",
    },
    dragon: {
        primary: "#7038F8",
        secondary: "#4924A1",
    },
    dark: {
        primary: "#705848",
        secondary: "#49392F",
    },
    steel: {
        primary: "#B8B8D0",
        secondary: "#787887",
    },
    fairy: {
        primary: "#EE99AC",
        secondary: "#A13A52",
    },
};

export default pokemonTypeColors;




