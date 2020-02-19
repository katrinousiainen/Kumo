import React from 'react';

//Tässä muodostetaan footer, joka kutsutaan App.js:ssä

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-light text-dark mt-4" id="footer">
        <div className="container-fluid py-3">
          <div class="row">
            <div class="col-md-3"></div>
          </div>
          <div class="row">
            <div class="col-md-6">Tähän tekstiä jos halutaan. <br></br>
              <span class="small">Lisää tekstiä.</span>
            </div>
            <div class="col-md-6 text-right small align-self-end">
              ©2019 &Kumo
                </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;








