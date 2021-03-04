// SpreadDestructuringExercise

// ONE A
const   mcuShows=[
    `The Falcon And The Winter Soldier`,
    `WandaVision`
]
console.log(mcuShows);

// ONE B
const   starWarsShows=[
    `The Mandalorian`,
    `The Clone Wars`
]
console.log(starWarsShows);

// ONE C
const   disneyPlusShows=[
    ...mcuShows, ...starWarsShows, `Muppets Now`
]

// ONE D
console.log(disneyPlusShows);

// TWO A
const   netflixMovies={
    action: `Extraction`,
    drama:  `The Irishman`
}
console.log(netflixMovies);

// TWO B
const   disneyPlusMovies={
    musical:    `Hamilton`,
    drama:      `Togo`
}
console.log(disneyPlusMovies);

// TWO C
const   streamingMovies={...disneyPlusMovies, ...netflixMovies, comedy: `Shazam!`}

// TWO D
console.log(streamingMovies);

// THREE A
const   disneyJunior=[
    `PJ Masks`,
    `Jake and the Neverland Pirates`
]

// THREE B
const [pj,jake]=disneyJunior;

// THREE C
console.log(pj,jake);

// FOUR A
const avengers={
    captainAmerica: `Steve Rogers`,
    theHulk:    `Bruce Banner`
}

// FOUR B
const {captainAmerica, theHulk}=avengers;

// FOUR C
console.log(captainAmerica,theHulk);

// FOUR D
const moreAvengers={
    blackWidow: `Natasha Romanoff`,
    hawkeye:    `Clint Barton`,
    ironMan:    `Tony Stark`
}

// FOUR E
const   {blackWidow:nat, ...others}=moreAvengers;

// FOUR F
console.log(nat,others);