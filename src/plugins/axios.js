
import { useState, useCallback,useMemo, useEffect } from 'react'
import axios from 'axios'


const _axios = axios.create(); // export this and use it in all your components

const useAxiosLoader = () => {
  const [counter, setCounter] = useState(0);
  const inc = useCallback(() => setCounter(counter => counter + 1), [setCounter]); // add to counter
  const dec = useCallback(() => setCounter(counter => counter - 1), [setCounter]); // remove from counter
  
  const interceptors = useMemo(() => ({
    request: config => (inc(), config),
    response: response => (dec(), response),
    error: error => (dec(), Promise.reject(error)),
  }), [inc, dec]); // create the interceptors
  
  useEffect(() => {
    // add request interceptors
    const reqInterceptor = _axios.interceptors.request.use(interceptors.request, interceptors.error);
    // add response interceptors
    const resInterceptor =  _axios.interceptors.response.use(interceptors.response, interceptors.error);
    return () => {
      // remove all intercepts when done
      _axios.interceptors.request.eject(reqInterceptor);
      _axios.interceptors.response.eject(resInterceptor);
    };
  }, [interceptors]);
  return [counter > 0];
};
  
export {
  _axios,
  useAxiosLoader
}