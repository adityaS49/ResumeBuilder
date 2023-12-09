module.exports = ({
    name,
    email,
    phone,
    linkedin,
    github,
    skills,
    exp1_org,
    exp1_pos,
    exp1_desc,
    exp1_dur,
    exp2_org,
    exp2_pos,
    exp2_desc,
    exp2_dur,
    proj1_title,
    proj1_link,
    proj1_desc,
    proj2_title,
    proj2_link,
    proj2_desc,
    edu1_school,
    edu1_year,
    edu1_qualification,
    edu1_desc,
    edu2_school,
    edu2_year,
    edu2_qualification,
    edu2_desc,
    extra_1,
    extra_2,
  }) => {
    return `
          <!doctype html>
          <html>
              <head>
                  <!-- Font Awesome -->
                  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
                  <!-- Bootstrap core CSS -->
                  <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
                  <!-- Material Design Bootstrap -->
                  <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css" rel="stylesheet">
      
                  <style>
                    html{
                        zoom: 0.55;
                    }    
                    .rule{
                      border-bottom: 1px solid black;
                      width:80%;
                    }
                    .mobile{
                      margin-top:-10px;
                    }
                    .email{
                      margin-bottom: 0;    
                    }
                    body{
                      font-family: 'Garamond';
                    }
                  </style>
              
              </head>
              <body>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Your Name</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#skills">Skills</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#experience">Experience</a>
                </li>
                <!-- Add more navigation links as needed -->
            </ul>
        </div>
    </nav>

    <!-- Main Content -->
    <div class="container mt-5">

        <!-- Personal Info -->
        <div class="row text-center">
            <div class="col-lg-6 mx-auto">
                <h1 class="font-weight-bold">${name}</h1>
                <p class="lead email"><strong>Email:</strong> ${email}</p>
                <p class="lead"><strong>Contact:</strong> (+92)${phone}</p>
                <p class="lead"><strong>LinkedIn:</strong> ${linkedin}</p>
                <p class="lead"><strong>Github:</strong> ${github}</p>
            </div>
        </div>

        <!-- Skills -->
        <div class="row mt-5" id="skills">
            <div class="col-lg-8 mx-auto bg-light p-3">
                <h3 class="font-weight-bold">Skills</h3>
                <p class="lead">${skills}</p>
            </div>
        </div>

        <!-- Experience -->
        <div class="row mt-5" id="experience">
            <div class="col-lg-8 mx-auto">
                <!-- Add Bootstrap cards for each experience -->
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${exp1_org}, ${exp1_pos} (${exp1_dur})</h5>
                        <p class="card-text">${exp1_desc}</p>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${exp2_org}, ${exp2_pos} (${exp2_dur})</h5>
                        <p class="card-text">${exp2_desc}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add similar sections for Projects, Education, and Extra-Curriculars -->

    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <!-- MDB JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/js/mdb.min.js"></script>
</body>      </html> 
        `;
  };