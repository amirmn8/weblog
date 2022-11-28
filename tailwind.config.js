/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./nuxt.config.{js,ts}",
  "./app.vue",],
  theme: {
    extend: { 
      borderRadius: {
        '30px':'30px'
          },
      boxShadow: {
      'mine': '0 0px 40px 0px rgba(0, 0, 0, 0.05)',
      'my-btn': '0 5px 10px 0px rgba(0, 200, 83,0.25)',
      'foBtn': '0 4px 4px 0 rgba(0, 0, 0,0.25)',
      'actBtn': '0 4px 4px 0 rgba(0, 0, 0,0.25)',
      'my-fill-btn': '0 5px 10px 0 rgba(0, 200, 83,0.25)',
      'search': '0 0px 10px 0 rgba(0, 0, 0,0.05)',
      'cardshadow': '0 0px 30px 0 rgba(0, 200, 83,0.05)',
      'page': '0 0px 10px 0 rgba(0, 200, 83,.1)',
     
      
    }  ,
      colors: {
        'my-green-fade': 'rgba(0, 200, 83, 0.5)',
      'my-green': '#00c853',
      'borderbtn': '#00712F',
      'inputBorder' : 'rgba(0, 0, 0, 0.2)'  ,
      'miniText' : 'rgba(55, 55, 55, 1)',
      'category' : '#7b7b7b',
  
      
    },
    spacing: {
      '99px': '99px', '6vw': '6vw','5vw': '5vw','1vw': '1vw','8vw': '8vw','3vw': '3vw','.5vw': '.5vw','200px': '200px','100px': '100px',
   '80vw': '80vw','15vw': '15vw', '30px': '30px','50vw': '50vw' ,'18vw': '18vw','56vw': '56vw', '102': '394px', '30vw': '30vw', '278px': '278px', '760px': '760px', '18px': '18px', '60px': '60px' ,'71px': '71px' ,'38px': '38px'}},
    textDecorationThickness: {
      5: '5px',
    },
    textUnderlineOffset: {
      50: '50px',
    },
    fontFamily: {
      'IRANYekan': ['IRANYekan']
    },
    maxWidth: {
      '10xl': '1980px',
    },


  },
  plugins: [],
}
