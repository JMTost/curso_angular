interface AudioPlayer {
    audioVolume : number;
    songDuration : number;
    song : string;
    details : Details;
    
}

interface Details {
    author : string,
    year : number
}

const audioPlayer : AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "mess",
    details: {
        author : 'Ed Sheeran',
        year : 2015
    }
};

// const song = 'another example';

// const {song:anotherSong, songDuration:duration} = audioPlayer;
// const {author} = audioPlayer.details;

// console.log(`Song: ${anotherSong}`);
// console.log(`Duration: ${duration}`);
// console.log(`author: ${author}`);


const dbz : string[] = ['goku', 'vegeta'];

// const trunks = dbz[3] || 'personaje no encontrado';

// console.log(trunks);

const [p1, p2, trunks = 'Not found'] = dbz;

console.log(trunks);



export {};