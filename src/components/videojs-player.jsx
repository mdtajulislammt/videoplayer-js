import { useRef } from "react";
import VideoJS from "./videojs";

const VideoJSPlayer = () => {
  const playerRef = useRef(null);

  // Video.js configuration with HLS for quality switching
  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    autoplay: false,
    muted: true,
    playbackRates: [0.25, 0.5, 1, 1.5, 2],
    sources: [
      {
        // Using ImageKit's HLS manifest URL
        src: "https://ik.imagekit.io/lr7i8dgla/Pharmacy%20POS%20Announcement%20%20%20_%E0%A6%86%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A6%A6%E0%A7%8B%E0%A6%95%E0%A6%BE%E0%A6%A8%20_aamardokan.mp4",
        type: "video/mp4",
      },
    ],
    poster:
      "https://ik.imagekit.io/lr7i8dgla/Screenshot_6.png",

      // tracks 
    tracks: [
      {
        kind: "chapters",
        src: "/chapters.vtt",
        srclang: "en",
        label: "Chapters",
        default: true,
      },
      // {
      //   kind: "captions",
      //   src: "/english.vtt",
      //   srclang: "en",
      //   label: "English",
      //   default: true,
      // },
      // {
      //   kind: "captions",
      //   src: "/hindi.vtt",
      //   srclang: "hi",
      //   label: "Hindi",
      //   default: true,
      // },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // Log when player events occur
    player.on("waiting", () => {
      console.log("Player is waiting");
    });

    player.on("loadedmetadata", () => {
      console.log("Video metadata loaded");
    });

    player.on("dispose", () => {
      console.log("Player will dispose");
    });
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <h2>Video.js Player with Quality Selection</h2>

      <div style={{ maxWidth: "800px" }}>
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      </div>
    </div>
  );
};

export default VideoJSPlayer;
