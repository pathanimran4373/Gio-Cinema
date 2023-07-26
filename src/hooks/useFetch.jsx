//custom hook for call api
//get deta from globale api function and pass to home page

import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";
 //get the data dynamicaly by passing url as parameter
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);

        //get deta from globale api function
        fetchDataFromApi(url)
            .then((res) => {

                setLoading(false);

                setData(res);
                // console.log(data)

            })
            .catch(() => {
                setLoading(false);
                setError("Something went wrong!");
            });
            //whenever url change,useEffect automaticaly call and change the data
    }, [url]);


    return { data, loading, error };
};

export default useFetch;