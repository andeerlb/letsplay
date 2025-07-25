import React from "react";
import { BasePositionCard } from "./BasePositionCard";
import { msg } from "@lingui/core/macro";

export const FUT7_POSITIONS = {
    goalkeeper: {
        title: msg`component.fut7-position-card.goalkeeper`,
        description: msg`component.fut7-position-card.goalkeeper.description`,
    },
    fixo: {
        title: msg`component.fut7-position-card.fixo`,
        description: msg`component.fut7-position-card.fixo.description`,
    },
    "right-wing": {
        title: msg`component.fut7-position-card.right-wing`,
        description: msg`component.fut7-position-card.right-wing.description`,
    },
    "left-wing": {
        title: msg`component.fut7-position-card.left-wing`,
        description: msg`component.fut7-position-card.left-wing.description`,
    },
    midfielder: {
        title: msg`component.fut7-position-card.midfielder`,
        description: msg`component.fut7-position-card.midfielder.description`,
    },
    pivot: {
        title: msg`component.fut7-position-card.pivot`,
        description: msg`component.fut7-position-card.pivot.description`,
    },
} as const;

type PositionKey = keyof typeof FUT7_POSITIONS;

type Props = {
    position: PositionKey;
};

export const Fut7PositionCard: React.FC<Props> = ({ position }) => {
    return <BasePositionCard details={FUT7_POSITIONS} position={position} />;
};
