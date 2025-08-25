import type { Modes } from "./App";

type ModeSelectScreenProps = {
    onSelect: (mode: Modes) => void;
};

export default function ModeSelectScreen({ onSelect }: ModeSelectScreenProps) {
    return (
        <div>
            <input type="submit" name="mode" value="player" onClick={_ => onSelect("player")} />
            <input type="submit" name="mode" value="controller" onClick={_ => onSelect("controller")} />
        </div>
    );
}