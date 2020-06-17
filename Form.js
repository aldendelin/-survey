class Form{
    constructor(){

    }

    display(){
        var title = createElement('h2');
        title.html('SURVEY');
        title.position(130,0);
        var input = createInput('emailID');
        var button = createButton('enter');
        var greeting = createElement('h3');
        input.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var email = input.value();
            voterCount=voterCount+1;
            voter.update(email);
            voter.updateCount(voterCount);
            greeting.html("Hello");
            greeting.position(130,160);
        })
    }
}