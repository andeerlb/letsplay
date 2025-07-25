import React from "react";
import { BasePositionCard } from "./BasePositionCard";
import { msg } from "@lingui/core/macro";

const FUT11_POSITIONS = {
    goalkeeper: {
        title: msg`component.fut11-position-card.goalkeeper`,
        description: msg`component.fut11-position-card.goalkeeper.description`,
        background: "#1E90FF22",
    },
    right_back: {
        title: msg`component.fut11-position-card.right_back`,
        description: msg`component.fut11-position-card.right_back.description`,
        background: "#32CD3222",
    },
    left_back: {
        title: msg`component.fut11-position-card.left_back`,
        description: msg`component.fut11-position-card.left_back.description`,
        background: "#FF69B422",
    },
    center_back: {
        title: msg`component.fut11-position-card.center_back`,
        description: msg`component.fut11-position-card.center_back.description`,
        background: "#FFD70022",
    },
    defensive_midfielder: {
        title: msg`component.fut11-position-card.defensive_midfielder`,
        description: msg`component.fut11-position-card.defensive_midfielder.description`,
        background: "#8B451322",
    },
    central_midfielder: {
        title: msg`component.fut11-position-card.central_midfielder`,
        description: msg`component.fut11-position-card.central_midfielder.description`,
        background: "#FF8C0022",
    },
    attacking_midfielder: {
        title: msg`component.fut11-position-card.attacking_midfielder`,
        description: msg`component.fut11-position-card.attacking_midfielder.description`,
        background: "#8A2BE222",
    },
    right_winger: {
        title: msg`component.fut11-position-card.right_winger`,
        description: msg`component.fut11-position-card.right_winger.description`,
        background: "#00CED122",
    },
    left_winger: {
        title: msg`component.fut11-position-card.left_winger`,
        description: msg`component.fut11-position-card.left_winger.description`,
        background: "#FF634722",
    },
    striker: {
        title: msg`component.fut11-position-card.striker`,
        description: msg`component.fut11-position-card.striker.description`,
        background: "#DC143C22",
    },
    center_forward: {
        title: msg`component.fut11-position-card.center_forward`,
        description: msg`component.fut11-position-card.center_forward.description`,
        background: "#4B008222",
    },
} as const;

type PositionKey = keyof typeof FUT11_POSITIONS;

type Props = {
    position: PositionKey;
};

export const Fut11PositionCard: React.FC<Props> = ({ position }) => {
    return (
        <BasePositionCard
            details={FUT11_POSITIONS}
            position={position}
        />
    );
};
