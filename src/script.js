Vue.component("movie-detail", {
	props: ["movie"],

	template: `<div>
	<div class="card" style="width: 18rem;">
  <img v-bind:src="movie.poster" class="card-img-top" alt="card image">
  <div class="card-body">
    <h5 class="card-title">{{movie.title}}</h5>
    <a href="#" class="btn btn-primary">more details</a>
  </div>
</div>
	</div>,`,
});

new Vue({
	el: "#mymovieapp",
	data: {
		keyword: "",
		movieslist: [],
	},

	methods: {
		searchMovies() {
			// let url = "http:omdbapi.com/?s=" + this.searchKey + "&apikey=dc16e86";
			let url =
				"https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/keyword?api_key=0c720816278c6694184ef444332aa02a&query=" +
				this.keyword +
				"&page=1";
			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					this.movieslist = data;
				});
			console.log(searchMovies);
		},
	},
});

// "https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/keyword?api_key=0c720816278c6694184ef444332aa02a&query=" +
// 	keyword +
// 	"&page=1";
