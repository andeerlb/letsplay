import React from "react";
import { BasePositionCard } from "./BasePositionCard";
import { msg } from "@lingui/core/macro";

const FUT11_POSITIONS = {
    goalkeeper: {
        title: msg`component.fut11-position-card.goalkeeper`,
        description: "Guarda o gol com reflexos rápidos e liderança defensiva.",
        background: "#1E90FF22",
    },
    right_back: {
        title: msg`component.fut11-position-card.right_back`,
        description: "Apoia o ataque e recompõe na defesa pelo lado direito.",
        background: "#32CD3222",
    },
    left_back: {
        title: msg`component.fut11-position-card.left_back`,
        description: "Avança com velocidade pela esquerda e marca com firmeza.",
        background: "#FF69B422",
    },
    center_back: {
        title: msg`component.fut11-position-card.center_back`,
        description: "Defende com força e posicionamento. Pilar da defesa.",
        background: "#FFD70022",
    },
    defensive_midfielder: {
        title: msg`component.fut11-position-card.defensive_midfielder`,
        description: "Protege a defesa e distribui o jogo com inteligência.",
        background: "#8B451322",
    },
    central_midfielder: {
        title: msg`component.fut11-position-card.central_midfielder`,
        description: "Controla o meio campo, organiza o jogo e dá ritmo.",
        background: "#FF8C0022",
    },
    attacking_midfielder: {
        title: msg`component.fut11-position-card.attacking_midfielder`,
        description: "Cria jogadas e chega ao ataque com criatividade.",
        background: "#8A2BE222",
    },
    right_winger: {
        title: msg`component.fut11-position-card.right_winger`,
        description: "Ataca com velocidade e cruza bolas perigosas.",
        background: "#00CED122",
    },
    left_winger: {
        title: msg`component.fut11-position-card.left_winger`,
        description: "Dribla e finaliza cortando da esquerda.",
        background: "#FF634722",
    },
    striker: {
        title: msg`component.fut11-position-card.striker`,
        description: "Finaliza com precisão e posicionamento cirúrgico.",
        background: "#DC143C22",
    },
    center_forward: {
        title: msg`component.fut11-position-card.center_forward`,
        description: "Referência ofensiva, joga de costas para o gol e finaliza.",
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
