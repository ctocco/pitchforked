import React from 'react';

export default class MainFooter extends React.Component {
  
  render() {
    return (
        <footer className="footer" light>
		      <div  className="container-inner">
			        <span className="text-muted">Powered by:   <i className="fab fa-spotify"></i>
              </span>
		      </div>
        </footer>
    );
  }
}