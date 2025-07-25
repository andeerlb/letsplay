import React from "react";
import { BasePositionCard } from "./BasePositionCard";
import { msg } from "@lingui/core/macro";

const FUTSAL_POSITIONS = {
    goalkeeper: {
        title: msg`component.futsal-position-card.goalkeeper`,
        description: "Defende o gol e comanda a linha defensiva. Usa muito os pés no jogo.",
        background: "#1E90FF22",
    },
    fixo: {
        title: msg`component.futsal-position-card.fixo`,
        description: "Último homem da defesa, organiza o time e inicia a saída de bola.",
        background: "#FFD70022",
    },
    right_wing: {
        title: msg`component.futsal-position-card.right_wing`,
        description: "Rápido e habilidoso, atua pelo lado direito em ataque e defesa.",
        background: "#32CD3222",
    },
    left_wing: {
        title: msg`component.futsal-position-card.left_wing`,
        description: "Driblador e criativo, cria jogadas pela esquerda com intensidade.",
        background: "#FF69B422",
    },
    pivot: {
        title: msg`component.futsal-position-card.pivot`,
        description: "Referência ofensiva, joga de costas para o gol e finaliza com precisão.",
        background: "#8A2BE222",
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
