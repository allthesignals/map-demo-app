import Route from '@ember/routing/route';
import fetch from 'fetch';

const HOST = 'https://gist.githubusercontent.com/allthesignals/f9224f5b2860e19c900180f295f0dbe7/raw/ad81c60619ee95932dd6957a22a1a8d8b0e6a3b8';

export default Route.extend({
  model() {
    return fetch(`${HOST}/tutorial_chicago_bike_routes.geojson`)
      .then(blob => blob.json());
  }
});
