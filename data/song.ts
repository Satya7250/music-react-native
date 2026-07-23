export interface Song {
  id: string;
  title: string;
  artist: string;
  file: any;
}

export const songs: Song[] = [
  {
    id: "1",
    title: "Hare Krishna",
    artist: "jubil notial",
    file: require("../assets/song/song1.mp3"),
  },
  {
    id: "2",
    title: "Ijazat",
    artist: "arijit singh",
    file: require("../assets/song/song2.mp3"),
  },
  {
    id: "3",
    title: "Wajah tum ho",
    artist: "zareen khan",
    file: require("../assets/song/song3.mp3"),
  },
  {
    id: "4",
    title: "Ghara Hua",
    artist: "Arijit Singh",
    file: require("../assets/song/song4.mp3"),
  },
  {
    id: "5",
    title: "tum ho to",
    artist: "Unknown",
    file: require("../assets/song/song5.mp3"),
  },
  {
    id: "6",
    title: "finding her",
    artist: "Kushagra ",
    file: require("../assets/song/song6.mp3"),
  },
];