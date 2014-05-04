/**
 * FindController.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  'concept': function(req, res){

    var query = req.params.all();

    Game.find().where({ concepts: { contains: query.concept } }).exec(function(err, foundGames){
      if ( err || !foundGames ) {
        console.log('shit broke');
        console.log(err);
        console.log(foundGames);
        return res.send(500);
      } else {
        return res.json(foundGames);
      }
    });
  },

  'theme': function(req, res){

    var query = req.params.all();

    Game.find().where({ themes: { contains: query.theme } }).exec(function(err, foundGames){
      if ( err || !foundGames ) {
        console.log('shit broke');
        console.log(err);
        console.log(foundGames);
        return res.send(500);
      } else {
        return res.json(foundGames);
      }
    });

  },

  'platform': function(req, res){

    var query = req.params.all();

    Game.find().where({ game_platforms: { contains: query.platform } }).exec(function(err, foundGames){
      if ( err || !foundGames ) {
        console.log('shit broke');
        console.log(err);
        console.log(foundGames);
        return res.send(500);
      } else {
        return res.json(foundGames);
      }
    });

  },

  'genre': function(req, res){

    var query = req.params.all();

    Game.find().where({ genres: { contains: query.genre } }).exec(function(err, foundGames){
      if ( err || !foundGames ) {
        console.log('shit broke');
        console.log(err);
        console.log(foundGames);
        return res.send(500);
      } else {
        return res.json(foundGames);
      }
    });

  },

  'character': function(req, res){

    var query = req.params.all();

    Game.find().where({ characters: { contains: query.character } }).exec(function(err, foundGames){
      if ( err || !foundGames ) {
        console.log('shit broke');
        console.log(err);
        console.log(foundGames);
        return res.send(500);
      } else {
        return res.json(foundGames);
      }
    });

  },

  'image': function(req, res){

    var query = req.params.all();

    Game.find().where({ images: { contains: query.image } }).exec(function(err, foundGames){
      if ( err || !foundGames ) {
        console.log('shit broke');
        console.log(err);
        console.log(foundGames);
        return res.send(500);
      } else {
        return res.json(foundGames);
      }
    });

  },

  'developer': function(req, res){

    var query = req.params.all();

    Game.find().where({ developers: { contains: query.developer } }).exec(function(err, foundGames){
      if ( err || !foundGames ) {
        console.log('shit broke');
        console.log(err);
        console.log(foundGames);
        return res.send(500);
      } else {
        return res.json(foundGames);
      }
    });

  }



};
