import * as WebTorrent from "webtorrent";
var client = new WebTorrent();

export const seed = (torrentPath) => {
  client.add(torrentPath, function (torrent) {
    console.log(
      "Total: " +
        client.torrents.length +
        ". Client is seeding " +
        torrent.magnetURI
    );
  });
};
