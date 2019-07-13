Vue.component('memorycard', {
    data: function(){
        
    },
    props: ['memoryCard',  'cardIndex'],
    template: `
        <div 
            :class="[   
                        'memory-card', 
                        {flip: memoryCard.flipped}
                    ]" 
            @click="onClick"
        >
            <img 
                class="front-face" 
                v-bind:src="memoryCard.imageUrl" 
                v-bind:alt="memoryCard.cardType" 
            />

            <img 
                class="back-face" 
                src="img/js-badge.svg" 
                alt="JS Badge" 
            />
        </div>
    `,
    methods: {
        onClick(){
            this.$emit('cardclick', this.cardIndex);
        }
    }
        
})



var app = new Vue ({
    el: '#app',
    data: {
        countdown: 60,
        guess: {},
        cards: [
            { type: 'Aurelia', imageUrl: 'img/aurelia.svg', classList: ['memory-card'], flipped: false },
            { type: 'Aurelia', imageUrl: 'img/aurelia.svg', classList: ['memory-card'], flipped: false },
            { type: 'Vue', imageUrl: 'img/vue.svg', classList: ['memory-card'], flipped: false },
            { type: 'Vue', imageUrl: 'img/vue.svg', classList: ['memory-card'], flipped: false },
            { type: 'Angular', imageUrl: 'img/angular.svg', classList: ['memory-card'], flipped: false },
            { type: 'Angular', imageUrl: 'img/angular.svg', classList: ['memory-card'], flipped: false },
            { type: 'Ember', imageUrl: 'img/ember.svg', classList: ['memory-card'], flipped: false },
            { type: 'Ember', imageUrl: 'img/ember.svg', classList: ['memory-card'], flipped: false },
            { type: 'Backbone', imageUrl: 'img/backbone.svg', classList: ['memory-card'], flipped: false },
            { type: 'Backbone', imageUrl: 'img/backbone.svg', classList: ['memory-card'] , flipped: false},
            { type: 'React', imageUrl: 'img/react.svg', classList: ['memory-card'], flipped: false },
            { type: 'React', imageUrl: 'img/react.svg', classList: ['memory-card'] , flipped: false}
        ]
    },
    methods: {
        flipCard(cardIndex) {
            let currentCard = this.cards[cardIndex];
            currentCard.flipped = !currentCard.flipped;
        },
        flipAllCards(){
            setTimeout(() => this.cards.forEach(c => c.flipped = false), 500)
        },
        onCardClick(cardIndex){
            //this.flipCard(cardIndex)
           //console.log(cardIndex)
        }
    },
    created() {
        this.cards.sort((a,b) => Math.random() - 0.5);
    },
    mounted(){
        //setInterval( () =>  this.countdown-- , 1000);
    },
    // watch : {
    //     countdown(newValue){
    //         if(newValue <= 0) {
    //             //alert('Game Over!');
    //         }
    //     },
    //     guess(newValue, oldValue) {
    //         if(newValue.try === 'second' && oldValue.try === 'first')  {
    //             let first = this.cards[oldValue.cardIndex];
    //             let second = this.cards[newValue.cardIndex];
    //             if(first.type !== second.type) {
    //                 this.flipAllCards()
    //             }
                

    //         }
    //     }
    // }


});