import React from "react";
import { Timeline } from "../src";

export const ProfileBasic = () => (
  <Timeline dataSource={{ sourceType: "profile", screenName: "reactjs" }} />
);