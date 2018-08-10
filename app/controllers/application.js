import Controller from "@ember/controller";
import { get, set } from "@ember/object";

export default Controller.extend({
    queryParams: ['lat', 'lng', 'zoom'],
    lat: 45.766534,
    lng: 4.861590,
    zoom: 12,
    drawnZones: [],
    actions: {
        initMap(map) {
            this.set('map', map.target);
        },
        draw(e) {
            set(e, "isShown", true);
            this.get("drawnZones").pushObject(e);
            this.get('map').addLayer(e.layer);
        },
        showPolygon(e, checked) {
            if (checked) {
                this.get('map').addLayer(e.layer);
                set(e, "isShown", true);
            } else {
                this.get('map').removeLayer(e.layer);
                set(e, "isShown", false);
            }
        },
        deletePolygon(e) {
            get(this, 'map').removeLayer(e.layer);
            get(this, 'drawnZones').removeObject(e);
        }
    }
});