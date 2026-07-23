import { View } from "react-native";
import { router } from "expo-router";
import SongCard from "./songCard";
import { songs } from "@/data/song";

export default function SongList() {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      {songs.map((song, index) => (
        <SongCard
          key={song.id}
          title={song.title}
          onPress={() =>
            router.push({
              pathname: "/player",
              params: {
                index: index.toString(),
              },
            })
          }
        />
      ))}
    </View>
  );
}