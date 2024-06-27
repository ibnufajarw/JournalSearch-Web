import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const JournalPreview = ({ journal }) => {
  const [loading, setLoading] = useState(false);

  const handleLike = async (journalId) => {
    try {
      const response = await axios.post(`/api/journals/${journalId}/like`);
      console.log("Liked!", response.data);

      journal.liked = true;
    } catch (error) {
      console.error("Error liking journal:", error);
    }
  };

  const handleDownload = async (journalId) => {
    try {
      setLoading(true);

      const response = await axios.get(`/api/journals/${journalId}/download`, {
        responseType: "blob",
      });

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
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async (journalId) => {
    try {
      setLoading(true);

      const response = await axios.post(`/api/journals/${journalId}/share`);
      console.log("Shared!", response.data);

      alert("Journal shared successfully!");
    } catch (error) {
      console.error("Error sharing journal:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>{journal.title}</h3>
      <p>{journal.description}</p>
      <button onClick={() => handleLike(journal.id)} disabled={journal.liked}>
        {journal.liked ? "Liked!" : "Like"}
      </button>
      <button onClick={() => handleDownload(journal.id)} disabled={loading}>
        {loading ? "Downloading..." : "Download"}
      </button>
      <button onClick={() => handleShare(journal.id)} disabled={loading}>
        {loading ? "Sharing..." : "Share"}
      </button>
    </div>
  );
};

JournalPreview.propTypes = {
  journal: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
  }).isRequired,
};

export default JournalPreview;
