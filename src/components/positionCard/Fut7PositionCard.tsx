import React from "react";
import { BasePositionCard } from "./BasePositionCard";
import { msg } from "@lingui/core/macro";

export const FUT7_POSITIONS = {
    goalkeeper: {
        title: msg`component.fut7-position-card.goalkeeper`,
        description: msg`component.fut7-position-card.goalkeeper.description`,
        background: "#1E90FF22",
    },
    fixo: {
        title: msg`component.fut7-position-card.fixo`,
        description: msg`component.fut7-position-card.fixo.description`,
        background: "#FFD70022",
    },
    "right-wing": {
        title: msg`component.fut7-position-card.right-wing`,
        description: msg`component.fut7-position-card.right-wing.description`,
        background: "#32CD3222",
    },
    "left-wing": {
        title: msg`component.fut7-position-card.left-wing`,
        description: msg`component.fut7-position-card.left-wing.description`,
        background: "#FF69B422",
    },
    midfielder: {
        title: msg`component.fut7-position-card.midfielder`,
        description: msg`component.fut7-position-card.midfielder.description`,
        background: "#FF8C0022",
    },
    pivot: {
        title: msg`component.fut7-position-card.pivot`,
        description: msg`component.fut7-position-card.pivot.description`,
        background: "#8A2BE222",
    },
} as const;

type PositionKey = keyof typeof FUT7_POSITIONS;

type Props = {
    position: PositionKey;
};

export const Fut7PositionCard: React.FC<Props> = ({ position }) => {
    return <BasePositionCard details={FUT7_POSITIONS} position={position} />;
};
