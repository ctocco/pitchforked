class NewsApi {
  constructor(site, artist) {
    this.site = site;
    this.artist = artist;
  }

  getData() {
    fetch(
      `https://newsapi.org/v2/everything?q=${
        this.artist
      }&from=2019-02-25&sortBy=popularity&sources=${
        this.site
      }&apiKey=0f89c66f2e8241fb8dc9e5a641163a63`
    ).then(res => res.json());
  }
}

//this was an attempt to fetch data in another api folder however did not work
// this was in ArtistInfo.jsx
// try {
//   const mtv = new newsApi("mtv-news", artist);
//   mtv.getData().then(json => setmtvNews(json));
// } catch (error) {}

export default NewsApi;
