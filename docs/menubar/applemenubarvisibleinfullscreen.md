---
title: Autohide | Menubar
description: Autohides the Menubar.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Menubar > Autohide
  - - meta
    - property: 'og:description'
      content: Autohides the Menubar.
---

# Display in fullscreen

Display the menubar in fullscreen mode.

`Automatically hide and show the menu bar` is a combination of **Autohide** and **Display in fullscreen**
It has 4 possible values:
- `Always`
- `In Full Screen Only`
- `On Desktop Only`
- `Never`
The default value is `In Full Screen Only`.

|                       | Autohide menubar | Menubar visible in fullscreen |
|-----------------------|------------------|-------------------------------|
| `Always`              | `true`           | `false`                       |
| `In Full Screen Only` | `false`          | `false`                       |
| `On Desktop Only`     | `true`           | `true`                        |
| `Never`               | `false`          | `true`                        |

<!-- break lists -->

- **Tested on macOS**:
  - Sonoma
- **Parameter type**: bool

## Set to `false` (default value)

Hide the menubar in fullscreen mode.

```bash
defaults write NSGlobalDomain "AppleMenuBarVisibleInFullscreen" -bool "false"
```

<video autoplay loop muted playsinline width="742" height="202" style="max-width: 100%; height: auto">
  <source src="./images/AppleMenuBarVisibleInFullscreen/false.mp4" type="video/mp4">
  Example output with value set to false
</video>

## Set to `true`

Display the menubar in fullscreen mode.

```bash
defaults write NSGlobalDomain "AppleMenuBarVisibleInFullscreen" -bool "true"
```

<video autoplay loop muted playsinline width="742" height="202" style="max-width: 100%; height: auto">
  <source src="./images/AppleMenuBarVisibleInFullscreen/true.mp4" type="video/mp4">
  Example output with value set to true
</video>

## Read current value

```bash
defaults read NSGlobalDomain "AppleMenuBarVisibleInFullscreen"
```

## Reset to default value

```bash
defaults delete NSGlobalDomain "AppleMenuBarVisibleInFullscreen"
```

## Set value from UI

1. <a href="x-apple.systempreferences:com.apple.preference.dock?ControlCenter">Access ControlCenter settings from macOS UI</a>
2. Toggle "Automatically hide and show the menu bar" value
