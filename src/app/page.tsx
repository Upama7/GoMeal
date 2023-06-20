import LeftDiv from "../../components/LeftDiv";
import MidDiv from "../../components/MidDiv";
import RightDiv from "../../components/RightDiv";

//home page
export default function Home() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="flex ">
          <LeftDiv />
          <MidDiv />
          <RightDiv />
        </div>
      </div>
    </>
  );
}
