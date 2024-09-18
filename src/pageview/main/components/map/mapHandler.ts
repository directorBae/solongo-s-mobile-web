import { makeObservable, observable, action } from "mobx";

class MapMarksClass {
  marks: {
    lat: number;
    lng: number;
    title: string;
    onClick: () => void;
  }[] = [
    {
      lat: 37.5665,
      lng: 126.978,
      title: "서울",
      onClick: () => {
        alert("서울");
      },
    },
  ];

  center = {
    lat: 37.5665,
    lng: 126.978,
  };

  isPan = false;

  constructor() {
    // makeObservable 호출 시 observable 및 action을 명시적으로 설정
    makeObservable(this, {
      center: observable,
      isPan: observable,
      setCenter: action,
      setPan: action,
    });
  }

  setCenter(lat: number, lng: number) {
    this.center = { lat, lng };
  }

  setPan(isPan: boolean) {
    this.isPan = isPan;
  }
}

const MapMarks = new MapMarksClass();
export default MapMarks;
