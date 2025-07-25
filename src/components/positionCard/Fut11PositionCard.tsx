import React from "react";
import { BasePositionCard } from "./BasePositionCard";
import { msg } from "@lingui/core/macro";

export const FUT11_POSITIONS = {
    goalkeeper: {
        title: msg`component.fut11-position-card.goalkeeper`,
        description: msg`component.fut11-position-card.goalkeeper.description`,
    },
    right_back: {
        title: msg`component.fut11-position-card.right_back`,
        description: msg`component.fut11-position-card.right_back.description`,
    },
    left_back: {
        title: msg`component.fut11-position-card.left_back`,
        description: msg`component.fut11-position-card.left_back.description`,
    },
    center_back: {
        title: msg`component.fut11-position-card.center_back`,
        description: msg`component.fut11-position-card.center_back.description`,
    },
    defensive_midfielder: {
        title: msg`component.fut11-position-card.defensive_midfielder`,
        description: msg`component.fut11-position-card.defensive_midfielder.description`,
    },
    central_midfielder: {
        title: msg`component.fut11-position-card.central_midfielder`,
        description: msg`component.fut11-position-card.central_midfielder.description`,
    },
    attacking_midfielder: {
        title: msg`component.fut11-position-card.attacking_midfielder`,
        description: msg`component.fut11-position-card.attacking_midfielder.description`,
    },
    right_winger: {
        title: msg`component.fut11-position-card.right_winger`,
        description: msg`component.fut11-position-card.right_winger.description`,
    },
    left_winger: {
        title: msg`component.fut11-position-card.left_winger`,
        description: msg`component.fut11-position-card.left_winger.description`,
    },
    striker: {
        title: msg`component.fut11-position-card.striker`,
        description: msg`component.fut11-position-card.striker.description`,
    },
    center_forward: {
        title: msg`component.fut11-position-card.center_forward`,
        description: msg`component.fut11-position-card.center_forward.description`,
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
