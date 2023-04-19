export function filterData(searchText, restarunts){
    const filterdata = restarunts.filter((restarunt)=>
        restarunt?.data?.name?.toLowerCase()?.includes(searchText)
    );
    
    return filterdata;
}