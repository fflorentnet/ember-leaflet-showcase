import Route from "@ember/routing/route";

export default Route.extend({
   queryParams: {
    zoom: {
        replace: true
    },
    lat: {
        replace: true
      },
      lng: {
        replace: true
      }
  },
});