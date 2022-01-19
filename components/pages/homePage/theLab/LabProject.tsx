import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "./LabProject.module.css";
import { LabProjectDetails } from "./TheLab";

export const LabProject = ({
  index,
  name,
  description,
  link,
}: LabProjectDetails): JSX.Element => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      referrerPolicy="strict-origin-when-cross-origin"
    >
      <p>{index}</p>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
};
