/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'atlasColor': 'url(./src/assets/img/atlasColor.png)',
        'logoBlanco': 'url(./src/assets/img/logo_blanco.png)',
        'tituloColaboradores': 'url(./src/assets/img/Colaboradores.png)',
        'tituloManager': 'url(./src/assets/img/Manager.png)',
        'tituloPM': 'url(./src/assets/img/ProjectManager.png)',
        'flechaColaboradores': 'url(./src/assets/img/flecha_colaboradores.png)',
        'flechaPM': 'url(./src/assets/img/flecha_pm.png)',
        'flechaManager': 'url(./src/assets/img/flecha_manager.png)',
        'imgContainer1': 'linear-gradient(90deg, rgba(115, 115, 115,1) 0%, rgba(115, 115, 115,1) 15%, rgba(115, 115, 115,0.5802696078431373) 30%, rgba(115, 115, 115, 0.181) 60%),url(./src/assets/img/Crombie-45.jpg)',
        'imgContainer2': 'linear-gradient(90deg, rgba(115, 115, 115,1) 0%, rgba(115, 115, 115,1) 15%, rgba(115, 115, 115,0.5802696078431373) 30%, rgba(115, 115, 115, 0.181) 60%),url(./src/assets/img/Crombie-46.jpg)',
        'imgContainer3': 'linear-gradient(90deg, rgba(115, 115, 115,1) 0%, rgba(115, 115, 115,1) 15%, rgba(115, 115, 115,0.5802696078431373) 30%, rgba(115, 115, 115, 0.181) 60%),url(./src/assets/img/Crombie-47.jpg)',
        'logoAtlas' : 'url(./src/assets/img/logo1.png)'
        
      },
	  colors: {
		'blue': '#377DFF',
		'lightblue': '#E8F0FB',
		'lightgray': '#DBDBDB',
		'gray': '#BFBFBF',
		'darkgray': '#737898',
		'yellow': '#FFA600',
		'lightyellow': '#FFEDCD',
		'violet': '#EE61CF',
		'lightviolet': '#FDEBF9',
		'green': '#38CA89',
		'lightgreen': '#D6F5E6',
		'red': '#FF5151',
    'custom-dark': '#1b1b1b',
    'custom-white': '#e7e7e7',
    'custom-gray': '#737373',
    'nav-color': '#292929',
		'lightred': '#FFEFE7',
    'card-blue' : '#25b2e2',
    'card-yellow' : '#ffb12a',
    'card-green' : '#18ce21',
    'card-pink' : '#ee326c',
    'card-violet' : '#80319b'
	  },
    },
  },
  plugins: [],
}

