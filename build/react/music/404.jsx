export default function NotFound() {
  return (
    <>
      <style>{`
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");

body {
	display: flex;
	min-height: 100vh;
	align-items: center;
	background: linear-gradient(to right, #ffaf7b, #d76d77);
}

.mobile {
	margin: 20px auto;
	max-width: 320px;
	min-height: 640px;
	width: 100%;
	overflow: hidden;
	border-radius: 45px;
	box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.5);
	font-family: "Montserrat", sans-serif;
	background: #f9f9f9;
}

.mobile header {
	padding: 20px;
	background: linear-gradient(to right, #ffafbd, #ffc3a0);
	text-align: center;
	color: white;
}

.title404 {
	font-size: 28px;
	font-weight: 700;
	margin: 0;
}

.subtitle404 {
	font-size: 12px;
	margin-top: 5px;
	opacity: 0.9;
}

.dance {
	width: 90px;
	margin-top: 10px;
	animation: dance 1.2s infinite alternate;
}

@keyframes dance {
	from { transform: rotate(-5deg) translateY(0); }
	to { transform: rotate(5deg) translateY(-5px); }
}

/* SEARCH AREA */
.search {
	padding: 20px;
}

.fake-input {
	display: flex;
	align-items: center;
	background: #fff;
	border-radius: 30px;
	padding: 8px 10px;
	box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.search-input {
	flex: 1;
	border: none;
	outline: none;
	padding: 10px;
	font-family: "Montserrat", sans-serif;
}

button {
	border: none;
	background: transparent;
	cursor: pointer;
}

.result {
	margin-top: 15px;
	max-height: 380px;
	overflow-y: auto;
}

.item {
	display: flex;
	gap: 10px;
	margin-bottom: 10px;
	background: #fff;
	padding: 10px;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0,0,0,0.08);
	align-items: center;
}

.item span {
	font-size: 22px;
}

.detail h4 {
	margin: 0;
	font-size: 13px;
}

.detail p {
	margin: 4px 0 0;
	font-size: 11px;
	color: #666;
}
`}</style>

      <div
        dangerouslySetInnerHTML={{
          __html: `

<div class="mobile">

	<header>
		<h1 class="title404">404</h1>
		<div class="subtitle404">Page not found  here’s something cute while you wait 💕</div>
		<img class="dance" src="https://pngimg.com/uploads/dancer/dancer_PNG32.png" alt="">
	</header>

	<div class="search">
		<div class="fake-input">
			<input type="text" placeholder="Search feelings..." class="search-input">
			<button onclick="App.search()">🔍</button>
		</div>

		<div class="result"></div>
	</div>

</div>

<script>
const items = [
	{ icon: "💡", title: "Tip", desc: "Not everything lost is gone forever." },
	{ icon: "🌈", title: "Hope", desc: "Even broken pages still have beauty." },
	{ icon: "😌", title: "Relax", desc: "You’re safe, just in the wrong URL." },
	{ icon: "💖", title: "Kindness", desc: "Take a breath — you’re doing fine." },
	{ icon: "🧭", title: "Direction", desc: "Try going back or refreshing." },
	{ icon: "✨", title: "Magic", desc: "Errors are just hidden opportunities." },
	{ icon: "🍀", title: "Luck", desc: "Something better might be ahead." }
];

const App = {
	result: document.getElementsByClassName("result")[0],
	searchInput: document.getElementsByClassName("search-input")[0],

	search: function () {
		let q = this.searchInput.value.toLowerCase().trim();

		if (!q) {
			this.show(items);
			return;
		}

		let filtered = items.filter(i =>
			i.title.toLowerCase().includes(q) ||
			i.desc.toLowerCase().includes(q)
		);

		this.show(filtered);
	},

	show: function (list) {
		if (list.length === 0) {
			this.result.innerHTML = "<p style='padding:10px;'>Nothing found… but you’re still okay 💕</p>";
			return;
		}

		this.result.innerHTML = list.map(i => \`
			<div class='item'>
				<span>\${i.icon}</span>
				<div class='detail'>
					<h4>\${i.title}</h4>
					<p>\${i.desc}</p>
				</div>
			</div>
		\`).join("");
	}
};
</script>



`
        }}
      />
    </>
  )
}
