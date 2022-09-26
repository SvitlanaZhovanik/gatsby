import { useEffect, useState } from 'react';
import axios from 'axios';

export const LOCATION_STORAGE_KEY = 'ucl-reg-yHjb';

const useClientLocation = () => {
  const [location, setLocation] = useState('');

  useEffect(() => {
    const storageLocation =
      window.sessionStorage.getItem(LOCATION_STORAGE_KEY) ?? '';
    if (storageLocation) {
      setLocation(storageLocation);
      return;
    }
    const getLocation = async () => {
      const { data } = await axios.get('https://ipapi.co/json/');
      const code = data.country_code?.toLowerCase();
      setLocation(code);
      sessionStorage.setItem(LOCATION_STORAGE_KEY, code);
    };
    getLocation();
  }, [location]);

  return location;
};

export default useClientLocation;
