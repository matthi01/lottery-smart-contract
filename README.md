<p>Lottery Smart Contract</p>

<p>This contract consists of a prize pool (collection of ether) and players.</p>
<p>Once a player has submitted money to the contract (prize pool) they will automatically be recorded as a player in the lottery. </p>
<p>Once enough people have entered the contract, a third party manager will TELL THE CONTRACT to pick a winner from the players</p>
<p>Once a winner is picked, all the money in the prize pool will be sent to the winning player.</p>
<p>At that point the contract will reset and will be ready to accept new players again.</p>

<br />
<br />

<p>Variables</p>
<ul>
    <li>manager (address of person who created contract)</li>
    <li>players (array of addresses of people who entered the contract)</li>
</ul>

<p>Functions</p>
<ul>
    <li>enter</li>
    <li>pickWinner</li>
</ul>