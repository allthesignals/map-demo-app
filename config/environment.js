'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'map-demo-app',
    environment,
    rootURL: '/',
    locationType: 'auto',
    'mapbox-gl': {
      accessToken: 'pk.eyJ1IjoibWF0dGdhcmRuZXJueWMiLCJhIjoiY2o4NTk2dTlzMGFjZDMydWRtY3NsYnFjZSJ9.lA_A4IHM2EGToFiPKFzSug',
      map: {
        style: 'mapbox://styles/mapbox/basic-v9',
        zoom: 10,
        center: [ -87.4985112, 41.8832547 ]
      }
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
