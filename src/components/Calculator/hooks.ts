import {useState} from "react";
import * as math from "mathjs";

export const useCalculator = () => {
    const [label, setLabel] = useState('');

    const overwriteDisplay = (newLabel: string) => {
        setLabel(newLabel);
    }

    const addToDisplay = (subLabel: string) => {
        setLabel(`${label}${subLabel}`);
    }

    const onCalc = () => {
        try {
            const result = math.evaluate(label);
            setLabel(result);
        } catch (error) {
            setLabel('Error');
        }
    }

    const onRemoveSymbol = () => {
        setLabel(label.slice(0, -1));
    }

    return {
        label,
        setLabel,
        overwriteDisplay,
        addToDisplay,
        onCalc,
        onRemoveSymbol
    }

}
