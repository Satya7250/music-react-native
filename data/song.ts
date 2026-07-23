export interface Song {
  id: string;
  title: string;
  artist: string;
  file: any;
}

export const songs: Song[] = [
  {
    id: "1",
    title: "Song One",
    artist: "Local Track",
    file: require("../assets/song/song1.mp3"),
  },
  {
    id: "2",
    title: "Song Two",
    artist: "Synth Melodies",
    file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: "3",
    title: "Song Three",
    artist: "Piano Chill",
    file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
];