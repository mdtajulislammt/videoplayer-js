import { useRef, useState } from "react";
import VideoJS from "./VideoJS";

const VideoJSPlayer = () => {
  const playerRef = useRef(null);
  const [liked, setLiked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);

  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    autoplay: false,
    muted: false,
    playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
    sources: [
      {
        src: "https://ik.imagekit.io/lr7i8dgla/Pharmacy%20POS%20Announcement%20%20%20_%E0%A6%86%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A6%A6%E0%A7%8B%E0%A6%95%E0%A6%BE%E0%A6%A8%20_aamardokan.mp4",
        type: "video/mp4",
      },
    ],
    poster: "https://ik.imagekit.io/lr7i8dgla/Screenshot_6.png",
  };

  const recommendedVideos = [
    {
      id: 1,
      title: "How to Scale your Pharmacy SaaS to 10,000 Users",
      author: "Tajul Islam",
      views: "10K views",
      time: "2 days ago",
      duration: "12:45",
      thumb: "https://ik.imagekit.io/lr7i8dgla/Screenshot_6.png",
    },
    {
      id: 2,
      title: "Mastering NestJS & Prisma — Full Course 2026",
      author: "Mindstack",
      views: "25K views",
      time: "1 week ago",
      duration: "45:10",
      thumb: "https://ik.imagekit.io/lr7i8dgla/Screenshot_6.png",
    },
    {
      id: 3,
      title: "Microservices Architecture in 2026 — Deep Dive",
      author: "Softvence Delta",
      views: "5.2K views",
      time: "5 hours ago",
      duration: "18:20",
      thumb: "https://ik.imagekit.io/lr7i8dgla/Screenshot_6.png",
    },
    {
      id: 4,
      title: "React Server Components — Everything You Need to Know",
      author: "Web Dev Simplified",
      views: "87K views",
      time: "3 days ago",
      duration: "22:05",
      thumb: "https://ik.imagekit.io/lr7i8dgla/Screenshot_6.png",
    },
    {
      id: 5,
      title: "Building a POS System from Scratch — Prisma + Next.js",
      author: "Softvence Delta",
      views: "14.3K views",
      time: "2 weeks ago",
      duration: "1:05:32",
      thumb: "https://ik.imagekit.io/lr7i8dgla/Screenshot_6.png",
    },
    {
      id: 6,
      title: "TypeScript Advanced Patterns Every Dev Should Know",
      author: "Matt Pocock",
      views: "112K views",
      time: "1 month ago",
      duration: "31:48",
      thumb: "https://ik.imagekit.io/lr7i8dgla/Screenshot_6.png",
    },
  ];

  return (
    <div className="yt-root">
      {/* Top Navigation */}
      <header className="yt-header">
        <div className="yt-header-left">
          <button className="yt-icon-btn" aria-label="Menu">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
              <rect width="18" height="2" rx="1" />
              <rect y="5" width="18" height="2" rx="1" />
              <rect y="10" width="18" height="2" rx="1" />
            </svg>
          </button>
          <div className="yt-logo">
            <svg height="20" viewBox="0 0 90 20" fill="none">
              <path
                d="M27.97 3.93A3.4 3.4 0 0 0 25.6 1.56C23.44 1 14.5 1 14.5 1S5.56 1 3.4 1.56A3.4 3.4 0 0 0 1.03 3.93C.5 6.1.5 10.5.5 10.5s0 4.4.53 6.57A3.4 3.4 0 0 0 3.4 19.44C5.56 20 14.5 20 14.5 20s8.94 0 11.1-.56a3.4 3.4 0 0 0 2.37-2.37C28.5 14.9 28.5 10.5 28.5 10.5s0-4.4-.53-6.57z"
                fill="#FF0000"
              />
              <path d="M11.75 14.5v-8l7.5 4-7.5 4z" fill="#fff" />
              <text x="32" y="15" fontFamily="'YouTube Sans',Roboto,sans-serif" fontSize="14" fontWeight="700" fill="currentColor" letterSpacing="-0.3">
                YouTube
              </text>
            </svg>
          </div>
        </div>

        <div className="yt-search-bar">
          <input type="text" placeholder="Search" className="yt-search-input" />
          <button className="yt-search-btn" aria-label="Search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          <button className="yt-icon-btn yt-mic-btn" aria-label="Voice search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect x="9" y="1" width="6" height="13" rx="3" />
              <path d="M5 11a7 7 0 0 0 14 0M12 20v3M8 23h8" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </button>
        </div>

        <div className="yt-header-right">
          <button className="yt-icon-btn" aria-label="Notifications">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2zm6-6V11a6 6 0 0 0-5-5.92V4a1 1 0 0 0-2 0v1.08A6 6 0 0 0 6 11v5l-2 2v1h16v-1l-2-2z" />
            </svg>
          </button>
          <div className="yt-avatar">SD</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="yt-main">
        {/* Left: Video + Info */}
        <div className="yt-primary">
          {/* Video Player */}
          <div className="yt-player-wrap">
            <VideoJS options={videoJsOptions} onReady={(p) => (playerRef.current = p)} />
          </div>

          {/* Title */}
          <h1 className="yt-title">Pharmacy POS Announcement | Next-Gen Cloud Inventory — আমারদোকান</h1>

          {/* Channel Row */}
          <div className="yt-channel-row">
            <div className="yt-channel-info">
              <div className="yt-channel-avatar">SD</div>
              <div className="yt-channel-text">
                <div className="yt-channel-name">Softvence Delta</div>
                <div className="yt-channel-subs">45.2K subscribers</div>
              </div>
              <button
                className={`yt-subscribe-btn ${subscribed ? "subscribed" : ""}`}
                onClick={() => setSubscribed(!subscribed)}
              >
                {subscribed ? (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 4 }}>
                      <path d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2zm6-6V11a6 6 0 0 0-5-5.92V4a1 1 0 0 0-2 0v1.08A6 6 0 0 0 6 11v5l-2 2v1h16v-1l-2-2z" />
                    </svg>
                    Subscribed
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>

            <div className="yt-action-row">
              <div className="yt-like-group">
                <button
                  className={`yt-action-pill left ${liked ? "active" : ""}`}
                  onClick={() => setLiked(!liked)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                    <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3m7-10v4a2 2 0 0 1-2 2H9l-2 5v1h1a2 2 0 0 0 2-2v-1h7a2 2 0 0 0 2-2l-1-6a2 2 0 0 0-2-2h-6z" />
                  </svg>
                  {liked ? "1,201" : "1.2K"}
                </button>
                <button className="yt-action-pill right">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: "scaleY(-1)" }}>
                    <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3m7-10v4a2 2 0 0 1-2 2H9l-2 5v1h1a2 2 0 0 0 2-2v-1h7a2 2 0 0 0 2-2l-1-6a2 2 0 0 0-2-2h-6z" />
                  </svg>
                </button>
              </div>

              <button className="yt-action-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                  <path d="M8.59 13.51 15.42 17.49M15.41 6.51 8.59 10.49" />
                </svg>
                Share
              </button>

              <button className="yt-action-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12l7-7 7 7" />
                </svg>
                Save
              </button>

              <button className="yt-action-btn yt-more-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" />
                </svg>
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="yt-description" onClick={() => setShowFullDesc(!showFullDesc)}>
            <div className="yt-desc-meta">
              <span>48,291 views</span>
              <span>Mar 10, 2026</span>
              <span className="yt-desc-tag">#PharmacyPOS</span>
              <span className="yt-desc-tag">#CloudInventory</span>
              <span className="yt-desc-tag">#SaaS</span>
            </div>
            <div className={`yt-desc-body ${showFullDesc ? "expanded" : ""}`}>
              <p>
                আমারদোকান — বাংলাদেশের প্রথম ক্লাউড-ভিত্তিক ফার্মেসি ম্যানেজমেন্ট সিস্টেম। আমাদের নতুন POS সিস্টেম দিয়ে আপনার ফার্মেসি পরিচালনা করুন সহজে, দ্রুতে এবং নির্ভরযোগ্যভাবে।
              </p>
              {showFullDesc && (
                <>
                  <p>✅ Real-time inventory tracking<br />✅ Automated expiry alerts<br />✅ Multi-branch management<br />✅ GST & VAT compliance<br />✅ Customer credit management<br />✅ 24/7 cloud backup</p>
                  <p>Visit <strong>aamardokan.com</strong> to learn more or book a free demo today.</p>
                </>
              )}
            </div>
            <button className="yt-desc-toggle">{showFullDesc ? "Show less" : "...more"}</button>
          </div>

          {/* Comments placeholder */}
          <div className="yt-comments-header">
            <span className="yt-comments-count">324 Comments</span>
            <button className="yt-sort-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" /></svg>
              Sort by
            </button>
          </div>
          <div className="yt-comment-input-row">
            <div className="yt-comment-avatar">SD</div>
            <input type="text" placeholder="Add a comment..." className="yt-comment-input" />
          </div>
        </div>

        {/* Right: Sidebar */}
        <aside className="yt-sidebar">
          {recommendedVideos.map((video) => (
            <div key={video.id} className="yt-rec-card">
              <div className="yt-rec-thumb-wrap">
                <img src={video.thumb} alt={video.title} className="yt-rec-thumb" />
                <span className="yt-rec-duration">{video.duration}</span>
              </div>
              <div className="yt-rec-info">
                <h3 className="yt-rec-title">{video.title}</h3>
                <div className="yt-rec-author">{video.author}</div>
                <div className="yt-rec-meta">{video.views} · {video.time}</div>
              </div>
              <button className="yt-rec-more">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="5" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="12" cy="19" r="2" />
                </svg>
              </button>
            </div>
          ))}
        </aside>
      </main>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .yt-root {
          background: #0f0f0f;
          min-height: 100vh;
          color: #f1f1f1;
          font-family: 'Roboto', -apple-system, system-ui, sans-serif;
          font-size: 14px;
        }

        /* ── Header ── */
        .yt-header {
          position: sticky;
          top: 0;
          z-index: 100;
          height: 56px;
          background: #0f0f0f;
          border-bottom: 1px solid #272727;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          gap: 8px;
        }

        .yt-header-left, .yt-header-right {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .yt-logo {
          display: flex;
          align-items: center;
          color: #f1f1f1;
          margin-left: 4px;
        }

        .yt-search-bar {
          display: flex;
          align-items: center;
          flex: 1;
          max-width: 640px;
          margin: 0 auto;
        }

        .yt-search-input {
          flex: 1;
          height: 40px;
          background: #121212;
          border: 1px solid #303030;
          border-right: none;
          border-radius: 40px 0 0 40px;
          color: #f1f1f1;
          font-size: 14px;
          padding: 0 16px;
          outline: none;
        }

        .yt-search-input:focus {
          border-color: #1c62b9;
          background: #0d0d0d;
        }

        .yt-search-btn {
          height: 40px;
          width: 64px;
          background: #222222;
          border: 1px solid #303030;
          border-left: none;
          border-radius: 0 40px 40px 0;
          color: #f1f1f1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.1s;
        }

        .yt-search-btn:hover { background: #303030; }

        .yt-mic-btn {
          margin-left: 8px;
          background: #222222 !important;
          border-radius: 50% !important;
          width: 40px !important;
          height: 40px !important;
        }

        .yt-icon-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: transparent;
          color: #f1f1f1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.1s;
        }

        .yt-icon-btn:hover { background: #272727; }

        .yt-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff6b00, #ff0000);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          color: #fff;
          cursor: pointer;
        }

        /* ── Main Layout ── */
        .yt-main {
          display: flex;
          gap: 24px;
          max-width: 1280px;
          margin: 0 auto;
          padding: 24px 24px;
        }

        .yt-primary {
          flex: 1;
          min-width: 0;
          max-width: 854px;
        }

        /* ── Player ── */
        .yt-player-wrap {
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          background: #000;
          aspect-ratio: 16 / 9;
        }

        /* ── Title ── */
        .yt-title {
          font-size: 20px;
          font-weight: 600;
          line-height: 1.4;
          color: #f1f1f1;
          margin: 12px 0 8px;
        }

        /* ── Channel Row ── */
        .yt-channel-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .yt-channel-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .yt-channel-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff6b00, #ff0000);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
        }

        .yt-channel-name {
          font-size: 15px;
          font-weight: 600;
          color: #f1f1f1;
        }

        .yt-channel-subs {
          font-size: 12px;
          color: #aaa;
        }

        .yt-subscribe-btn {
          height: 36px;
          padding: 0 16px;
          background: #f1f1f1;
          color: #0f0f0f;
          border: none;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
          display: flex;
          align-items: center;
          gap: 4px;
          white-space: nowrap;
        }

        .yt-subscribe-btn:hover { background: #d9d9d9; }
        .yt-subscribe-btn.subscribed {
          background: #272727;
          color: #f1f1f1;
        }
        .yt-subscribe-btn.subscribed:hover { background: #3d3d3d; }

        .yt-action-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .yt-like-group {
          display: flex;
          background: #272727;
          border-radius: 20px;
          overflow: hidden;
        }

        .yt-action-pill {
          height: 36px;
          padding: 0 14px;
          background: transparent;
          border: none;
          color: #f1f1f1;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: background 0.1s;
        }

        .yt-action-pill:hover { background: #3d3d3d; }
        .yt-action-pill.active { color: #3ea6ff; }
        .yt-action-pill.left { border-right: 1px solid #404040; }

        .yt-action-btn {
          height: 36px;
          padding: 0 14px;
          background: #272727;
          border: none;
          border-radius: 20px;
          color: #f1f1f1;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: background 0.1s;
        }

        .yt-action-btn:hover { background: #3d3d3d; }
        .yt-more-btn { padding: 0 10px; }

        /* ── Description ── */
        .yt-description {
          background: #272727;
          border-radius: 12px;
          padding: 12px 14px;
          margin: 12px 0;
          cursor: pointer;
          transition: background 0.1s;
        }

        .yt-description:hover { background: #303030; }

        .yt-desc-meta {
          display: flex;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: #f1f1f1;
          flex-wrap: wrap;
          margin-bottom: 8px;
        }

        .yt-desc-tag { color: #3ea6ff; }

        .yt-desc-body {
          font-size: 14px;
          line-height: 1.6;
          color: #ddd;
          overflow: hidden;
          max-height: 44px;
          transition: max-height 0.3s ease;
        }

        .yt-desc-body.expanded { max-height: 400px; }

        .yt-desc-toggle {
          background: none;
          border: none;
          color: #f1f1f1;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          padding: 4px 0 0;
          display: block;
        }

        /* ── Comments ── */
        .yt-comments-header {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 16px;
        }

        .yt-comments-count { font-size: 16px; font-weight: 600; }

        .yt-sort-btn {
          background: none;
          border: none;
          color: #f1f1f1;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          border-radius: 20px;
          transition: background 0.1s;
        }

        .yt-sort-btn:hover { background: #272727; }

        .yt-comment-input-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .yt-comment-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff6b00, #ff0000);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
        }

        .yt-comment-input {
          flex: 1;
          background: transparent;
          border: none;
          border-bottom: 1px solid #4d4d4d;
          color: #f1f1f1;
          font-size: 14px;
          padding: 8px 0;
          outline: none;
          transition: border-color 0.15s;
        }

        .yt-comment-input:focus { border-bottom-color: #f1f1f1; }
        .yt-comment-input::placeholder { color: #717171; }

        /* ── Sidebar ── */
        .yt-sidebar {
          width: 402px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .yt-rec-card {
          display: flex;
          gap: 8px;
          padding: 8px 4px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.1s;
          position: relative;
        }

        .yt-rec-card:hover { background: #272727; }
        .yt-rec-card:hover .yt-rec-more { opacity: 1; }

        .yt-rec-thumb-wrap {
          position: relative;
          width: 168px;
          height: 94px;
          flex-shrink: 0;
          border-radius: 8px;
          overflow: hidden;
          background: #272727;
        }

        .yt-rec-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .yt-rec-duration {
          position: absolute;
          bottom: 4px;
          right: 4px;
          background: rgba(0, 0, 0, 0.85);
          color: #fff;
          font-size: 11px;
          font-weight: 600;
          padding: 1px 5px;
          border-radius: 4px;
          letter-spacing: 0.2px;
        }

        .yt-rec-info {
          flex: 1;
          min-width: 0;
          padding-top: 2px;
        }

        .yt-rec-title {
          font-size: 14px;
          font-weight: 500;
          line-height: 1.4;
          color: #f1f1f1;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 4px;
        }

        .yt-rec-author, .yt-rec-meta {
          font-size: 12px;
          color: #aaa;
          line-height: 1.4;
        }

        .yt-rec-more {
          position: absolute;
          top: 8px;
          right: 4px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: none;
          background: transparent;
          color: #aaa;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.1s, background 0.1s;
        }

        .yt-rec-more:hover { background: #404040; }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .yt-sidebar { width: 340px; }
          .yt-rec-thumb-wrap { width: 140px; height: 80px; }
        }

        @media (max-width: 880px) {
          .yt-main { flex-direction: column; padding: 16px; }
          .yt-sidebar { width: 100%; }
          .yt-rec-thumb-wrap { width: 168px; height: 94px; }
        }
      `}</style>
    </div>
  );
};

export default VideoJSPlayer;