import PropTypes from "prop-types";
import JournalPreview from "./JournalPreview";

const JournalList = ({ journals }) => {
  return (
    <div>
      {journals.map((journal) => (
        <JournalPreview key={journal.id} journal={journal} />
      ))}
    </div>
  );
};

JournalList.propTypes = {
  journals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default JournalList;
