import React from "react";
import { graphql } from "gatsby";
// import ReactPlayer from 'react-player'

const PlayerContainer = ({ children, url }) => {
  return (
    <>
      <p>oi</p>
    </>
  );
};

export default PlayerContainer;

export const queryVideo = graphql`
  query heroVideo {
    promoVideoUrl: file(name: { eq: "promo-edu4dev" }) {
      publicURL
    }
  }
`;
