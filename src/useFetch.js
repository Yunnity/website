import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingMessage, setLoadingMessage] = useState("Loading...");

    useEffect(() => {
        const abortController = new AbortController();
        setTimeout(() => {
            fetch(url, {signal: abortController.signal})
                .then(response => {
                    if(!response.ok) throw Error("Couldn't fetch for that resource");
                    return response.json();
                })
                .then(data => {
                    setData(data);
                    setLoading(false);
                })
                .catch(e => 
                    {
                        // if(e.name === "AbortError") console.log("fetch aborted");
                        setLoadingMessage(e.message)
                    });
        }, 0)

        return () => abortController.abort();
    }, [url]);

    return{ data, loading, loadingMessage }
}

export default useFetch
