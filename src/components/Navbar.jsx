import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setSearchResults } from "../features/journalSlice";

const Navbar = ({ journals, toggleTheme }) => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const results = journals.filter(
      (journal) =>
        journal.title.toLowerCase().includes(term.toLowerCase()) ||
        journal.description.toLowerCase().includes(term.toLowerCase())
    );

    dispatch(setSearchResults(results));
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <input
            type="text"
            placeholder="Search journals..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </li>
        <li>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  journals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Navbar;
