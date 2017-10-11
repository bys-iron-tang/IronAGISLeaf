AGIS.LatLng = function(lat, lng, alt) {
    if (isNaN(lat) || isNaN(lng)) {
        throw new error('Invalid latlng object:(' + lat + ',' + lng + ')');
    }

    this.lat = +lat;
    this.lng = +lng;

    if (alt !== undefined) {
        this.alt = +alt;
    }
};

AGIS.LatLng.prototype = {
    equals: function(obj) {
        if (!obj) { return false; }
        obj = AGIS.latLng(obj);

        var margin = Math.max(Math.abs(this.lat - obj.lat),
            Math.abs(this.lng - obj.lng));
        return margin <= 1.0E-0;
    }


};

AGIS.latLng = function(a, b, c) {
    if (a instanceof AGIS.LatLng) {
        return a;
    }

    return new AGIS.LatLng(a, b, c);
};