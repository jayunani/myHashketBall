var games = [

    {
    team: "Clippers",
    colors: ["white", "blue"],
    players: [
        {name: "Cole D. Aldridge",
              number: 45,
              shoe_size: 14,
              stats: {points: 2.1, rebounds:2.9, assists: 1.1, steals: 2.1, blocks:1.8, slam_dunks: 0.4}
        },

      {name: "Jeff Ayres",
              number: 19,
              shoe_size: 16,
              stats: {points: 3.5, rebounds:2.9, assists: 1.1, steals: 2.1, blocks:1.8, slam_dunks: 1.4}
      },
      {name: "Jamal Crawford",
              number: 11,
              shoe_size: 22,
              stats: {points: 0.5, rebounds:2.9, assists: 1.1, steals: 2.1, blocks:1.8, slam_dunks: 0.4}
      },

      {name: "Branden Dawson",
              number: 22,
              shoe_size: 20,
              stats: {points: 8.5, rebounds:2.9, assists: 1.1, steals: 2.1, blocks:1.8, slam_dunks: 1.4}
      },
      {name: "Blake Griffin",
              number: 32,
              shoe_size: 15,
              stats: {points: 6.5, rebounds:2.9, assists: 1.1, steals: 2.1, blocks:2.8, slam_dunks: 1.4} }

        ]
    },
  {
    team:"Lakers",
    colors: ["yellow", "purple"],
    players: [
      {name: "Brandon Bass",
              number: 2,
              shoe_size: 14,
              stats:
                {points: 2.5, rebounds:2.9, assists: 1.1, steals: 2.1, blocks:1.8, slam_dunks: 0.4}

      },

      {name: "Tarik Black",
              number: 19,
              shoe_size: 16,
              stats:
                {points: 2.5, rebounds:2.9, assists: 1.1, steals: 2.1, blocks:1.8, slam_dunks: 0.4}
      },
      {name: "Anthony Broqn",
              number: 11,
              shoe_size: 23,
              stats:
                {points: 4.8, rebounds:1.9, assists: 5.4, steals: 2.1, blocks: 1.4, slam_dunks: 1.4}
      },

      {name: "Kobe Bryant",
              number: 22,
              shoe_size: 20,
              stats:
                {points: 5.6, rebounds:2.1, assists: 1.9, steals: 2.1, blocks: 2.8, slam_dunks: 5.4}
      },
      {name: "Blake Smith",
              number: 32,
              shoe_size: 15,
              stats:
                {points: 9.4, rebounds:2.9, assists: 1.9, steals: 2.1, blocks: 2.1, slam_dunks: 2.4}}]

}];

// 1 Return the number of points scored for any player:
// 2 Return the shoe size for any player:
// 3 Return both colors for any team:
// 4 Return both teams names:
// 5 Return all the player numbers for a team:
// 6 Return all the stats for a player:
// 7 Return the rebounds for the player with the largest shoe size
// 8 Which player has the most points?
// 9 Which team has the most points?
// 10 Which player has the longest name?
// 11 Write a method that returns true if the player with the longest name had the most steals:

// #1 Return the number of points scored for any player:

var returnPoints = function(name) {
  for (var i = 0; i < games.length; i++) {
    for (var j = 0; j < games[i].players.length; j++) {
      if (games[i].players[j].name === name) {
        return games[i].players[j].stats.points;
      }
    }
  }
}
//console.log(returnPoints("Kobe Bryant")) // 5.6

// #2 Return the shoe size for any player:
var shoeSize = function(name) {
  for(var i = 0; i < games.length; i++) {
    for(var j = 0; j < games[i].players.length; j++) {
      if (games[i].players[j].name === name) {
        return games[i].players[j].shoe_size;
      }
    }
  }
}
//console.log(shoeSize("Blake Smith")) // 15

// #3 Return both colors for any team:
var teamColors = function(team) {
  for(var i = 0; i < games.length; i++) {
    if(games[i].team === team) {
      return games[i].colors;
    }
  }
}
//console.log(teamColors("Lakers")) // ["yellow", "purple"]

// #4 Return both teams names:
var teamNames = function(game) {
  var myArray = [];
    for(var i = 0; i < game.length; i++) {
      myArray.push(game[i].team);
    }
  return myArray;
}
//console.log(teamNames(games)) // ["Clippers", "Lakers"]

// #5 Return all the player numbers for a team:
var playerNumbers = function(team) {
  var results = [];
  for(var i = 0; i < games.length; i++) {
    if(games[i].team === team) {
      for(var j = 0; j < games[i].players.length; j++) {
        results.push(games[i].players[j].number);
      }
    }
  }
  return results;
}
//console.log(playerNumbers("Lakers")) // [2, 19, 11, 22, 32]

// #6 Return all the stats for a player:
var playerStats = function(player) {
  for(var i = 0; i < games.length; i++) {
    for(var j = 0; j < games[i].players.length; j++) {
      if(games[i].players[j].name === player) {
        return (games[i].players[j].stats)
      }
    }
  }
}
//console.log(playerStats("Blake Griffin"))  
//{points: 2.1, rebounds:2.9, assists: 1.1, steals: 2.1, blocks:1.8, slam_dunks: 0.4}

//#7 Return the rebounds for the player with the largest shoe size
var returnRebounds = function(game){
  var counter = 0;
  for(var i = 0; i < games.length; i++) {
    for (var j = 0; j < games[i].players.length; j++) {
      if (games[i].players[j].shoe_size > counter) {
            counter = games[i].players[j].shoe_size;
      }
      
    }
  }
  for(var i = 0; i < games.length; i++) {
    for (var j = 0; j < games[i].players.length; j++) {
      if (games[i].players[j].shoe_size === counter) {
        return games[i].players[j].stats.rebounds;
      }
    }
  }
}
//console.log(returnRebounds(games)) // 1.9

//#8 Which player has the most points?
var mostPoints = function(game){
  var counter = 0;
  for(var i = 0; i < games.length; i++){
    for(var j = 0; j < games[i].players.length; j++){
      if (games[i].players[j].stats.points > counter) {
          counter = games[i].players[j].stats.points;
      }
    }
  }
  for(var i = 0; i < games.length; i++){
    for(var j = 0; j < games[i].players.length; j++){
      if (games[i].players[j].stats.points === counter) {
          return games[i].players[j].name;
      }
    }
  }
}
//console.log(mostPoints(games)) // "Blake Smith"

//#9 Which team has the most points?
var mostTeamPoints = function(game) {
  var teamOne = 0;
  var teamTwo = 0;
  for(var i = 0; i < games.length; i++) {
    if (games[i].team === "Clippers") {
      for(var j = 0; j < games[i].players.length; j++) {
        teamOne += games[i].players[j].stats.points;
      }
    } else {
      for(var k = 0; k < games[i].players.length; k++) {
        teamTwo += games[i].players[k].stats.points;
      }
    }
  }
  if (teamOne > teamTwo) {
    return "Clippers"
  } else {
    return "Lakers"
  }
}
//console.log(mostTeamPoints(games)) // "Lakers"

//#10 Which player has the longest name?
var longestName = function(game) {
  var counter = 0;
  for(var i = 0; i < games.length; i++) {
    for(var j = 0; j < games[i].players.length; j++) {
      if (games[i].players[j].name.length > counter) {
        counter = games[i].players[j].name.length;
      }
    }
  }
  for(var i = 0; i < games.length; i++) {
    for(var j = 0; j < games[i].players.length; j++) {
      if (games[i].players[j].name.length === counter) {
        return games[i].players[j].name;
      }
    }
  }
}

//console.log(longestNames(games)) // "Jamal Crawford"

//#11 Write a method that returns true if the player with the longest name had the 
//most steals:

var longestNameMostSteals = function(game){
  var name = longestName(games);
  var playerName;
  var counter = 0;
  for(var i = 0; i < games.length; i++){
    for(var j = 0; j < games[i].players.length; j++){
      if (games[i].players[j].stats.points > counter) {
          counter = games[i].players[j].stats.steals;
      }
    }
  }
  for(var i = 0; i < games.length; i++){
    for(var j = 0; j < games[i].players.length; j++){
      if (games[i].players[j].stats.steals === counter) {
          playerName = games[i].players[j].name;
      }
    }
  }
  if (name === playerName) {
    return true;
  } else {
    return false;
  }
}
//console.log(longestNameMostSteals(games)); //false









