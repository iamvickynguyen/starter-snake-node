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
