
const BasicVideoPlayer = () => {
  return (
    <div style={{ margin: "20px" }}>
      <h2>Basic HTML5 Video Player</h2>

      <video
        src="https://ik.imagekit.io/lr7i8dgla/Pharmacy%20POS%20Announcement%20%20%20_%E0%A6%86%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A6%A6%E0%A7%8B%E0%A6%95%E0%A6%BE%E0%A6%A8%20_aamardokan.mp4"
        // src="https://ik.imagekit.io/roadsidecoder/yt/example.mp4?tr=l-subtitles,i-yt/english.srt,l-end"
        width="800"
        height="450"
        controls
        poster="https://ik.imagekit.io/lr7i8dgla/Screenshot_6.png"
      >
        {/* <track
          kind="subtitles"
          src="/english.vtt"
          srcLang="en"
          label="English"
          default
        />

        <track kind="subtitles" src="/hindi.vtt" srcLang="hi" label="हिंदी" /> */}
      </video>
    </div>
  );
};

export default BasicVideoPlayer;
