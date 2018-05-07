var playlist = {savatage: "songTitle"};
function updatePlaylist(playlist, artistName, songTitle){
  return playlist.assign({}, playlist, { [artistName]: "sleep" })
}
