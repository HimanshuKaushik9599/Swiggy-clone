 export function filterData(searchInput,resturants){
    return resturants.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchInput));
    }