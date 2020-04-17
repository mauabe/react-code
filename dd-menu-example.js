https://css-tricks.com/solved-with-css-dropdown-menus/

////////////
//  HTML  //
////////////

<nav role="navigation">
  <ul>
    <li><a href="#">One</a></li>
    <li><a href="#">Two</a>
      <ul class="dropdown">
        <li><a href="#">Sub-1</a></li>
        <li><a href="#">Sub-2</a></li>
        <li><a href="#">Sub-3</a></li>
      </ul>
    </li>
    <li><a href="#">Three</a></li>
  </ul>
</nav>




///////////
//  CSS  //
///////////
a {
  text-decoration: none;
}

nav {
    font-family: monospace;
}

ul {
  background: darkorange;
    list-style: none;
    margin: 0;
    padding-left: 0;
}

li {
    color: #fff;
  background: darkorange;
    display: block;
    float: left;
    padding: 1rem;
    position: relative;
    text-decoration: none;
  transition-duration: 0.5s;
}
  
li a {
  color: #fff;
}

li:hover {
    background: red;
    cursor: pointer;
}

ul li ul {
    background: orange;
    visibility: hidden;
  opacity: 0;
  min-width: 5rem;
    position: absolute;
  transition: all 0.5s ease;
  margin-top: 1rem;
    left: 0;
  display: none;
}

ul li:hover > ul,
ul li ul:hover {
  visibility: visible;
  opacity: 1;
  display: block;
}

ul li ul li {
    clear: both;
  width: 100%;
}