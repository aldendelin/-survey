class Game {
    constructor(){

    }

    getState(){
        var databaseRef = database.ref('gameState');
        databaseRef.on('value',function(data){
            gameState = data.val()
        });
    }

    update(state){
          database.ref('/').update({
              gameState: state
          })
    }

    start(){
        if(gameState === 0){
            voter = new Voter();
            form = new Form();
            voter.getCount();
            form.display();
        }
    }

}