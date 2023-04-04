class Playlist {
  constructor(capacity) {
    this.capacity = capacity;
    this.songs = [];
  }

  addSong(song) {
    if (this.songs.length >= this.capacity) {
      this.songs.pop();   // Remove the oldest song if the playlist is full
    }
    this.songs.unshift(song);  // Add the new song at the beginning of the playlist
  }

  getPlaylist() {
    return this.songs;
  }
}

// Example usage:
let playlist = new Playlist(3);
playlist.addSong("S1");
playlist.addSong("S2");
playlist.addSong("S3");
console.log(playlist.getPlaylist()); // Output: ["S1", "S2", "S3"]
playlist.addSong("S4");
console.log(playlist.getPlaylist()); // Output: ["S2", "S3", "S4"]
playlist.addSong("S2");
console.log(playlist.getPlaylist()); // Output: ["S3", "S4", "S2"]
playlist.addSong("S1");
console.log(playlist.getPlaylist()); // Output: ["S4", "S2", "S1"]
