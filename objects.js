var playlist = {artistname: "songTitle"};
function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]: "sleep" })
}
