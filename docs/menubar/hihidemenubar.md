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

# Autohide

Autohides the menubar.

`Automatically hide and show the menu bar` is a combination of **Autohide** and **Visible in fullscreen**

It has 4 possible values:
- `Always`
- `Full Screen Only`
- `Desktop Only`
- `Never`

The default value is `Full Screen Only`.

|                       | Autohide menubar | Menubar visible in fullscreen |
|-----------------------|:----------------:|:-----------------------------:|
| **Always**            | `true`           | `false`                       |
| **Full Screen Only**  | `false`          | `false`                       |
| **Desktop Only**      | `true`           | `true`                        |
| **Never**             | `false`          | `true`                        |

<!-- break lists -->

- **Tested on macOS**:
  - Sonoma
- **Parameter type**: bool

## Set to `false` (default value)

Display the menu bar when not in fullscreen mode.

```bash
defaults write NSGlobalDomain "_HIHideMenuBar" -bool "false"
```

<video autoplay loop muted playsinline width="742" height="202" style="max-width: 100%; height: auto">
  <source src="./images/_HIHideMenuBar/false.mp4" type="video/mp4">
  Example output with value set to false
</video>

## Set to `true`

Autohide the menu bar when not in fullscreen mode.

```bash
defaults write NSGlobalDomain "_HIHideMenuBar" -bool "true"
```

<video autoplay loop muted playsinline width="742" height="202" style="max-width: 100%; height: auto">
  <source src="./images/_HIHideMenuBar/true.mp4" type="video/mp4">
  Example output with value set to true
</video>

## Read current value

```bash
defaults read NSGlobalDomain "_HIHideMenuBar"
```

## Reset to default value

```bash
defaults delete NSGlobalDomain "_HIHideMenuBar"
```

## Set value from UI

1. <a href="x-apple.systempreferences:com.apple.preference.dock?ControlCenter">Access ControlCenter settings from macOS UI</a>
2. Toggle "Automatically hide and show the menu bar" value
