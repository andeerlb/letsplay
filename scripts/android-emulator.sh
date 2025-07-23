#!/bin/bash

# Android Emulator Launcher with GUM UI

# Intro: What is gum?
# gum is a tool to build rich interactive shell scripts with user-friendly UI.
# It lets you use dropdowns, input fields, confirmations, etc., in your terminal.
# https://github.com/charmbracelet/gum

# How to install gum (if missing)
if ! command -v gum &> /dev/null; then
    echo "'gum' is not installed."
    echo "Installing gum..."

    # Try installing with Homebrew (macOS/Linux)
    if command -v brew &> /dev/null; then
        brew install gum
    else
        echo "You can install it manually with one of the following:"
        echo "  macOS: brew install gum"
        echo "  Arch:  pacman -S gum"
        echo "  Debian/Ubuntu:"
        echo "      echo 'deb [trusted=yes] https://repo.charm.sh/apt/ /' | sudo tee /etc/apt/sources.list.d/charm.list"
        echo "      sudo apt update && sudo apt install gum"
        echo "  Or via Go: go install github.com/charmbracelet/gum@latest"
        exit 1
    fi
fi

# List available AVDs
AVD_LIST=$(emulator -list-avds)

if [ -z "$AVD_LIST" ]; then
    echo "No emulators found. Please create one using Android Studio AVD Manager."
    exit 1
fi

# Select emulator
SELECTED_AVD=$(echo "$AVD_LIST" | gum choose --header="Select an emulator:")

# Select memory (RAM in GB)
MEMORY=$(gum choose --header="Select RAM (in GB):" 1 2 4 6 8)

# Select writable system option
WRITABLE=$(gum choose --header="Enable writable system?" "Yes" "No")

# Build command
CMD="emulator -avd \"$SELECTED_AVD\" -memory $((MEMORY * 1024))"
if [ "$WRITABLE" = "Yes" ]; then
    CMD="$CMD -writable-system"
fi

# Start emulator detached (background, no hangup)
echo "Starting emulator in background (detached)..."
nohup bash -c "$CMD" > /dev/null 2>&1 &

# Wait for boot
echo "Waiting for device to be ready..."
adb wait-for-device

# Done
echo "Emulator is now ready!"
adb devices
