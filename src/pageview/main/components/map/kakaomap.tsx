import { observer } from "mobx-react-lite";
import {
  Map,
  MapMarker,
  MapTypeControl,
  ZoomControl,
} from "react-kakao-maps-sdk";
import { useEffect } from "react";
import useCurrentLocation from "./useCurrentLocation";
import MapMarks from "./mapHandler";

const KakaoMap = observer(() => {
  const { location, error, loading } = useCurrentLocation();

  useEffect(() => {
    if (location.latitude && location.longitude) {
      // 위치 데이터가 업데이트되면 MobX 상태 업데이트
      MapMarks.setCenter(location.latitude, location.longitude);
    }
  }, [location]);

  return loading ? (
    <></>
  ) : (
    <Map
      center={{ lat: MapMarks.center.lat, lng: MapMarks.center.lng }} // MobX에서 관리하는 중심 좌표
      isPanto={MapMarks.isPan} // 지도 이동 여부
      style={{ position: "absolute", width: "100vw", height: "100vh" }} // 지도 크기
      level={3} // 지도 확대 레벨
      onCenterChanged={(map) => {
        // 사용자가 지도를 움직이면 중심 좌표 업데이트
        const center = map.getCenter();
        MapMarks.setCenter(center.getLat(), center.getLng());
        MapMarks.setPan(false); // 지도가 움직였으므로 panning을 멈춤
      }}
    >
      {/* <MapTypeControl position={"BOTTOMRIGHT"} />
      <ZoomControl position={"BOTTOMLEFT"} /> */}

      {MapMarks.marks.map((mark, idx) => (
        <MapMarker key={idx} position={{ lat: mark.lat, lng: mark.lng }} />
      ))}
    </Map>
  );
});

export default KakaoMap;
