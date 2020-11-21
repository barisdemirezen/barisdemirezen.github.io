

let vm = new Vue({

	el:'#app',
	data:{
		showInput:true,
		showAlbum:false,
		singer:'The Old Winehouse',
		song:'Back To Black',
		image:'https://image.freepik.com/free-photo/woman-red-dress-leaning-against-old-car_1208-232.jpg',
	},
	methods:{
		showPlayer(){
			this.showAlbum=true;
			this.showInput=false;
		},
		showData(){
			this.showAlbum=false;
			this.showInput=true;
		}
	}

	})