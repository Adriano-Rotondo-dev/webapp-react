import { Leapfrog } from "ldrs/react";
import "ldrs/react/Leapfrog.css";

export default function Loading() {
  return (
    <div className="container d-flex justify-content-center align-items-center  p-5 mt-5">
      <h1 style={{ color: "#66ff33" }}> Loading </h1>
      <Leapfrog size="40" speed="2.5" color="#66ff33" />;
    </div>
  );
}
