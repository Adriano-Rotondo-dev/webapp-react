import { Leapfrog } from "ldrs/react";
import "ldrs/react/Leapfrog.css";

export default function Loading() {
  return (
    <div className="container d-flex justify-content-center align-content-center p-5">
      <Leapfrog size="40" speed="2.5" color="#66ff33" />;
    </div>
  );
}
