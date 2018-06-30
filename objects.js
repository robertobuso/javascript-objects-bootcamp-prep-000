var playlist = { artistName: "songTitle" };

function updatePlaylist (playlist, artistName, songTitle) {
      
  return Object.assign ( playlist, { [artistName]: "songTitle" } );
}

function removeFromPlaylist (playlist, artistName) {
<<<<<<< HEAD
  delete playlist[artistName];
  return playlist;
=======
 delete artistName.playlist
>>>>>>> 6efdf01f0b663d8467ed65e1571e9f126ff47bc1
}