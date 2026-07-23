import LibraryBackground from "@/components/library/library-background";
import Header from "@/components/library/Header";
import SongList from "@/components/library/songList";

export default function Library() {
  return (
    <LibraryBackground>
      <Header />
      <SongList />
    </LibraryBackground>
  );
}