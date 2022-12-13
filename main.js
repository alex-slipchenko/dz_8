let ladder = {
    step: 0,
    up: function () {
        this.step++;
        console.log(this.step);
        return this;
    },
    down: function () { 
        this.step--;
        console.log(this.step);
        
        return this;
    },
    showStep: function () {
        alert(this.step);
        return this;
    }
};

ladder.up().up().down().showStep();
