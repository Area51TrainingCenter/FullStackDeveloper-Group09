import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	libros = [
		{ autor: "Mario Vargas Llosa", novela: "La Ciudad y los Perros", anno: 1980, sinopsis: "Novela basada en una historia del colegio militar Leoncio Prado" },
		{ autor: "Cesar Vallejo", novela: "Los Heraldos Negros", anno: 1910, sinopsis: "Recopilacion de poemas" },
		{ autor: "Jose Maria Arguedas", novela: "El Sexto", anno: 1960, sinopsis: "Narra las vivencias dentro del desparecido penal El Sexto. Especificamente narra las vivencias de 'rosita'" },
		{ autor: "Patrick Suskind", novela: "El Perfume", anno: 1990, sinopsis: "Cuenta la historia de un asesino que mataba mujeres para extraerles sus esencias y crear los mejores perfumes del mundo" },
		{ autor: "Ciro Alegria", novela: "El mundo es ancho y ajeno", anno: 1970, sinopsis: "Muestra un vision del mundo desde la perspectiva de Ciro Alegria" },
		{ autor: "Cesar Vallejo", novela: "Paco Yunque", anno: 1940, sinopsis: "Describe las diferencias sociales y los abusos cometidos por un nino, hijo de un terrateniente, contra un nino pobre cuya mama trabajaba para el terrateniente" },
		{ autor: "Anonimo", novela: "El Lazarillo de Tormes", anno: 1700, sinopsis: "Narra las peripecias de un nino dado por su mama a un patron para que lo alimente y lo eduque. Finalmente paso por 4 patrones y formo su propia empresa de aguatero" }
	]
}
