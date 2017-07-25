# JIRA ADG3
A skin for all JIRA instances running with ADG2 based on the new [ADG3](https://atlassian.design).

## Installation
Set up following as announcement banner:
```html
<style>
/* Contents of main.css */
</style>
```

### Colors
<table>
  <tbody>
    <tr>
      <td>Hintergrundfarbe Überschrift</td>
      <td>#0046b0</td>
    </tr>
    <tr>
      <td>Hintergrundfarbe Überschrift markiert</td>
      <td>#0052cc</td>
    </tr>
    <tr>
      <td>Trennzeichenfarbe Überschrift</td>
      <td>#172b4d</td>
    </tr>
    <tr>
      <td>Farbe Überschrifttext</td>
      <td>#ffffff</td>
    </tr>
    <tr>
      <td>Farbe Überschrifttext markiert</td>
      <td>#f4f5f7</td>
    </tr>
    <tr>
      <td>Menüpunkt Hintergrundfarbe für Hervorhebungen</td>
      <td>#0049b0</td>
    </tr>
    <tr>
      <td>Menüpunkt Farbe für markierten Text</td>
      <td>#ffffff</td>
    </tr>
    <tr>
      <td>Hintergrundfarbe Schaltfläche</td>
      <td>#0052cc</td>
    </tr>
    <tr>
      <td>Textfarbe Schaltfläche</td>
      <td>#ffffff</td>
    </tr>
    <tr>
      <td>Farbe Verknüpfung aktiv</td>
      <td>#2684ff</td>
    </tr>
    <tr>
      <td>Farbe Überschrift</td>
      <td>#292929</td>
    </tr>
    <tr>
      <td>Farbe Verknüpfung</td>
      <td>#0052cc</td>
    </tr>
  </tbody>
</table>

### Gadget colors
<table>
  <tbody>
    <tr>
      <td>Color 1 (default)</td>
      <td>#0052cc</td>
    </tr>
    <tr>
      <td>Color 2</td>
      <td>#ff5630</td>
    </tr>
    <tr>
      <td>Color 3</td>
      <td>#ffaa00</td>
    </tr>
    <tr>
      <td>Color 4</td>
      <td>#36b37f</td>
    </tr>
    <tr>
      <td>Color 5</td>
      <td>#00b8d9</td>
    </tr>
    <tr>
      <td>Color 6</td>
      <td>#6554c0</td>
    </tr>
    <tr>
      <td>Color 7</td>
      <td>#5e6c84</td>
    </tr>
  </tbody>
</table>

### Favicon
![facivon](res/64jira-favicon.png)<br>
All rights reserved by Atlassian.

## Build
```bash
$ npm install
$ gulp sass-compile # $ gulp for auto-compile on file-changes
```
