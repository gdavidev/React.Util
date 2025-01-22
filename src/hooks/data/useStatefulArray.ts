import { useCallback, useState } from "react"

type UseStatefulArrayOptions<T> = {  
    compare?: (item1: T, item2: T) => boolean  
}

type UseStatefulArrayResult<T> = {
  all: T[],
  set: (items: T[]) => void,
  append: (item: T) => void,
  prepend: (item: T) => void,
  remove: (item: T) => void,
  update: (item: T) => void,
  clear: () => void,
  filter: Array<T>['filter'],
  find: Array<T>['find'],
  forEach: Array<T>['forEach'],
  map: Array<T>['map'],
  length: number
}

export default function useStatefulArray<T>(initialState?: T[], options?: UseStatefulArrayOptions<T>): UseStatefulArrayResult<T> {
  const [ arr, setArr ] = useState<T[]>(initialState || []);
  const compare = options?.compare ?? ((item1: T, item2: T) => item1 == item2);
    
  return {
    all: arr,
    set: useCallback((items: T[]) => setArr(items), []),
    append: useCallback((item: T) => setArr(ar => [...ar, item]), []),
    prepend: useCallback((item: T) => setArr(ar => [item, ...ar]), []),
    remove: useCallback((item: T) => setArr(ar => ar.filter(i => !compare(i, item))), []),
    update: useCallback((item: T) => setArr(arr => arr.map(i => compare(i, item) ? item : i)), []),
    clear: useCallback(() => setArr([]), []),
    filter: arr.filter,
    find: arr.find,
    forEach: arr.forEach,
    map: arr.map,
    length: arr.length
  };
}