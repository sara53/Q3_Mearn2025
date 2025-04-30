import { useEffect, useState } from "react";

export function useFetch( url ) {


    let [ data, setData ] = useState( [] );
    let [ errors, setErrors ] = useState( null )
    let [ isLoading, setIsLoading ] = useState( false )

    let fetchData = async () => {
        try {
            setIsLoading( true )
            let response = await fetch( url )
            let items = await response.json();
            setData( items )
        } catch ( error ) {
            setErrors( error )
        }
        setIsLoading( false )

    }

    useEffect( () => {
        fetchData();
    }, [ url ] )

    return { data, errors, isLoading }
}