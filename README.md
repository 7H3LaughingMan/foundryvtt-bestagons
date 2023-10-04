# Foundry VTT - Hexagons Are The Bestagons!

Have you ever noticed that sometimes when you're using the ruler, a template, or another module to select a hex that it sometimes is a little off? Like when your mouse goes too far down or to the right of a hex it thinks you're on a different hex. Well, if you have it can be quite annoying right? This module fixes that problem with Foundry VTT.

The simplest explanation of the problem is that Foundry VTT isn't checking if your cursor is within a hexagon, but instead checking to see if it's inside a rectangle. This means that parts of the rectangle include portions of other hexes and is missing portions of the hex it is supposed to represent. To fix this we need to use the power of the **Pythagorean Theorem** to check if the cursor is in one of those spots and if so correct Foundry VTT by telling it that the cursor is over a different hex.

This is a very simple module; all it's doing is replacing a single function in Foundry VTT. Hopefully this small fix can be included in a future Foundry VTT update.

## Details

As I mentioned above Foundry VTT isn't checking to see if a point is within a hex, instead it kind of cheats and breaks it down into rectangles. It's just checking to see what rectangle a point would fall into which is pretty simple. The problem as you can see below is that parts of the rectangle include adjacent hexes and if you hover your mouse over those spots, it will think you are hovering over a different hex. If you take a look at it those sections are actually two triangles. So by using the arcane arts known as the **Pythagorean Theorem** we can actually check to see if the point is in one of those triangles or not.

![Hexagon Row Hitbox](https://github.com/7H3LaughingMan/foundryvtt-bestagons/blob/main/images/hexagon-row-hitbox.png?raw=true)

![Hexagon Column Hitbox](https://github.com/7H3LaughingMan/foundryvtt-bestagons/blob/main/images/hexagon-column-hitbox.png?raw=true)
