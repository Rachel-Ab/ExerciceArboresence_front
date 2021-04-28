import "./App.css";
import React, { Component } from "react";
import axios from "axios";

class Treeview extends Component {
  state = {
    localites: null,
    isloading: true,
  };

  componentDidMount() {
    axios
      .get("http://localhost:3003/localites")
      .then((res) => this.setState({ localites: res.data, isloading: false }));
  }
  render() {
    // const array1 = this.state.localites;
    // console.log(`${array1}`);
    // for (let a = 0; a < array1.length; a++) {
    //   for (let i = 0; i < array1.deuxieme.length; i++) {
    //     this.state.localites.deuxieme[i].parentId ===
    //     this.state.localites.premier[a].id
    //       ? console.log(`${this.state.localites.deuxieme[i].label}`)
    //       : console.log("no");
    //   }
    // }
    return this.state.isloading ? (
      <div>loading</div>
    ) : (
      <div className="app">
        <h1>Teest</h1>
        <div className="treeview">
          <h1>Treeviews</h1>
          <ul>
            <li>
              {/* {this.state.localites.premier.forEach((localite) => {
                for (let i = 0; i < this.state.localites.deuxieme.length; i++) {
                  this.state.localites.deuxieme[i].parentId === localite.id
                    ? console.log(`${this.state.localites.deuxieme.label}`)
                    : i++;
                }
              })} */}
            </li>
            <li>
              {this.state.localites.premier.map((localite) => (
                <div>{localite.label}</div>
              ))}
              <ul>
                <li>
                  {this.state.localites.deuxieme.map((localite) => (
                    <div>{localite.label}</div>
                  ))}
                  <ul>
                    <li>
                      {this.state.localites.troisieme.map((localite) => (
                        <div>{localite.label}</div>
                      ))}
                      <ul>
                        <li>
                          {this.state.localites.deuxieme.map((localite) => (
                            <div>{localite.label}</div>
                          ))}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* {this.state.localites.premier.map((localite) => (
          <div>{localite.label}</div>
        ))}
        {this.state.localites.deuxieme.map((localite) => (
          <div>{localite.label}</div>
        ))}
        {this.state.localites.troisieme.map((localite) => (
          <div>{localite.label}</div>
        ))}
        {this.state.localites.deuxieme.map((localite) => (
          <div>{localite.label}</div>
        ))} */}
      </div>
    );
  }
}

export default Treeview;
