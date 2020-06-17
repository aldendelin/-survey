class Voter{
    constructor(){

    }

    getCount(){
        var databaseRef = database.ref('voterCount');
        databaseRef.on('value',function(data){
             voterCount = data.val()
        });
    }

    update(email){
          var voterIndex = "voter"+voterCount;
          database.ref(voterIndex).set({
              email: email
          })
    }

    updateCount(count){
       database.ref('/').update({
           voterCount:count
       })
    }

}