import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoJS = ({ options, onReady }) => {
  const playerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.classList.add("vjs-big-play-centered", "vjs-yt-skin");
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        onReady && onReady(player);
      }));
    }
  }, [options, onReady]);

  useEffect(() => {
    const player = playerRef.current;
    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player style={{ width: "100%", borderRadius: "12px", overflow: "hidden" }}>
      <style>{`
        .vjs-yt-skin {
          font-family: 'YouTube Sans', 'Roboto', sans-serif;
          border-radius: 12px;
          overflow: hidden;
        }

        /* Big Play Button */
        .vjs-yt-skin .vjs-big-play-button {
          width: 68px;
          height: 48px;
          line-height: 48px;
          font-size: 22px;
          border-radius: 4px;
          background-color: rgba(255, 0, 0, 0.9);
          border: none;
          transition: background-color 0.15s ease, transform 0.1s ease;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          margin: 0;
        }

        .vjs-yt-skin:hover .vjs-big-play-button {
          background-color: #ff0000;
          transform: translate(-50%, -50%) scale(1.05);
        }

        .vjs-yt-skin .vjs-big-play-button .vjs-icon-placeholder::before {
          font-size: 28px;
          line-height: 48px;
        }

        /* Control Bar */
        .vjs-yt-skin .vjs-control-bar {
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
          height: 48px;
          padding: 0 8px;
          align-items: center;
          display: flex;
        }

        /* Progress Bar */
        .vjs-yt-skin .vjs-progress-control {
          position: absolute;
          top: -14px;
          left: 0;
          right: 0;
          width: 100%;
          height: 14px;
          padding: 0;
        }

        .vjs-yt-skin .vjs-progress-holder {
          height: 3px;
          margin: 0;
          transition: height 0.1s ease;
          cursor: pointer;
        }

        .vjs-yt-skin .vjs-progress-control:hover .vjs-progress-holder {
          height: 5px;
        }

        .vjs-yt-skin .vjs-play-progress {
          background-color: #ff0000;
        }

        .vjs-yt-skin .vjs-play-progress::before {
          font-size: 14px;
          top: -5px;
          color: #ff0000;
          opacity: 0;
          transition: opacity 0.1s ease;
        }

        .vjs-yt-skin .vjs-progress-control:hover .vjs-play-progress::before {
          opacity: 1;
        }

        .vjs-yt-skin .vjs-slider {
          background-color: rgba(255, 255, 255, 0.25);
        }

        .vjs-yt-skin .vjs-load-progress {
          background: rgba(255, 255, 255, 0.4);
        }

        /* Volume Panel */
        .vjs-yt-skin .vjs-volume-panel {
          display: flex;
          align-items: center;
        }

        .vjs-yt-skin .vjs-volume-bar {
          background: rgba(255, 255, 255, 0.25);
        }

        .vjs-yt-skin .vjs-volume-level {
          background: #fff;
        }

        /* Time display */
        .vjs-yt-skin .vjs-time-control {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.3px;
          padding: 0 4px;
          min-width: unset;
        }

        .vjs-yt-skin .vjs-time-divider {
          padding: 0 2px;
          min-width: unset;
        }

        /* Buttons */
        .vjs-yt-skin .vjs-button > .vjs-icon-placeholder::before {
          font-size: 20px;
          line-height: 48px;
        }

        /* Playback rate */
        .vjs-yt-skin .vjs-playback-rate .vjs-playback-rate-value {
          font-size: 13px;
          font-weight: 700;
          line-height: 48px;
        }

        /* Settings / Menu */
        .vjs-yt-skin .vjs-menu-content {
          background-color: rgba(28, 28, 28, 0.95);
          border-radius: 4px;
          font-size: 13px;
        }

        .vjs-yt-skin .vjs-menu-item:hover,
        .vjs-yt-skin .vjs-menu-item.vjs-selected {
          background-color: rgba(255, 255, 255, 0.1);
        }

        /* Fullscreen */
        .vjs-yt-skin.vjs-fullscreen {
          border-radius: 0;
        }

        /* Loading spinner */
        .vjs-yt-skin .vjs-loading-spinner {
          border-top-color: #ff0000;
          border-left-color: transparent;
          border-right-color: transparent;
          border-bottom-color: transparent;
        }
      `}</style>
      <div ref={videoRef} />
    </div>
  );
};

export default VideoJS;