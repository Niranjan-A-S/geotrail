import { FC, memo } from "react";
import { LinkButton } from "./link-button";
import { ROUTE_PATHS } from "../../../constants";

export const HomeLinkButton: FC = memo(() => <LinkButton url={ROUTE_PATHS.home} label="Go home" />);
