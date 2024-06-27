import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

const JournalDetailPage = ({ journalId }) => {
  const [journal, setJournal] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(`https://api.example.com/journals/${journalId}`)
      .then((response) => {
        setJournal(response.data);
      })
      .catch((error) => {
        console.error("Error fetching journal:", error);
      });
  }, [journalId]);

  const handleDownload = async () => {
    try {
      const response = await axios.get(
        `https://api.example.com/journals/${journalId}/download`,
        {
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `journal_${journalId}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);

      console.log("Downloaded!");
    } catch (error) {
      console.error("Error downloading journal:", error);
    }
  };

  const handleShare = async () => {
    try {
      const response = await axios.post(
        `https://api.example.com/journals/${journalId}/share`
      );
      console.log("Shared!", response.data);

      alert("Journal shared successfully!");
    } catch (error) {
      console.error("Error sharing journal:", error);
    }
  };

  if (!journal) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{journal.title}</h2>
      <p>{journal.content}</p>
      <button onClick={handleDownload}>Download</button>
      <button onClick={handleShare}>Share</button>
    </div>
  );
};

JournalDetailPage.propTypes = {
  journalId: PropTypes.number.isRequired,
};

export default JournalDetailPage;
