import React from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";

const DetailProject = () => {
  const { id } = useParams();
  return <div>Detail Project info - {id}</div>;
};

export default DetailProject;
