import React from "react";
import { BasePositionCard } from "./BasePositionCard";
import { msg } from "@lingui/core/macro";

export const FUTSAL_POSITIONS = {
    goalkeeper: {
        title: msg`component.futsal-position-card.goalkeeper`,
        description: msg`component.futsal-position-card.goalkeeper.description`,
    },
    fixo: {
        title: msg`component.futsal-position-card.fixo`,
        description: msg`component.futsal-position-card.fixo.description`,
    },
    right_wing: {
        title: msg`component.futsal-position-card.right_wing`,
        description: msg`component.futsal-position-card.right_wing.description`,
    },
    left_wing: {
        title: msg`component.futsal-position-card.left_wing`,
        description: msg`component.futsal-position-card.left_wing.description`,
    },
    pivot: {
        title: msg`component.futsal-position-card.pivot`,
        description: msg`component.futsal-position-card.pivot.description`,
    },
} as const;

type PositionKey = keyof typeof FUTSAL_POSITIONS;

type Props = {
    position: PositionKey;
};

export const FutsalPositionCard: React.FC<Props> = ({ position }) => {
    return (
        <BasePositionCard
            details={FUTSAL_POSITIONS}
            position={position}
        />
    );
};
