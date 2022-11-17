import { FragmanSection } from "./Fragman.styled";

const Fragman = ({ video }) => {
  return (
    <FragmanSection>
      <iframe
        src={`https://www.youtube.com/embed/${video}?autoplay=0&mute=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
        allowFullScreen
      />
    </FragmanSection>
  );
};

export default Fragman;
