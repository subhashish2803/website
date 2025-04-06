import React, { useEffect, useState } from "react";

const SongList = () => {
  // Sample data for liked songs with Spotify links
  const songs = [
    { title: "Minnale", artist: "Amaran", albumCover: "https://i.scdn.co/image/ab67616d0000b273a673424f0029d8cccb1859b2", spotifyUrl: "https://open.spotify.com/track/1kmJ0EvXClJAt0fSSQLX1m?si=835176c212a74f6f" },
    { title: "Kaisey Jiyun", artist: "Local Train", albumCover: "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWl05xyWz/size_l.jpg", spotifyUrl: "https://open.spotify.com/track/6vIpkg9mdc5kDYvwuO6Qtc?si=df01e4c9657a4451" },
    { title: "Choo Lo", artist: "Local Train", albumCover: "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWl05xyWz/size_l.jpg", spotifyUrl: "https://open.spotify.com/track/6vIpkg9mdc5kDYvwuO6Qtc?si=df01e4c9657a4451" },
    { title: "Sadqay", artist: "Aashir Wajahat", albumCover: "https://th.bing.com/th/id/OIP.-bUa5--F-btKEwc2c_OHcQHaEK?rs=1&pid=ImgDetMain", spotifyUrl: "https://open.spotify.com/track/2lX53kXvYnvpV8Vqfe4S7s?si=5db3a599e08f457f" },
    { title: "A Thousand Years", artist: "Christina Perri", albumCover: "https://th.bing.com/th/id/R.6a18db76fd63c82fb5611bc7c7cd0d3d?rik=knHOMCvl99CdQg&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f26100000%2f-A-Thousand-Years-artwork-christina-perri-26124208-960-960.jpg&ehk=dViW8Kc4W5tHZ2azXGJBMjtbtUweTFP5h7UpiXHdvc4%3d&risl=&pid=ImgRaw&r=0", spotifyUrl: "https://open.spotify.com/track/6lanRgr6wXibZr8KgzXxBl?si=1e1efcfaf63d4217" },
    { title: "Aaj Se Teri", artist: "Arijit Singh", albumCover: "https://i.ytimg.com/vi/iX6n0luiC10/maxresdefault.jpg", spotifyUrl: "https://open.spotify.com/track/0EwRpK9wY6lHfcJSt82w4x?si=6b651ff8d3a04ee1" },
    { title: "Lut Put Gaya", artist: "Arijit Singh", albumCover: "https://i.ytimg.com/vi/iv_TKytXi88/maxresdefault.jpg", spotifyUrl: "https://open.spotify.com/track/72Z2D7jpKevicRkyL45mbw?si=dccc9a15c9e648b1" },
  ];

  // State to control auto-animation
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating((prev) => !prev); // Toggle animation state
    }, 2000); // Change animation every 2 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  // Function to handle play button click
  const handlePlayClick = (spotifyUrl) => {
    window.open(spotifyUrl, "_blank"); // Open Spotify link in a new tab
  };

  // Inline styles
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4",
    },
    heading: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#333",
    },
    songList: {
      display: "flex",
      flexDirection: "row",
      gap: "15px",
      padding: "20px",
      width: "100%",
      overflowX: "auto", // Allow horizontal scrolling
      overflowY: "auto", // Allow vertical scrolling
      maxHeight: "80vh", // Prevent excessive height usage
      whiteSpace: "nowrap", // Keep items in a row
    },

    songCard: {
      flex: "0 0 auto",
      width: "200px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "15px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
      transform: isAnimating ? "scale(1.02)" : "scale(1)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: "10px",
    },
    content: {
      position: "relative",
      zIndex: 1,
      color: "#fff",
      textAlign: "center",
    },
    songTitle: {
      fontSize: "18px",
      fontWeight: "bold",
    },
    songArtist: {
      fontSize: "14px",
    },
    musicIcon: {
      fontSize: "24px",
      marginTop: "10px",
      cursor: "pointer",
    },
  };

  // Media query for smaller screens
  const responsiveStyles = {
    songCard: {
      ...styles.songCard,
      width: "150px", // Reduce card width for smaller screens
    },
    songTitle: {
      ...styles.songTitle,
      fontSize: "16px", // Reduce font size for smaller screens
    },
    songArtist: {
      ...styles.songArtist,
      fontSize: "12px", // Reduce font size for smaller screens
    },
  };

  return (
    <div style={styles.container}>
      <h2 className="bg-black text-white px-3 py-1 rounded-md text-sm">Music</h2>
      <h1 className="text-4xl font-jakarta font-bold mt-4 text-black text-center">
        I like listening to my jam
      </h1>
      <div style={styles.songList}>
        {songs.map((song, index) => (
          <div
            key={index}
            style={{
              ...styles.songCard,
              ...(window.innerWidth <= 768 ? responsiveStyles.songCard : {}), // Apply responsive styles for smaller screens
              backgroundImage: `url(${song.albumCover})`,
            }}
          >
            <div style={styles.overlay}></div>
            <div style={styles.content}>
              <div
                style={{
                  ...styles.songTitle,
                  ...(window.innerWidth <= 768 ? responsiveStyles.songTitle : {}),
                }}
              >
                {song.title}
              </div>
              <div
                style={{
                  ...styles.songArtist,
                  ...(window.innerWidth <= 768 ? responsiveStyles.songArtist : {}),
                }}
              >
                {song.artist}
              </div>
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/ios-filled/50/circled-play.png"
                alt="circled-play"
                style={styles.musicIcon}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlayClick(song.spotifyUrl);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongList;