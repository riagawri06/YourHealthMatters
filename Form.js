class Form { 
    constructor(){
        this.title = createElement('h1', "Your Health Matters");
        this.test = createButton("Let's Get Testified");
        this.aboutMe = createButton("About Me");
        this.aboutText = createElement('h3', "About The App<br><br> Balance your Life<br><br> Health is Wealth. <br> Being Healthy and Fit is the Biggest Asset in our life. <br> It is our responsbility that we take care of our body. <br> Body is our engine and perfect diet keeps it up and running. <br> This application will help any person to keep track and monitor his or her diet. <br> This will also cover, guide and advise the individual on his diet to stay fit & healthy.");
        this.aboutText.hide();
        this.back = createButton("Back");
        this.back.hide();
        
        this.c1 = createCheckbox('DAL', false);
        this.c1.hide();

        this.c2 = createCheckbox('RICE', false);
        this.c2.hide();

        this.c3 = createCheckbox('WHEAT CHAPPATI', false);
        this.c3.hide();

        this.c4 = createCheckbox('PANEER', false);
        this.c4.hide();

        this.c5 = createCheckbox('MUSHROOM', false);
        this.c5.hide();

        this.c6 = createCheckbox('CHICKEN', false);
        this.c6.hide();

        this.c7 = createCheckbox('SALAD', false);
        this.c7.hide();

        this.c8 = createCheckbox('EGG', false);
        this.c8.hide();

        this.c9 = createCheckbox('POTATO', false);
        this.c9.hide();

        this.c10 = createCheckbox('SOYABEAN', false);
        this.c10.hide();

        this.submit = createButton("See The Outcome");
        this.submit.hide();

        this.diet = createButton("Balanced Diet");
        this.dietText = createElement('h3', "Balanced Diet<br><br> A balanced diet is a diet that contains differing kinds of foods in certain quantities and proportions so that the requirement for calories, proteins, minerals, vitamins and alternative nutrients is adequate and a small provision is reserved for additional nutrients to endure the short length of leanness.");
        this.dietText.hide();
        
        this.rice = createElement('h3');
        this.rice.hide();
        
        this.dal = createElement('h3');
        this.dal.hide();
        
        this.chappati = createElement('h3');
        this.chappati.hide();
        
        this.paneer = createElement('h3');
        this.paneer.hide();

        this.mushroom = createElement('h3');
        this.mushroom.hide();

        this.chicken = createElement('h3');
        this.chicken.hide();

        this.salad = createElement('h3');
        this.salad.hide();

        this.egg = createElement('h3');
        this.egg.hide();

        this.potato = createElement('h3');
        this.potato.hide();

        this.soyabean = createElement('h3');
        this.soyabean.hide();
    }
    display(){
        this.title.position(displayWidth/2 - 150, 275);
        this.test.position(displayWidth/2 - 150, 375);
        this.aboutMe.position(displayWidth/2 + 50, 375);
        this.diet.position(displayWidth/2 - 50, 440)
        this.test.mousePressed(()=>{
            c = 1
            this.title.hide();
            this.test.hide();
            this.aboutMe.hide();
            this.diet.hide();
            this.c1.show();
            this.c1.position(displayWidth/2 - 400, 50);
            this.c2.show();
            this.c2.position(displayWidth/2 - 400, 100);
            this.c3.show();
            this.c3.position(displayWidth/2 - 400, 150);
            this.c4.show();
            this.c4.position(displayWidth/2 - 400, 200);
            this.c5.show();
            this.c5.position(displayWidth/2 - 200, 50);
            this.c6.show();
            this.c6.position(displayWidth/2 - 200, 100);
            this.c7.show();
            this.c7.position(displayWidth/2 - 200, 150);
            this.c8.show();
            this.c8.position(displayWidth/2 - 200, 200);
            this.c9.show();
            this.c9.position(displayWidth/2, 50);
            this.c10.show();
            this.c10.position(displayWidth/2, 100);

            this.submit.show();
            this.submit.position(displayWidth/2 - 50, 500);
        })

        this.submit.mousePressed(()=>{
            c = 2
            this.back.show();
            this.back.position(displayWidth - 100, 60);
            this.c1.hide();
            this.c2.hide();
            this.c3.hide();
            this.c4.hide();
            this.c5.hide();
            this.c6.hide();
            this.c7.hide();
            this.c8.hide();
            this.c9.hide();
            this.c10.hide();
            this.submit.hide();


            if(this.c2.checked()){
                this.rice.show();
                this.rice.html("RICE<br> Calories: 242<br> Fat : 0.4 g<br> Carbohydrates: 53.4g<br> Fiber: 0.6g<br> Protein: 4.4g");
                this.rice.position(displayWidth/2 - 500, 10);
            }

            if(this.c1.checked()){
                this.dal.show();
                this.dal.html("DAL<br> Protein: 17.1 g<br> Fat: 5.3 g<br> Calories: 360<br> Fiber: 6.6 g<br> Carbohydrates: 8 g");
                this.dal.position(displayWidth/2 - 250, 10);
            }
            
            if(this.c3.checked()){
                this.chappati.show();
                this.chappati.html("WHEAT CHAPPATI<br> Protein: 3g<br> Fat: 3.7g<br> Calories: 104<br> Fiber: 2.6 g<br> Carbohydrates: 15g");
                this.chappati.position(displayWidth/2 - 500, 150);
            }
            if(this.c4.checked()){
                this.paneer.show();
                this.paneer.html("PANEER<br>Protein: 23g<br> Fat: 22g<br> Calories: 296 <br>Carbohydrates: 6.1g");
                this.paneer.position(displayWidth/2 - 250, 150);
            }
            if(this.c5.checked()){
                this.mushroom.show();
                this.mushroom.html("MUSHROOM<br>Protein: 3.1g<br>Fat: 0.3g<br>Calories: 22<br> Fiber: 1g<br> Carbohydrates: 3.3g");
                this.mushroom.position(displayWidth/2 - 500, 300);
            }
            if(this.c6.checked()){
                this.chicken.show();
                this.chicken.html("CHICKEN<br>Protein: 14g<br>Fat: 9g<br>Calories: 140");
                this.chicken.position(displayWidth/2 - 500, 200);
            }
            if(this.c7.checked()){
                this.salad.show();
                this.salad.html("SALAD<br>Protein: 1.4g<br>Fat: 10.3g<br>Calories: 199<br> Fiber: 2.8g<br> Carbohydrates: 27.7g");
                this.salad.position(displayWidth/2 - 500, 50);
            }
            if(this.c8.checked()){
                this.egg.show();
                this.egg.html("EGG<br>Protein: 13g<br>Fat: 11g<br>Calories: 155<br> Carbohydrates: 1.1g");
                this.egg.position(displayWidth/2 - 500, 0);
            }
            if(this.c9.checked()){
                this.potato.show();
                this.potato.html("POTATO<br>Protein: 2g<br>Fat: 0.1g<br>Calories: 77<br> Fiber: 2.2g<br> Carbohydrates: 17g");
                this.potato.position(displayWidth/2 - 500, 400);
            }
            if(this.c10.checked()){
                this.soyabean.show();
                this.soyabean.html("SOYABEAN<br>Protein: 36g<br>Fat: 4.5g<br>Calories: 81<br> Fiber: 9g<br> Carbohydrates: 7g");
                this.soyabean.position(displayWidth/2 - 500, 400);
            }
        })
            this.aboutMe.mousePressed(()=>{
            c = 3
            this.back.show();
            this.back.position(displayWidth - 100, 60);
            this.aboutMe.hide();
            this.test.hide();
            this.title.hide();
            this.aboutText.show();
            this.aboutText.position(displayWidth/2 - 200, 100);
            this.diet.hide();
        })
        
        this.diet.mousePressed(()=>{
            c = 3
            this.back.show();
            this.back.position(displayWidth - 100, 60);
            this.aboutMe.hide();
            this.test.hide();
            this.title.hide();
            this.diet.hide();
            this.dietText.show();
            this.dietText.position(displayWidth/2 - 600, 120);
        })
        
        this.back.mousePressed(()=>{
            c = 0
            this.back.hide();
            this.title.show();
            this.aboutMe.show();
            this.test.show();
            this.diet.show();
            this.aboutText.hide();
            this.chappati.hide();
            this.rice.hide();
            this.dal.hide();
            this.mushroom.hide();
            this.dietText.hide();
            this.chicken.hide();
            this.salad.hide();
            this.potato.hide();
            this.soyabean.hide();
            this.egg.hide();
            this.paneer.hide();

        })

    }


}
    