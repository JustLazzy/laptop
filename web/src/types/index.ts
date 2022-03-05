export type Album = {
  tracks: {
    album_type: string;
    available_markets: string[];
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: [height: number, url: string, width: number];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
    artists: [
      external_urls: {
        spotify: string;
      },
      href: string,
      id: string,
      name: string,
      type: string,
      uri: string
    ];
  };
};

export type Tags = {
  title: string;
  description: string;
  url: string;
  image: string;
  themeColor: string;
  keywords: string;
  author: string;
  charSet: string;
  language: string;
  icons: {
    src: string;
    sizes: string;
    type: string;
  }[];
};
