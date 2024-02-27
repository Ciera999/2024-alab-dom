
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];




  var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

//select and cashe the <main> element

const mainEl = document.querySelector('main');


//Set the background color of mainEl to the value stored in the --main-bg CSS custom property.



mainEl.style.backgroundColor = 'var(--main-bg)';


//Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.

mainEl.innerHTML = '<h1>DOM Manipulation</h1>'

//Add a class of flex-ctr to mainEl.
//Hint: Use the Element.classList API.


mainEl.classList.add('flex-ctr');

//Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.


const topMenuEl = document.querySelector('#top-menu');

//Set the height of the topMenuEl element to be 100%.

topMenuEl.style.height = '100%'

//Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.




topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';


//Add a class of flex-around to topMenuEl.

topMenuEl.classList.add('flex-around');


//Iterate over the entire menuLinks array and for each "link" object:

menuLinks.forEach(link => {


    //Create an <a> element.
    const linkElement = document.createElement('a');
    

    //On the new element, add an href attribute with its value set to the href property of the "link" object
    linkElement.setAttribute('href', link.href)

    // Set the new element's content to the value of the text property of the "link" object.
    linkElement.textContent = link.text;
    
    //Append the new element to the topMenuEl element.
    topMenuEl.appendChild(linkElement);

});


//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.

const subMenuEl = document.querySelector('#sub-menu');

//Set the height subMenuEl element to be "100%".
subMenuEl.style.height = '100%'

//Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

//Add the class of flex-around to the subMenuEl element.

subMenuEl.classList.add('flex-around');


//Set the CSS position property of subMenuEl to the value of absolute.

subMenuEl.style.position - `absoulte`;

//Set the CSS top property of subMenuEl to the value of 0


subMenuEl.style.top - `0`;

//In order to add submenu links, we will need to restructure the menuLinks array within index.js. Update the menuLinks array to the following:

//Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.

// Select and cache all of the <a> elements inside topMenuEl
const topMenuLinks = topMenuEl.querySelectorAll('a');

// Attach a delegated 'click' event listener to topMenuEl
topMenuEl.addEventListener('click', function(event) {
  // Call the event object's preventDefault() method
  event.preventDefault();

  // Immediately return if the element clicked was not an <a> element
  if (!event.target.matches('a')) {
    return;
}



// Log the content of the <a> to verify the handler is working
  console.log(event.target.textContent.toLowerCase());

  // Add the active class to the <a> element that was clicked, unless it was already active
  if (!event.target.classList.contains('active')) {
    // Remove the active class from each other <a> elnction to build sunement in topMenuLinks
    topMenuLinks.forEach(link => link.classList.remove('active'));

 // Add the active class to the clicked <a> element
    event.target.classList.add('active');
  }
});

//Helper function to build submenu
function buildSubmenu(sublinks) {

    //clear the current contest of submenuEl
    subMenuEl.innerHTML - ``;


    //iterate over the sublinks array of the submenuEL

    subLinks.foreach(link => {
        //create an <a> element
        const subLinkElement = document.createElement(`a`);

     // Add an href attribute to the <a>, with the value set by the href property of the "link" object
     subLinkElement.href = link.href;

     // Set the element's content to the value of the text property of the "link" object
     subLinkElement.textContent = link.text;

     // Append the new element to the subMenuEl
     subMenuEl.appendChild(subLinkElement);
 });

}












