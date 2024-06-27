/*
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setJournals,
  setLoading,
  setError,
} from "../features/journal/journalSlice";
import JournalList from "../components/JournalList";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const { journals, loading, error } = useSelector((state) => state.journal);

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        dispatch(setLoading(true));
        const response = await axios.get("/api/journals");
        dispatch(setJournals(response.data));
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchJournals();
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Journal List</h1>
      <JournalList journals={journals} />
    </div>
  );
};
*/

import PropTypes from "prop-types";

const Home = ({ journals }) => {
  return (
    <div>
      <h1>Journal List</h1>
      <ul>
        {journals.map((journal) => (
          <li key={journal.id}>
            <h2>{journal.title}</h2>
            <p>{journal.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Home.propTypes = {
  journals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Home;
