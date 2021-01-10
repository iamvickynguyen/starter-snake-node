# Nodejs Battlesnake
## Flow:
1. eat food until length is long enough (how long?)  \
while:  \
&nbsp;  2. find good position \
&nbsp;  3. secure 1 food \
&nbsp;  4. chase tail around the food, keep enough space to get out (how?) \
&nbsp;  5. keep the space inside as big as possible  \
&nbsp;  5. eat it when blood <= 10  \
&nbsp;  6. kill others if we have a chance (kill?) \
&nbsp;  7. if no available move, chase tail until death  \

## TO DO:
<s>a. How can we do it? (1/1/2021) </s> \
<s>b. Brainstorm edge cases (consider if flow is good enough)? (1/1/2021)</s>  \
c. Implement algorithms?  \
<ol>
  <s><li> class Board, Snake </li>
  <li> A star </li> </s>
  <li> Put weight: longer snake head: 50, snake body: 20, cell around other snake bodies and longer snake heads: 50 </li> 
  <li>sort food by distant, check distant other snakes, use astar to get food </li>
  <li> push to heroku to test </li>
</ol>
 

## Irene
Using flood fill to find dead end and fill them  \
In the early game, using A* to eat the nearest food until reaching a size of 10  \
If there's no safe food, start to chase its tail  \
If the tail is too far/not safe to reach/may limit the reachable space, chase the nearest tail instead  \
If there's no available tail, go to direction that has largest number of reachable cell (using Flood fill/BFS)  \
When the length reaches 10, consider to kill other snakes if having chances  \
&nbsp;  Cases: when going parallel with a shorter snake, shorter snake is in the half smaller side (2 cell distance) ==> head collision.  \
&nbsp;  Cases: when going parallel and 1 cell ahead a snake, and that snake is next to/likely heading to the wall ==> create dead end for that snake.  \
&nbsp;  If offensive moves put the snake in danger (making snake go into dead end, get to closed to longer snakes, etc.) ==> back to defensive mode.
Also, slowly the process of eating food, may consider to prevent other snakes to eat their safe foods if there's chance.
Otherwise, secure a food and chasing its tail around it. (ideally length in this step: >=11)  \
...........  \
....\*\*\*\*...  \
....\*..\*...  \
....\*.#\*...  \
......@\*...  \
...........  \


## Vicky
1. eat food until length is at least 2nd longest (if there are > 2 snakes)  \
<ul>
  <li> don't use A* or BFS to check food paths
  <li> use sqrt((x1^2 - x2^2) + (y1^2 - y22)) for each food and all the snakes (don't care about obstacles and whatnot)
  <li> sort shortest food path and check if our path to a food is shorter than other snakes' paths, if yes, eat it
</ul>
while:  \
&nbsp;  2. secure 1 food in a good position (preferably a location where our snake can span roughly half of the board)  \
&nbsp;  3. chase tail around the food, keep enough space to get out  \
<ul>
  <li> make a regtangle for now
</ul>
<s>&nbsp;  5. eat it when blood <= 10  \ </s>
&nbsp;  6. kill others if we have a chance  \
<ul>
  <li> head collision if longer
  <li> secure a food and chase tail already reduce other snakes' space
</ul>
&nbsp;  7. if no available move, chase tail until death  \
