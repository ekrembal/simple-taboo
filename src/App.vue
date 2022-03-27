<template>
  <div class="container">
    <div class="row justify-content-center" style="text-align:center">
       <h2>Team: {{curTeam + 1}}</h2><h2> Points: {{points}}</h2>

      <!-- <div class="w3-light-grey w3-large">
        <div class="w3-container w3-green" style="height:30px"></div>
      </div> -->
    </div>
    
      <div class="progress">
        <div class="progress-bar" role="progressbar"  :style="{width:progressBarPercentage}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>


    <div class="row justify-content-center">

      <transition name="bounce">
        <Card v-if="isCardVisible" :word="card.word" :restrictedWords="card.restrictedWords"/>
      </transition>
    </div>

    <div class="row justify-content-center" style="text-align:center">
      <div class="col-md-auto">
        <div class="row">
      <div class="col"><button v-on:click="newCard(-1)" type="button" class="btn btn-danger">Taboo</button></div>
      <div class="col"><button v-on:click="newCard(0)" type="button" class="btn btn-primary" v-bind:class="{ disabled: numSkips >= 3 }">Skip</button></div>
      <div class="col"><button v-on:click="newCard(1)" type="button" class="btn btn-success">Correct</button></div>
        </div></div>
    </div>
  </div>
  <img class="footer" src="@/assets/bright_logo.png" alt="">
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    Card,
  },
  data() {
    return {
      points: -1,
      card: null,
      gameCards: [{"word": "Accredited Investor","restrictedWords":["Money","Wealthy","Business","Investor","Bank",]},{"word": "B-to-B","restrictedWords":["Business","Digital Marketing","Small Business","Email","Sales",]},{"word": "B-to-C","restrictedWords":["Business to Consumer","Company","Selling","Advertising",]},{"word": "Burn Rate","restrictedWords":["Fire","Blaze","Forest","Rate","Smoke",]},{"word": "Churn Rate","restrictedWords":["Credit","Bank","Mortgage","Income","Interest",]},{"word": "Disruptive İnnovation","restrictedWords":["Breakthrough","Think","Change","Product","Phone",]},{"word": "Exit Strategy","restrictedWords":["Business","Business Plan","Strategy","Exit","Company",]},{"word": "First Mover Advantage","restrictedWords":["Business","Company","Start","Entrepreneur","Product",]},{"word": "Intellectual Property","restrictedWords":["Copyright","Patent","Trademark","Intellectual","Lawyer",]},{"word": "Launch","restrictedWords":["Rocket","Shuttle","Blast","Lift-Off","Airplane",]},{"word": "Lean Startup","restrictedWords":["Business","Concept","Idea","Building","Startup",]},{"word": "Leverage","restrictedWords":["Cog","Machine","Gear","Force","Power",]},{"word": "Market Penetration","restrictedWords":["Strategy","Business","Product","Sales","Statistics",]},{"word": "Monetize Model","restrictedWords":["Business","Marketing","Branding","Strategy","Analytics",]},{"word": "Minimum Viable Product","restrictedWords":["Business","Product","Idea","Beta","Test",]},{"word": "Ramen Profitable","restrictedWords":["Dish","Noodles","Microwave","Packet","Instant",]},{"word": "Responsive Design","restrictedWords":["Website","Code","Responsive","Mobile","Open",]},{"word": "Return On Investment (ROI)","restrictedWords":["Profit","Company","Profit Margin","Dollar","Return",]},{"word": "SaaS","restrictedWords":["Cloud","Software","Internet","Technology","Program",]},{"word": "Traction","restrictedWords":["Snow","Ice","Car","Slippery","Skid",]},{"word": "Business Valuation","restrictedWords":["Accountant","Company","Defined","Value","Stock",]},{"word": "Value Proposition","restrictedWords":["Marketing","Advertising","Business","Customer","Offer",]},{"word": "Crowdfunding","restrictedWords":["Kickstarter","GoFundMe","Pledging","Donations","Financial",]},{"word": "Term Sheet","restrictedWords":["Contract","Financial","Investing","Borrowing","Equity",]},{"word": "Break Even Point","restrictedWords":["Accounting","Income","Profit","Loss","Expenses",]},{"word": "Preferred Stock","restrictedWords":["Investment","Company","Business","Stockholder","Shareholder",]},{"word": "Dilution","restrictedWords":["Water","Solution","Thin","Concentration","Reduce",]},{"word": "Acquisitions","restrictedWords":["Book","Buy","Sell","Trade","Shopping","Library",]},{"word": "Due Diligence","restrictedWords":["Law","Attorney","Research","Case","Case Study",]},{"word": "Initial Public Offering (IPO)","restrictedWords":["Stock","Stock Market","Company","Raise","Increase",]},{"word": "Joint Venture","restrictedWords":["Partnership","Business","Employees","Company","Goals",]},{"word": "Merger","restrictedWords":["Company","Acquire","Business","Corporate","Partnership",]},{"word": "Series A-B-C","restrictedWords":["Smallest-Largest","Numbers","Alphabet","A to Z",]},{"word": "Seed Capital","restrictedWords":["Investment","Venture","Money","Fund","Business",]},{"word": "Venture Capital","restrictedWords":["Investment","Business","Start-Up","Company","Venture",]},{"word": "Private Equity","restrictedWords":["Money","Company","Investment","Bank","Wall Street",]},{"word": "Angel investment","restrictedWords":["Business","Startup","Rich","Rich People","Sponsor"]}],
      curCard: -1,
      isCardVisible: true,
      numSkips: 0,
      countDown: 60,
      maxSeconds: 60,
      curTeam: 0,
    }
  },
  methods: {
    getRandomCard(){
      this.curCard++;
      return this.gameCards[this.curCard%this.gameCards.length];
    },
    newCard(increment){
      // alert(this.progressBarPercentage);
      if(increment == 0){
        if(this.numSkips >= 3){
          return;
        }
        this.numSkips++;
      }
      this.points += increment;
      // alert('newVard');
      this.isCardVisible = false;
      this.card = this.getRandomCard();
      // alert(this.card);
      setTimeout(() => {
          this.isCardVisible = true;
        }, 0);
      
    },
    countDownTimer() {
      if(this.countDown > 0) {
        setTimeout(() => {
            this.countDown -= 1
            this.countDownTimer()
        }, 1000)
      } else{
        this.gameOver();
      }
    },
    gameOver(){
      alert('Next turn, pass to the newx team');
      this.points =  -1;
      this.curCard = -1;
      this.numSkips = 0;
      this.countDown = this.maxSeconds;
      this.curTeam = 1 - this.curTeam;
      this.countDownTimer();
      this.newCard(1);
    }


  },
  created() {
    // alert('mounted');
    this.countDown = this.maxSeconds;
    this.countDownTimer();
    this.newCard(1);
  },
  computed: {
    progressBarPercentage() {
      return this.countDown/this.maxSeconds*100 + "%";
    }
  }
}
</script>

<style>
.container{
  margin-top: 20px;
}
.row{
  margin-top: 20px;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
body{
  background-color: #84dfff;
}

.footer {
  position: absolute;
  bottom: 30px;
  right: 30px;
  max-width: 20%;
  min-width: 200px;;
}
</style>
