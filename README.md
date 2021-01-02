# Nodejs Battlesnake
## Flow:
1. eat food until length is long enough (how long?) </br>
while: </br>
&nbsp;  2. find good position </br>
&nbsp;  3. secure 1 food </br>
&nbsp;  4. chase tail around the food, keep enough space to get out (how?)</br>
&nbsp;  5. keep the space inside as big as possible </br>
&nbsp;  5. eat it when blood <= 10 </br>
&nbsp;  6. kill others if we have a chance (kill?)</br>
&nbsp;  7. if no available move, chase tail until death </br>

## TO DO:
1. How can we do it? (1/1/2021) </br>
2. Implement algorithms? </br>
3. Brainstorm edge cases (consider if flow is good enough)? (1/1/2021)

## Irene
Using flood fill to find dead end and fill them </br>
In the early game, using A* to eat the nearest food until reaching a size of 10 </br>
If there's no safe food, start to chase its tail </br>
If the tail is too far/not safe to reach/may limit the reachable space, chase the nearest tail instead </br>
If there's no available tail, go to direction that has largest number of reachable cell (using Flood fill/BFS) </br>
When the length reaches 10, consider to kill other snakes if having chances </br>
&nbsp;  Cases: when going parallel with a shorter snake, shorter snake is in the half smaller side (2 cell distance) ==> head collision. </br>
&nbsp;  Cases: when going parallel and 1 cell ahead a snake, and that snake is next to/likely heading to the wall ==> create dead end for that snake. </br>
&nbsp;  If offensive moves put the snake in danger (making snake go into dead end, get to closed to longer snakes, etc.) ==> back to defensive mode.
Also, slowly the process of eating food, may consider to prevent other snakes to eat their safe foods if there's chance.
Otherwise, secure a food and chasing its tail around it. (ideally length in this step: >=11)
...........
....****...
....*..*...
....*.#*...
......@*...
...........


## Vicky