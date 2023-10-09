import React, { useState } from "react";
import Toggle from "react-toggle";
import { Switch } from '@headlessui/react'
import { useMediaQuery } from "react-responsive";
import createPersistedState from "use-persisted-state";
import { useEffect, useMemo } from "react";
const useColorSchemeState = createPersistedState("colorScheme");

export const DarkModeToggle = () => {
    const { isDark, setIsDark } = useColorScheme();
    const [isIcon, setIsIcon] = useState(false);

    return (
        <Switch
            checked={isDark}
            onChange={setIsDark}
            className="dark-mode-icon" onClick={() => setIsIcon(!isIcon)}>
            {isIcon ? "🔆" : "🌙"}
        </Switch>
    );
};

export function useColorScheme() {
    const systemPrefersDark = useMediaQuery(
        {
            query: "(prefers-color-scheme: dark)",
        },
        undefined
    );

    const [isDark, setIsDark] = useColorSchemeState();
    const value = useMemo(
        () => (isDark === undefined ? !!systemPrefersDark : isDark),
        [isDark, systemPrefersDark]
    );

    useEffect(() => {
        if (value) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [value]);

    return {
        isDark: value,
        setIsDark,
    };
}
