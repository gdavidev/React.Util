import {CacheContext} from "../../context/CacheProvider.tsx";
import {useContext} from "react";

type UseCacheResult = {
    getCachedItem: (key: string) => any | undefined
    setCachedItem: (key: string, value: any) => void
}

/**
 * @description Exposes an easy API to the CacheProvider context which will manage client-side in memory cache data. 
 * @throws Error When not called inside the CacheProvider context element.
 * 
 * @returns {UseCacheResult} object:
 * - `getCachedItem`: gets the data by its key or undefined;
 * - `setCachedItem`: sets the data with a key, if it already exists, it will be overwritten.
 */
export default function useCache(): UseCacheResult {
    const cacheContext = useContext(CacheContext);
    if (!cacheContext) {
        throw new Error("useCache must be used within CacheContext");
    }

    return {
        getCachedItem: cacheContext.getCachedItem,
        setCachedItem: cacheContext.setCachedItem,
    }
}