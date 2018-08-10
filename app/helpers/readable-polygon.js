import { helper } from "@ember/component/helper";

function layerToString([ polygon ]) {
    const type = polygon.layerType;
    switch(type) {
        case "circle":
            return circleToString(polygon);
        case "rectangle":
            return rectangleToString(polygon);
        default:
            return type;
    }
}

function rectangleToString(rectangle) {
    return `Rectangle []`;
}

function circleToString(circle) {
    return `Cercle [ rayon: ${Math.ceil(circle.layer._mRadius)}m ]`;
}

export default helper(layerToString);