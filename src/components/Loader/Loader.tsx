import React from "react";
import { Bars } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={css.loader}>
      <Bars visible={true} color="#fff" />
    </div>
  );
};

export default Loader;
