import { topTracks } from "../../../lib/spotify";

export default async function handler(req, res) {
  try {
    const response = await topTracks();

    const data = await response.json();

    const { items } = data;

    const tracks = items.slice(0, 10).map((track) => ({
      title: track.name,
      artist: track.artists.map((_artist) => _artist.name).join(", "),
      url: track.external_urls.spotify,
      coverImage: track.album.images[1],
    }));

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=86400, stale-while-revalidate=43200"
    );

    return res.status(200).json(tracks);
  } catch (error) {
    console.log("error", error);
  }
}
