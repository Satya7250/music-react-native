import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, GestureResponderEvent } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, router } from "expo-router";
import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";
import { songs } from "@/data/song";

export default function Player() {
  const { index } = useLocalSearchParams<{ index?: string }>();
  const initialParsed = index ? parseInt(index, 10) : 0;
  const validInitialIndex = isNaN(initialParsed)
    ? 0
    : Math.max(0, Math.min(initialParsed, songs.length - 1));

  const [songIndex, setSongIndex] = useState(validInitialIndex);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    if (index !== undefined) {
      const parsed = parseInt(index, 10);
      if (!isNaN(parsed) && parsed >= 0 && parsed < songs.length) {
        setSongIndex(parsed);
      }
    }
  }, [index]);

  const currentSong = songs[songIndex] || songs[0];

  const audioSource =
    typeof currentSong.file === "string" ? { uri: currentSong.file } : currentSong.file;
  const player = useAudioPlayer(audioSource);
  const status = useAudioPlayerStatus(player);

  useEffect(() => {
    player.play();
  }, [player]);

  const togglePlayPause = () => {
    if (status.playing) {
      player.pause();
    } else {
      player.play();
    }
  };

  const handleNext = () => {
    const nextIndex = (songIndex + 1) % songs.length;
    setSongIndex(nextIndex);
    router.setParams({ index: nextIndex.toString() });
  };

  const handlePrev = () => {
    const prevIndex = (songIndex - 1 + songs.length) % songs.length;
    setSongIndex(prevIndex);
    router.setParams({ index: prevIndex.toString() });
  };

  const handleBarPress = (e: GestureResponderEvent) => {
    if (!barWidth || !status?.duration || status.duration <= 0) return;
    const touchX = e.nativeEvent.locationX;
    const percentage = Math.max(0, Math.min(1, touchX / barWidth));
    const seekTime = percentage * status.duration;
    player.seekTo(seekTime);
  };

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const progressPercent =
    status?.duration && status.duration > 0
      ? Math.min(100, Math.max(0, (status.currentTime / status.duration) * 100))
      : 0;

  return (
    <View style={styles.container}>
      {/* Album Art */}
      <Image
        source={require("../assets/images/mussic.png")}
        style={styles.albumArt}
      />

      {/* Song Details */}
      <Text style={styles.songTitle}>{currentSong.title}</Text>
      <Text style={styles.artist}>{currentSong.artist}</Text>

      {/* Interactive Progress Bar */}
      <Pressable
        style={styles.progressTouchContainer}
        onLayout={(e) => setBarWidth(e.nativeEvent.layout.width)}
        onPress={handleBarPress}
      >
        <View style={styles.progressContainer}>
          <View style={[styles.progress, { width: `${progressPercent}%` }]} />
          <View style={[styles.progressThumb, { left: `${progressPercent}%` }]} />
        </View>
      </Pressable>

      <View style={styles.timeContainer}>
        <Text style={styles.time}>{formatTime(status.currentTime)}</Text>
        <Text style={styles.time}>{formatTime(status.duration)}</Text>
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        <Pressable onPress={handlePrev}>
          <Ionicons name="play-skip-back" size={36} color="white" />
        </Pressable>

        <Pressable style={styles.playButton} onPress={togglePlayPause}>
          <Ionicons
            name={status.playing ? "pause" : "play"}
            size={40}
            color="black"
          />
        </Pressable>

        <Pressable onPress={handleNext}>
          <Ionicons name="play-skip-forward" size={36} color="white" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  albumArt: {
    width: 250,
    height: 250,
    borderRadius: 20,
    marginBottom: 30,
  },

  songTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  artist: {
    color: "#aaa",
    fontSize: 16,
    marginTop: 8,
    marginBottom: 30,
  },

  progressTouchContainer: {
    width: "100%",
    paddingVertical: 12,
    justifyContent: "center",
  },

  progressContainer: {
    width: "100%",
    height: 6,
    backgroundColor: "#333",
    borderRadius: 3,
    position: "relative",
  },

  progress: {
    height: "100%",
    backgroundColor: "#A27E65",
    borderRadius: 3,
  },

  progressThumb: {
    position: "absolute",
    top: -4,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#fff",
    marginLeft: -7,
  },

  timeContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 40,
  },

  time: {
    color: "#aaa",
    fontSize: 14,
  },

  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },

  playButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#A27E65",
    justifyContent: "center",
    alignItems: "center",
  },
});