import React from "react";
import { BasePositionCard } from "./BasePositionCard";
import { msg } from "@lingui/core/macro";

export const FUT7_POSITIONS = {
    goalkeeper: {
        title: msg`component.fut7-position-card.goalkeeper`,
        description: "Defende o gol e organiza a defesa. Reflexos rápidos e liderança.",
        background: "#1E90FF22",
    },
    fixo: {
        title: msg`component.fut7-position-card.fixo`,
        description: "Responsável por proteger a defesa e iniciar as jogadas. Forte na marcação e no posicionamento.",
        background: "#FFD70022",
    },
    "right-wing": {
        title: msg`component.fut7-position-card.right-wing`,
        description: "Velocidade e apoio ofensivo pela direita. Crucial para cruzamentos e recomposição defensiva.",
        background: "#32CD3222",
    },
    "left-wing": {
        title: msg`component.fut7-position-card.left-wing`,
        description: "Atua pela esquerda com dribles e criatividade. Importante no ataque e na marcação lateral.",
        background: "#FF69B422",
    },
    midfielder: {
        title: msg`component.fut7-position-card.midfielder`,
        description: "Controla o ritmo do jogo, distribui passes e apoia tanto o ataque quanto a defesa.",
        background: "#FF8C0022",
    },
    pivot: {
        title: msg`component.fut7-position-card.pivot`,
        description: "Referência no ataque. Recebe de costas para o gol, protege a bola e finaliza com precisão.",
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
