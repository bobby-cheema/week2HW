const headerEL = document.getElementById("navigation");
const footerEL = document.getElementById("footer");

const resumeEL = document.getElementById("circleResume");
const projectEL = document.getElementById("circleProjects");
const contactEL = document.getElementById("circleContact");

const navigation = `
<section>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="logo bg-warning mx-3"></div>
          <a class="navbar-brand" href="./index.html">Bobby cheema</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 me-auto mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="./resume.html"
                  >Resume |</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./projects.html">Projects |</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./contact.html">Contact</a>
              </li>
            </ul>
            <div>
              <a href="https://github.com/bobby-cheema" target="_blank">
                <i style="font-size: 30px;color:black;" class="fab fa-github me-4 icon"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/bobby-cheema-5ab81a124/"
                target="_blank"
              >
                <i
                  style="font-size: 30px ;color:black;"
                  class="fab fa-linkedin me-4 icon"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </section>

`;

const footer = `
<section class="mb-5">
      <hr />
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="fw-bold">Phone</div>
            <div>0422079142</div>
          </div>
          <div class="col">
            <div class="fw-bold">Email</div>
            <div>bobby@cs.auckland.ac.nz</div>
          </div>

          <div class="col">
            <div>© 2022 By Bobby Cheema.</div>
            <div>Proudly created with ❤️</div>
          </div>
        </div>
      </div>
    </section>


`;
footerEL.innerHTML = footer;
headerEL.innerHTML = navigation;

resumeEL.addEventListener("click", () => {
  open("./resume.html");
});
projectEL.addEventListener("click", () => {
  open("./projects.html");
});
contactEL.addEventListener("click", () => {
  open("./contact.html");
});
