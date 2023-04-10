import React from "react";
import { Route, Routes } from 'react-router-dom';
import Navigation from "./Navigation";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import DetailPage from "../pages/DetailPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ArchivePage from "../pages/ArchivePage";
import { getUserLogged, putAccessToken } from "../utils/api";
import { ThemeProvider } from "../contexts/ThemeContext";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      themeContext: {
        theme: localStorage.getItem('theme') || 'light',
        toggleTheme: () => {
          this.setState((prevState) => {
            const newTheme = prevState.themeContext.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return {
              themeContext: {
                ...prevState.themeContext,
                theme: newTheme
              }
            }
          })
        }
      }
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  async componentDidMount() {
    document.documentElement.setAttribute('data-theme', this.state.themeContext.theme);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.themeContext.theme !== this.state.themeContext.theme) {
      document.documentElement.setAttribute('data-theme', this.state.themeContext.theme);
    }
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      }
    });

    putAccessToken('');
  }

  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <ThemeProvider value={this.state.themeContext}>
          <body>
            <div className="note-app__header">
              <h1>Notes</h1>
            </div>
            <div className="note-app__body">
              <Routes>
                <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </div>
          </body>
        </ThemeProvider>
      )
    }

    return (
      <ThemeProvider value={this.state.themeContext}>
        <body>
          <div className="note-app__header">
            <h1>Notes</h1>
            <Navigation logout={this.onLogout} name={this.state.authedUser.name} />
          </div>
          <div className="note-app__body">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/archive" element={<ArchivePage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/detail/:id" element={<DetailPage />} />
              <Route path="*" />
            </Routes>
          </div>
        </body>
      </ThemeProvider>
    );
  }
}

export default NoteApp;