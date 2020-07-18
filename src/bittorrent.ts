import * as WebTorrent from "webtorrent";
var client = new WebTorrent();

export const seed = (file) => {
  client.seed(__dirname + `/../samples/${file}`, function (torrent) {
    console.log(
      "Total: " +
        client.torrents.length +
        ". Client is seeding " +
        torrent.magnetURI
    );
  });
};
