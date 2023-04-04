let playlist = new Array(3);  // Here initialize the playlist with a capacity of 3

// Function to add a song to the playlist
function addSong(song) {
  // Shift all existing songs to the right
  for (let i = playlist.length - 1; i >= 1; i--) {
    playlist[i] = playlist[i - 1];
  }
  playlist[0] = song;    // Add the new song at the beginning of the playlist
}

// Example:
addSong('S1');
addSong('S2');
addSong('S3');
console.log(playlist); // Output: ["S1", "S2", "S3"]
addSong('S4');
console.log(playlist); // Output: ["S2", "S3", "S4"]
addSong('S2');
console.log(playlist); // Output: ["S3", "S4", "S2"]
addSong('S1');
console.log(playlist); // Output: ["S4", "S2", "S1"]
