import { useState, useEffect } from "react";

// 위치 정보를 위한 타입 정의
interface Location {
  latitude: number | null;
  longitude: number | null;
}

interface LocationOptions {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
}

// useCurrentLocation 훅 정의
const useCurrentLocation = (options?: LocationOptions) => {
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
      return;
    }

    const successHandler = (position: GeolocationPosition) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      setError(null);
      setLoading(false);
    };

    const errorHandler = (err: GeolocationPositionError) => {
      setError(err.message);
      setLoading(false);
    };

    // watchPosition을 사용하여 지속적으로 위치를 추적
    const watchId = navigator.geolocation.watchPosition(
      successHandler,
      errorHandler,
      options
    );

    // 컴포넌트가 언마운트될 때 위치 추적을 중지
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, [options]);

  return { location, error, loading };
};

export default useCurrentLocation;
