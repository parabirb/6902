// memory map for connection directly to the databus
export default function map(...routes) {
    // dataBus function
    return function dataBus({ read, address, data = null }) {
        // go through each route
        for (let route of routes) {
            // if the address is within the route, return the result of the controlleer
            if (route.starting <= address && address < route.starting + route.size) {
                return route({ read, address: address - route.starting, data });
            }
        }
    }
};