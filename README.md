<p><b>Lottery Smart Contract</b></p>

<p><b>Contract Deployed (Rinkeby Network) - Address: 0x7cB67db9E05241b8Db580F12b017eF8a86afAfEE</b></p>

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

<br />
<br />

<p>You don't have access to a random number function with solidity... <br />
instead using the Current Block Difficulty, the Current Time, and Addresses Of Players, hashing them, and then using the 
hex number to pick a player. <br />
hex % players.length --> random number between 0 and players.length </p>