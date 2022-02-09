import { config } from "../utils/config";

export class Spotify {
  async getAccessToken() {
    const basic = Buffer.from(
      `${config.spotify.client_id}:${config.spotify.client_secret}`
    ).toString("base64");
    const response = await fetch(config.spotify.token, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=refresh_token&refresh_token=${config.spotify.refresh_token}`,
    });
    const { access_token } = await response.json();
    return access_token;
  }
  getTracks(selectArtist: string): Promise<any> {
    return fetch(
      `https://api.spotify.com/v1/search?type=track&q=${selectArtist}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${config.spotify.refresh_token}`,
        },
      }
    );
  }
}
