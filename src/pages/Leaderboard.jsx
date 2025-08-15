import React, { useState } from "react";
import "../styles/leaderboard.css";
import Footer from "./Footer.jsx";

const Leaderboard = () => {
  const players = [
    { id: 1, name: "Alice Johnson", points: 1500, avatar: "https://i.pravatar.cc/100?img=1", bio: "Top contributor with consistent event participation." },
    { id: 2, name: "Bob Smith", points: 1450, avatar: "https://i.pravatar.cc/100?img=2", bio: "Passionate volunteer and community organizer." },
    { id: 3, name: "Charlie Lee", points: 1400, avatar: "https://i.pravatar.cc/100?img=3", bio: "Known for leading charity drives." },
    { id: 4, name: "Diana Ross", points: 1300, avatar: "https://i.pravatar.cc/100?img=4", bio: "Specializes in fundraising events." },
    { id: 5, name: "Ethan Clark", points: 1200, avatar: "https://i.pravatar.cc/100?img=5", bio: "Strong advocate for youth programs." },
    { id: 6, name: "Fiona Davis", points: 1150, avatar: "https://i.pravatar.cc/100?img=6", bio: "Frequently leads volunteer workshops." },
    { id: 7, name: "George Miller", points: 1100, avatar: "https://i.pravatar.cc/100?img=7", bio: "Focuses on environmental causes." },
    { id: 8, name: "Hannah White", points: 1050, avatar: "https://i.pravatar.cc/100?img=8", bio: "Helps coordinate disaster relief efforts." },
  ];

  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [search, setSearch] = useState("");

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="leaderboard-page">
      <h1>Leaderboard</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search players..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Top 3 Podium */}
      <div className="podium">
        {players.slice(0, 3).map((player, index) => (
          <div key={player.id} className={`podium-spot rank-${index + 1}`}>
            <img src={player.avatar} alt={player.name} className="podium-avatar" />
            <p>{player.name}</p>
            <span>{player.points} pts</span>
          </div>
        ))}
      </div>

      {/* Leaderboard Table */}
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {filteredPlayers.map((player, index) => (
            <tr
              key={player.id}
              className={index < 3 ? "top-rank" : ""}
              onClick={() => setSelectedPlayer(player)}
            >
              <td>#{index + 1}</td>
              <td className="player-cell">
                <img src={player.avatar} alt={player.name} className="avatar" />
                {player.name}
              </td>
              <td>{player.points}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Player Detail Panel */}
      {selectedPlayer && (
        <div className="player-detail">
          <button className="close-btn" onClick={() => setSelectedPlayer(null)}>✖</button>
          <img src={selectedPlayer.avatar} alt={selectedPlayer.name} className="detail-avatar" />
          <h2>{selectedPlayer.name}</h2>
          <p className="detail-points">{selectedPlayer.points} Points</p>
          <p className="detail-bio">{selectedPlayer.bio}</p>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Leaderboard;
