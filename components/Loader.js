import { JellyBounceLoader } from "react-loaders-kit";

const Loader = () => {
  const loaderProps = {
    loading: true,
    size: 130,
    duration: 2,
    colors: ["#ffd000", "#ffffff", "#ffd000", "#ffffff", "#ffd000"],
  };
  return (
    <div>
      <JellyBounceLoader {...loaderProps} />
    </div>
  );
};

export default Loader;
