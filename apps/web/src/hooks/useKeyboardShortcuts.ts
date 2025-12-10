import { useEffect } from "react";

interface KeyboardShortcut {
  key: string;
  ctrl?: boolean;
  meta?: boolean;
  shift?: boolean;
  alt?: boolean;
  callback: () => void;
  description: string;
}

interface UseKeyboardShortcutsOptions {
  enabled?: boolean;
}

export function useKeyboardShortcuts(
  shortcuts: KeyboardShortcut[],
  options: UseKeyboardShortcutsOptions = {},
) {
  const { enabled = true } = options;

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Don't trigger shortcuts when user is typing in input/textarea
      const target = event.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        // Allow Escape key even in inputs
        if (event.key !== "Escape") {
          return;
        }
      }

      for (const shortcut of shortcuts) {
        const ctrlMatch = shortcut.ctrl ? event.ctrlKey : true;
        const metaMatch = shortcut.meta ? event.metaKey : true;
        const shiftMatch = shortcut.shift ? event.shiftKey : true;
        const altMatch = shortcut.alt ? event.altKey : true;
        const keyMatch = event.key.toLowerCase() === shortcut.key.toLowerCase();

        // Check if modifier keys that should be pressed are pressed
        const modifierPressed = shortcut.ctrl || shortcut.meta;
        const correctModifier = modifierPressed
          ? (shortcut.ctrl && event.ctrlKey) || (shortcut.meta && event.metaKey)
          : true;

        if (
          keyMatch &&
          correctModifier &&
          (!shortcut.shift || shiftMatch) &&
          (!shortcut.alt || altMatch)
        ) {
          // Don't check if ctrl/meta are NOT pressed when they should be
          if (modifierPressed && !event.ctrlKey && !event.metaKey) {
            continue;
          }

          event.preventDefault();
          shortcut.callback();
          break;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [shortcuts, enabled]);

  return { shortcuts };
}

// Common keyboard shortcuts helper
export const commonShortcuts = {
  save: (callback: () => void): KeyboardShortcut => ({
    key: "s",
    ctrl: true,
    meta: true,
    description: "Save content",
    callback,
  }),

  copy: (callback: () => void): KeyboardShortcut => ({
    key: "c",
    ctrl: true,
    meta: true,
    shift: true,
    description: "Copy to clipboard",
    callback,
  }),

  generate: (callback: () => void): KeyboardShortcut => ({
    key: "Enter",
    ctrl: true,
    meta: true,
    description: "Generate blog post",
    callback,
  }),

  stop: (callback: () => void): KeyboardShortcut => ({
    key: "Escape",
    description: "Stop generation",
    callback,
  }),

  reset: (callback: () => void): KeyboardShortcut => ({
    key: "r",
    ctrl: true,
    meta: true,
    description: "Reset form",
    callback,
  }),

  preview: (callback: () => void): KeyboardShortcut => ({
    key: "p",
    ctrl: true,
    meta: true,
    description: "Toggle preview",
    callback,
  }),

  export: (callback: () => void): KeyboardShortcut => ({
    key: "e",
    ctrl: true,
    meta: true,
    description: "Export content",
    callback,
  }),

  help: (callback: () => void): KeyboardShortcut => ({
    key: "?",
    shift: true,
    description: "Show keyboard shortcuts",
    callback,
  }),
};
