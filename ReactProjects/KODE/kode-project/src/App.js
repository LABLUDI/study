
function App() {
  return (
  <body>
		<header className="header">
			<div className="container">
				<h1 className="header-title">Поиск</h1>
				<input className="header-input" type="text" id="myInput" onkeyup="myFunction()" placeholder="Введи имя, тег, почту..."></input>
				<ul className="header-list">
					<li className="header-item">Все</li>
					<li className="header-item">Designers</li>
					<li className="header-item">Analysts</li>
					<li className="header-item">Managers</li>
					<li className="header-item">iOS</li>
					<li className="header-item">Android</li>
				</ul>
			</div>
		</header>

		<main>
			<section className="section-people">
				<div className="conteiner">
					<ul className="">
						<li>
							<img></img>
							<div>
								<h3>Алексей Миногаров</h3>
								<span>mi</span>
								<p>Analyst</p>
							</div>
						</li>
						<li>
							<img></img>
							<div>
								<h3>Алиса Иванова</h3>
								<span>al</span>
								<p>Designer</p>
							</div>
						</li>
						<li>
							<img></img>
							<div>
								<h3>Андрей Иванов</h3>
								<span>iv</span>
								<p>Designer</p>
							</div>
						</li>
						<li>
							<img></img>
							<div>
								<h3>Анна Иванова</h3>
								<span>an</span>
								<p>Analyst Team Lead</p>
							</div>
						</li>
						<li>
							<img></img>
							<div>
								<h3>Анна Смирнова</h3>
								<span>sm</span>
								<p>Analyst</p>
							</div>
						</li>
						<li>
							<img></img>
							<div>
								<h3>Влада Вейн</h3>
								<p>Manager</p>
							</div>
						</li>
						<li>
							<img></img>
							<div>
								<h3>Дана Хаматова</h3>
								<p>Manager</p>
							</div>
						</li>
						<li>
							<img></img>
							<div>
								<h3>Иван Андреенко</h3>
								<span>va</span>
								<p>Analyst</p>
							</div>
						</li>
						<li>
							<img></img>
							<div>
								<h3>Инга Антонова</h3>
								<span>ai</span>
								<p>Designer</p>
							</div>
						</li>
						<li>
							<img></img>
							<div>
								<h3>Ирен Адлер</h3>
								<p>Manager</p>
							</div>
						</li>
						<li>
							<img></img>
							<div>
								<h3>Ольга Петрова</h3>
								<span>po</span>
								<p>Analyst</p>
							</div>
						</li>
						<li>
							<img></img>
							<div>
								<h3>Ольга Сергеевна</h3>
								<span>so</span>
								<p>Designer</p>
							</div>
						</li>
						<li>
							<img></img>
							<div>
								<h3>Павел Волков</h3>
								<span>vp</span>
								<p>Art-Director</p>
							</div>
						</li>
						<li>
							<img></img>
							<div>
								<h3>Петр Сиша</h3>
								<span>pe</span>
								<p>Analyst</p>
							</div>
						</li>
						<li>
							<img></img>
							<div>
								<h3>Саймон Кит</h3>
								<p>Team Lead</p>
							</div>
						</li>
						<li>
							<img></img>
							<div>
								<h3>Светлана Осипова</h3>
								<span>os</span>
								<p>Analyst</p>
							</div>
						</li>
						<li>
							<img></img>
							<div>
								<h3>Стас Петрич</h3>
								<span>ps</span>
								<p>Designer</p>
							</div>
						</li>
						<li>
							<img></img>
							<div>
								<h3>Улан Капелов</h3>
								<span>mi</span>
								<p>Analyst</p>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</main>
	</body>
  );
}

export default App;
