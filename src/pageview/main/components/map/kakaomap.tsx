import { Map } from "react-kakao-maps-sdk";
import useCurrentLocation from "./useCurrentLocation";

export default function KakaoMap() {
  const { location, error, loading } = useCurrentLocation();

  return loading ? (
    <></>
  ) : (
    <Map
      center={{ lat: location.latitude!, lng: location.longitude! }} // 지도의 중심 좌표
      style={{ position: "absolute", width: "100vw", height: "100vh" }} // 지도 크기
      level={3} // 지도 확대 레벨
    />
  );
}
