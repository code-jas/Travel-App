
// objects
const menu = [
   {
      id: 1,
      title: "La Union, Ilocos Region",
      category: "Luzon",
      img: "https://gttp.imgix.net/307764/x/0/?auto=format%2Ccompress&fit=crop&crop=faces%2Cedges%2Ccenter&bg=%23fff&ixlib=react-8.6.4&h=805&q=35&dpr=1",
      desc: `Explore the chill surf beach vibe and other tourist spots in La Union, one of the favorite quick weekend destinations of young Metro Manila dwellers. `,
   },
   {
      id: 2,
      title: "Pangasinan, Ilocos Region",
      category: "Luzon",
      img: "https://gttp.imgix.net/254258/x/0/hundred-islands-pangasinan-private-day-tour-with-transfers-from-manila.jpg?auto=format%2Ccompress&fit=crop&crop=faces%2Cedges%2Ccenter&bg=%23fff&ixlib=react-8.6.4&h=805&q=35&dpr=1",
      desc: `Pangasinan is a destination for tourists who wish to explore islands and beaches, waterfalls, and feast on tasty local cuisine—all just 3-4 hours of drive from Manila.`,
   },
   {
      id: 3,
      title: "Isabela, Cagayan Valley",
      category: "Luzon",
      img: "https://gttp.imgix.net/225793/x/0/malamawi-beach-and-isabela-city-day-tour-free-transfers-and-lunch-3.jpg?auto=format%2Ccompress&fit=crop&crop=faces%2Cedges%2Ccenter&bg=%23fff&ixlib=react-8.6.4&h=805&q=35&dpr=1",
      desc: `Spend your day enjoying the pristine turquoise waters of Malamawi Beach in Isabela City with this full-day tour from Zamboanga City. `,
   },
   {
      id: 4,
      title: "Puerto Princesa",
      category: "Visayas",
      img: "https://gttp.imgix.net/315459/x/0/entrance-to-the-underground-river-of-puerto-princesa-palawan.jpg?auto=format%2Ccompress&fit=crop&crop=faces%2Cedges%2Ccenter&bg=%23fff&ixlib=react-8.6.4&h=955&q=35&dpr=1",
      desc: `Puerto Princesa is the capital, seat of government, and economic center of Palawan, which is considered the Philippines’ Last Frontier because of its strategic location and ecological bounty.`,
   },
   {
      id: 5,
      title: "Mactan, Cebu City",
      category: "Visayas",
      img: "https://gttp.imgix.net/222425/x/0/shrine-of-lapu-lapu-found-in-mactan-island.jpg?auto=format%2Ccompress&fit=crop&crop=faces%2Cedges%2Ccenter&bg=%23fff&ixlib=react-8.6.4&h=955&q=35&dpr=1",
      desc: `Explore the historic highlights and attractions of Cebu City and Mactan Island on this private guided day tour.`,
   },
   {
      id: 6,
      title: "Busuanga Black Island",
      category: "Visayas",
      img: "https://gttp.imgix.net/329241/x/0/swimming-at-black-island.jpg?auto=format%2Ccompress&fit=crop&crop=faces%2Cedges%2Ccenter&bg=%23fff&ixlib=react-8.6.4&h=805&q=35&dpr=1",
      desc: `This trip is ideal for those who want to explore more of Palawan from Coron hassle-free as it comes with a tour guide, entrance fees, boat transfers, land transfers from and to your hotel or resort in Coron, and a picnic lunch.`,
   },
   {
      id: 7,
      title: "Sorsogon Matnog Island",
      category: "Luzon",
      price: 8.99,
      img: "https://gttp.imgix.net/219160/x/0/aerial-view-of-subic-beach-in-matnog-sorsogon.jpg?auto=format%2Ccompress&fit=crop&crop=faces%2Cedges%2Ccenter&bg=%23fff&ixlib=react-8.6.4&h=805&q=35&dpr=1",
      desc: `Discover the pristine beaches nestled in Sorsogon province with this island-hopping day tour.`,
   },
   {
      id: 8,
      title: "Bohol",
      category: "Visayas",
      price: 12.99,
      img: "https://gttp.imgix.net/291281/x/0/large-pool-of-bohol-beach-club-resort-11.jpg?auto=format%2Ccompress&fit=crop&crop=faces%2Cedges%2Ccenter&bg=%23fff&ixlib=react-8.6.4&h=805&q=35&dpr=1",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
   },
   {
      id: 9,
      title: "Cagayan De Oro City",
      category: "Mindanao",
      price: 16.99,
      img: "https://gttp.imgix.net/256128/x/0/?auto=format%2Ccompress&fit=crop&crop=faces%2Cedges%2Ccenter&bg=%23fff&ixlib=react-8.6.4&h=955&q=35&dpr=1",
      desc: `Cagayan de Oro or CDO is a highly urbanized city located in the Misamis Oriental region of Northern Mindanao, Philippines.`,
   },
   {
      id: 10,
      title: "South Batan Batanes",
      category: "Luzon",
      price: 5.21,
      img: "https://gttp.imgix.net/196129/x/0/homoron-blue-lagoon.jpg?auto=format%2Ccompress&fit=crop&crop=faces%2Cedges%2Ccenter&bg=%23fff&ixlib=react-8.6.4&h=955&q=35&dpr=1",
      desc: `Explore the beauty of the southern section of Batan Island with this full-day tricycle tour in Batanes. `,
   }
];

// const festivalContent = [
//    {
//       id: 1,
//       title: "kadayawan festival",
//       islandGroup: "Mindanao",
//       date: 15.99,
//       location: "./images/item-1.jpeg",
//       paragraph1: ` The Kadayawan Festival is a thanksgiving to nature for the harvest and life in general, held in the city of Davao in the Philippines. Kadayawan is a native expression in the Dabawnon tongue. It’s derived from the word “madayaw” which means good, valuable, and superior. Back in the day, the ethnic tribes of Davao would come together to celebrate abundant crops, performing rituals that paid tribute to the nature gods. They used to display fruits, vegetables, flowers, rice, and corn grains on their mats and at the front of their houses as a sign of respect for the great year they’ve had. They used to sing and dance as well, much like what they do today. In the 1970s, then Mayor Elias B. Lopez, encouraged the different Davao tribes to showcase their thanksgiving rituals.

//       In 1986, the Davao City government launched a project that aimed to unite the people during the turbulent times of the Martial Law. Back then, the name of the festival was called Apo Duwaling, after three natural wonders you can find the region: Mt. Apo, Durian, and Waling-waling. It was first officially renamed as the Kadayawan Festival in 1988 by then Mayor Rodrigo Duterte, and now, over 30 years later, it’s still being celebrated. `,
//       img: "./images/item-10.jpeg",
//       paragraph2: `  It is once a small gathering, that now is one of the highly-anticipated festivals in the Philippines. From the dynamic street dancing to the vibrant giant floral parade, Kadayawan has something for everyone. It is Held every third week of August that Dabaweños celebrates as a thanksgiving event and a tribute to the lumad, a collective group of indigenous people living in the city. This is what makes Kadayawan a unique festival.

//       The main highlight of the Kadayawan Festival is the parade with magnificent floral floats, street-dancing competitions and exhibits that showcase the island's original culture and history. If you visit Davao at this time, you will get a perfect chance to appreciate the wealth of Philippine culture, food, and traditions. Local people are open-hearted—they will be glad to share their joy with others.  `,
//       imgItem1: "./images/item-10.jpeg",
//       imgItem2: "./images/item-10.jpeg",
//       imgItem3: "./images/item-10.jpeg",
//       imgItem4: "./images/item-10.jpeg",
//       ytPath: "https://www.youtube.com/embed/m1M1_RK3-T8?start=2"

//    },]











// declaration DOM
const sectionCenter = document.querySelector(".section-center");
const btnEl = document.querySelector(".btn-container");


// initialize
window.addEventListener("DOMContentLoaded", function () {
   displayMenuButtons(menu);
   displayMenuItems(menu);
});



// Function to Display category buttons
function displayMenuButtons(menuBtns) {

   const categories = menuBtns.reduce((values, item) => {
      if (!values.includes(item.category)) {
         values.push(item.category);
      }
      return values;
   }, ['all']);
   const categoryBtns = categories
      .map((category) => {
         return ` 
                 <button class="filter-btn" type="button" data-id="${category}">${category}</button>
            `
      })
      .join("");
   btnEl.innerHTML = categoryBtns


   // Filter Button Click Event Listener
   const filterBtns = document.querySelectorAll(".filter-btn");
   console.log(filterBtns);
   filterBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
         const category = e.currentTarget.dataset.id;
         console.log(category)
         const menuCategory = menu.filter((menuItem) => {
            if (menuItem.category === category) {
               return menuItem;
            }
         });
         if (category === 'all') {
            displayMenuItems(menu);
         }
         else {
            displayMenuItems(menuCategory);
         }
      });
   });
}

// Function to display articles
function displayMenuItems(menuItems) {
   let displayMenu = menuItems.map(function (item) {
      // console.log(item);
      return `
      <article class="menu-item">
         <img src="${item.img}" class="photo" alt="${item.title}" />
         <div class="item-info">
            <header>
               <h4>${item.title}</h4>
               
            </header>
            <p class="item-text">
               ${item.desc}
            </p>
         </div>
      </article>
   `;
   });
   displayMenu = displayMenu.join('');
   sectionCenter.innerHTML = displayMenu;

}