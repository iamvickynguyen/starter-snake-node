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
<s>a. How can we do it? (1/1/2021) </br></s>
<s>b. Brainstorm edge cases (consider if flow is good enough)? (1/1/2021)</s> </br>
c. Implement algorithms? </br>
<ol>
  <li> class Board, Snake </li>
  <li> A star </li>
  <li> Put weight: longer snake head: 50, snake body: 20, cell around other snake bodies and longer snake heads: 50,
</ol>
 

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
Otherwise, secure a food and chasing its tail around it. (ideally length in this step: >=11) </br>
........... </br>
....\*\*\*\*... </br>
....\*..\*... </br>
....\*.#\*... </br>
......@\*... </br>
........... </br>


## Vicky
1. eat food until length is at least 2nd longest (if there are > 2 snakes) </br>
<ul>
  <li> don't use A* or BFS to check food paths
  <li> use sqrt((x1^2 - x2^2) + (y1^2 - y22)) for each food and all the snakes (don't care about obstacles and whatnot)
  <li> sort shortest food path and check if our path to a food is shorter than other snakes' paths, if yes, eat it
</ul>
while: </br>
&nbsp;  2. secure 1 food in a good position (preferably a location where our snake can span roughly half of the board) </br>
&nbsp;  3. chase tail around the food, keep enough space to get out </br>
<ul>
  <li> make a regtangle for now
</ul>
&nbsp;  5. eat it when blood <= 10 </br>
&nbsp;  6. kill others if we have a chance </br>
<ul>
  <li> head collision if longer
  <li> secure a food and chase tail already reduce our snakes' space
</ul>
&nbsp;  7. if no available move, chase tail until death </br>
