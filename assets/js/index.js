const app = new Vue({
    el:"#app",
    data:{
        name: '',
        username: 'Modeuil',
        newTweet: '',
        tweets:[],
        bio: "Excited future fullstack developer",
    },
    mounted () {
      let saved = localStorage.getItem('tweets')
      if (saved) {
        this.tweets = JSON.parse(saved);
        console.log(tweets)
      }
    },
    watch: {
      tweets: {
        handler() {
          localStorage.setItem('tweets', JSON.stringify(this.tweets));
        },
        deep: true
      }
    },
    
});